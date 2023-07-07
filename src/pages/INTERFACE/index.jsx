import { Links } from '../../componentes/LINKS'
import * as Tag from './index.js'
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Fab,
  Fade,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  SwipeableDrawer,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useContext, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  RememberMe as RememberMeIcon,
  Diversity3 as Diversity3Icon,
  Menu as MenuIcon,
  Home as HomeIcon,
  Layers as LayersIcon,
  Book as BookIcon,
  Kitchen as KitchenIcon,
  People as PeopleIcon,
  PlayCircle as PlayCircleIcon,
  Bookmarks as BookmarksIcon,
  BookmarkAdd as BookmarkAddIcon,
  Info as InfoIcon,
  Star as StarIcon,
  AlternateEmail as AlternateEmailIcon,
  House as HouseIcon,
  LastPage as LastPageIcon,
  Bookmark as BookmarkIcon,
  EditNote as EditNoteIcon,
  Textsms as TextsmsIcon,
  MarkUnreadChatAlt as MarkUnreadChatAltIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Settings as SettingsIcon,
  Terminal as TerminalIcon,
  TaxiAlert as TaxiAlertIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  DinnerDining as DinnerDiningIcon,
  Favorite as FavoriteIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material'
import { Logo } from '../../componentes/LOGO'
import { AuthContext } from '../../contexts/AuthContext'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { MenuContent } from './components/MenuContent'
import { Links_a } from './components/Links_a'
const links = [
  {
    icon: <HomeIcon />,
    name: 'Home',
    onClick: 'home',
    children: [
      {
        icon: <HouseIcon />,
        name: 'Página principal',
        onClick: 'home',
      },

      { icon: <LastPageIcon />, name: 'Sub página', onClick: 'subPage' },
      {
        icon: <BookmarkIcon />,
        name: 'Receitas favoritas',
        onClick: 'favRecipes',
      },
      { icon: <EditNoteIcon />, name: 'Rascunho', onClick: 'draft' },
    ],
  },
  {
    icon: <LayersIcon />,
    name: 'Pages',
    onClick: 'pages',
    children: [
      { name: 'Top Review', icon: <StarIcon />, link: '/topReview' },
      { name: 'Single Video', icon: <PlayCircleIcon /> },
      { name: 'Single Book', icon: <BookmarksIcon /> },
      { name: 'About us', icon: <InfoIcon /> },
      { name: 'Contacts', icon: <AlternateEmailIcon /> },
    ],
  },
  {
    icon: <KitchenIcon />,
    name: 'Recitas',
    onClick: 'recipes',
    children: [
      {
        name: 'Minhas Receitas',
        icon: <BookIcon />,
        link: '/myRecipes',
      },
      {
        name: 'Receitas Favoritas',
        icon: <FavoriteIcon />,
        link: '/youfavoriteRecipes',
      },

      {
        name: 'Create Recipe',
        icon: <BookmarkAddIcon />,
        link: '/createRecipes',
      },
      { name: 'Gerador de receitas', icon: <DinnerDiningIcon /> },
    ],
  },
  {
    icon: <BookIcon />,
    name: 'Blog',
    onClick: 'blog',
    children: [
      {
        icon: <TextsmsIcon />,
        name: 'Blog 1',
        onClick: 'blog1',
      },

      {
        icon: <MarkUnreadChatAltIcon />,
        name: 'Blog 2',
        onClick: 'blog2',
      },
      {
        icon: <QuestionAnswerIcon />,
        name: 'Blog 3 (Single)',
        onClick: 'blog2',
      },
    ],
  },
  {
    icon: <PeopleIcon />,
    name: 'Comunidade',
    onClick: 'community',
    children: [
      {
        name: 'Comunidade',
        icon: <Diversity3Icon />,
        link: '/comunidade',
        onClick: 'community',
      },
      { name: 'Grupos', icon: <RememberMeIcon /> },
    ],
  },
  {
    icon: <SettingsIcon />,
    name: 'Settings',
    onClick: 'adSettings',
    children: [
      { icon: <TerminalIcon />, name: 'Mode root', onClick: 'root' },
      {
        icon: <AdminPanelSettingsIcon />,
        name: 'Mode admin',
        onClick: 'admin',
      },
      {
        icon: <TaxiAlertIcon />,
        name: 'Red alert mode ',
        onClick: 'Red',
      },
    ],
  },
]

export const INTERFACE = ({ RENDERPAGE }) => {
  const matches = useMediaQuery('(min-width:900px)')
  const matchesMobileSmall = useMediaQuery('(min-width:550px)')

  const [perfil, setperfil] = useState(false)
  const [opens, setopens] = useState(null)

  const [scrollHeight, setScrollHeight] = useState(0)
  const [selectedLink, setSelectedLink] = useState()
  const [anchorEl, setAnchorEl] = useState(null)
  const scrollRef = useRef(null)

  const location = useLocation()
  const pathnames = location.pathname
    .split('/')
    .filter((pathname) => pathname !== '')
  localStorage.setItem('breadcrumbs', JSON.stringify(pathnames))
  const storedBreadcrumbs = JSON.parse(localStorage.getItem('breadcrumbs'))
  const [openDrawer, setOpenDrawer] = useState(false)
  const toggleDrawer = (openDrawer) => () => {
    setOpenDrawer(openDrawer)
  }
  const [openDrawerRight, setOpenDrawerRight] = useState(false)
  const toggleDrawerRight = (openDrawerRight) => () => {
    setOpenDrawerRight(openDrawerRight)
  }

  const isAtBottom = window.scrollY == window.innerHeight
  const isAtTop = window.scrollY == 0

  // useEffect(() => {
  //   let timeoutId
  //   const handleScroll = () => {
  //     clearTimeout(timeoutId)

  //     timeoutId = setTimeout(() => {
  //       const height = window.scrollY || 0
  //       setScrollHeight(height)
  //     }, 100) // Adicione um pequeno atraso aqui, por exemplo, 100ms
  //   }

  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', handleScroll)

  //     // Limpe o evento de scroll quando o componente for desmontado
  //     return () => {
  //       clearTimeout(timeoutId)
  //       window.removeEventListener('scroll', handleScroll)
  //     }
  //   }
  // }, [])

  const [showLinks, setShowLinks] = useState(false)
  const handleSelectLink = (event, newLink) => {
    if (selectedLink === newLink) {
      setSelectedLink(null)
      return
    }

    console.log(selectedLink, newLink.onClick)
    setSelectedLink(newLink)
    setAnchorEl(event.target)
  }
  const handleClose = () => {
    setSelectedLink(null)
    setAnchorEl(null)
  }
  const open = Boolean(opens)
  const handleClick = (event) => {
    setopens(event.currentTarget)
  }
  const Close = () => {
    setopens(null)
  }

  return (
    <MenuContent
      handleClose={handleClose}
      Close={Close}
      handleClick={handleClick}
      matchesMobileSmall={matchesMobileSmall}
      links={links}
      selectedLink={selectedLink}
      scrollRef={scrollRef}
      RENDERPAGE={RENDERPAGE}
    >
      {matches ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          {storedBreadcrumbs.map((pathname, index) => {
            const routeTo = `/${storedBreadcrumbs
              .slice(0, index + 1)
              .join('/')}`
            return (
              <Link
                sx={{ mr: 0.5, color: 'white' }}
                key={routeTo}
                href={routeTo}
              >
                <Box
                  sx={{
                    textTransform: 'uppercase',
                    mr: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <FolderIcon sx={{ mr: 0.5, color: 'white' }} />
                  {pathname}
                </Box>
              </Link>
            )
          })}
        </Box>
      ) : (
        <Stack>
          {/* abrir o menu lado esqierdo */}
          <MenuIcon onClick={toggleDrawer(true)} />
          <div>
            <SwipeableDrawer
              sx={{
                width: matchesMobileSmall ? '30%' : '100%',
              }}
              anchor="left"
              open={openDrawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <Tag.ItemsLinks
                sx={{
                  padding: 1.6,
                }}
              >
                <Logo
                  logoStyle={{
                    marginLeft: '-0.51rem',
                    paddingLeft: '10px',
                    filter: 'brightness(0.1) saturate(0.8) hue-rotate(10deg)',
                  }}
                />
              </Tag.ItemsLinks>
              <Divider />
              <Tag.MinhaLista
                sx={{ width: 350 }}
                role="presentation"
                onKeyDown={toggleDrawer(false)}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {links.map((li) => {
                  return (
                    <Links_a
                      key={li.name}
                      {...li}
                      handleClick={(event) => handleSelectLink(event, li.name)}
                      selectedLink={selectedLink}
                    />
                  )
                })}
                <Divider />
              </Tag.MinhaLista>
            </SwipeableDrawer>
          </div>
        </Stack>
      )}
    </MenuContent>
  )
}
