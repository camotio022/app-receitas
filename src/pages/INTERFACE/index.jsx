import { Links } from "../../componentes/LINKS";
import * as Tag from './index.js';
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
  useMediaQuery
} from "@mui/material";
import {
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Button from '@mui/joy/Button';
import {
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  FileCopy as FileCopyIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Edit as EditIcon,
  Folder as FolderIcon,
  Mail as MailIcon,
  Sort as SortIcon,
  Category as CategoryIcon,
  ColorLens as ColorLensIcon,
  Settings,
  PersonAdd,
  Logout,
  Add,
  Collections,
  Edit
} from '@mui/icons-material';
import {
  RememberMe as RememberMeIcon,
  Diversity2 as Diversity2Icon,
  Diversity3 as Diversity3Icon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Layers as LayersIcon,
  Book as BookIcon,
  Kitchen as KitchenIcon,
  Beenhere as BeenhereIcon,
  People as PeopleIcon,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
  RestaurantMenu as RestaurantMenuIcon,
  PlayCircle as PlayCircleIcon,
  Bookmarks as BookmarksIcon,
  BookmarkAdd as BookmarkAddIcon,
  Info as InfoIcon,
  Star as StarIcon,
  AlternateEmail as AlternateEmailIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  House as HouseIcon,
  LastPage as LastPageIcon,
  Bookmark as BookmarkIcon,
  EditNote as EditNoteIcon,
  Textsms as TextsmsIcon,
  MarkUnreadChatAlt as MarkUnreadChatAltIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Settings as SettingsIcon,
  Block as BlockIcon,
  Logout as LogoutIcon,
  Terminal as TerminalIcon,
  TaxiAlert as TaxiAlertIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  DinnerDining as DinnerDiningIcon,
  Favorite as FavoriteIcon,
  Tune as TuneIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from '@mui/icons-material';
import { Logo } from "../../componentes/LOGO";
import { AuthContext } from "../../contexts/AuthContext";

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
      { name: 'Top Review', icon: <StarIcon />, link: '/topReview', },
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
      { name: 'Receitas Favoritas', icon: <FavoriteIcon />, link: '/youfavoriteRecipes', },

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
    icon: <PeopleIcon />, name: 'Comunidade', onClick: 'community',
    children: [
      { name: 'Comunidade', icon: <Diversity3Icon />, link: '/comunidade', onClick: 'community' },
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
      }
    ],
  },
]
const Links_b = ({
  name,
  icon,
  handleClick,
  handleClose,
  opens,
  children,
  selectedLink,
}) => {
  const { logout } = useContext(AuthContext)
  const isSelected = selectedLink === name
  const handleLinkClick = (link) => {
    if (link.onClick === 'logout') {
      logout() // Chame a função logout aqui
    } else {
      // Lógica para lidar com outros links
    }
  }
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          borderRight: '1px solid',
          paddingRight: '15px'
        }}
        id="basic-button"
        aria-controls={isSelected ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isSelected ? 'true' : undefined}
        onClick={handleClick}
      >
        {/* <Stack>{icon}</Stack> */}
        <Stack>{name}</Stack>
      </Stack>
      <Menu
        id="basic-menu"
        opens={opens}
        open={isSelected}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {children?.length > 0 &&
          children.map((child, index) => (
            <MenuItem
              key={index}
              onClick={() => handleLinkClick(child)}
            >
              <ListItemIcon>{child.icon}</ListItemIcon>
              <ListItemText>
                <Link href={child.link}>{child.name}</Link>
              </ListItemText>
            </MenuItem>
          ))}
      </Menu>
    </>
  )
}
export const Links_a = ({
  name,
  handleClick,
  icon,
  children,
  selectedLink,
}) => {
  const { logout } = useContext(AuthContext)
  const handleLinkClick = (link) => {
    if (link.onClick === 'logout') {
      logout() // Chame a função logout aqui
    } else {
      // Lógica para lidar com outros links
    }
  }
  const isSelected = selectedLink === name

  return (
    <>
      <ListItemButton sx={{ color: 'black' }} onClick={handleClick}>
        <ListItemIcon sx={{ color: 'black' }}>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {isSelected ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isSelected} timeout="auto" unmountOnExit>
        <List sx={{ color: 'white' }} component="div" disablePadding>
          {children &&
            children?.length > 0 &&
            children.map((child) => (
              <ListItemButton
                key={child?.name}
                onClick={() => handleLinkClick(child)}
                sx={{ pl: 4, borderLeft: '20px solid #e3e9ed' }}
              >
                <ListItemIcon sx={{ color: 'black' }} >{child.icon}</ListItemIcon>
                <Link href={child?.link}>
                  <ListItemText primary={child.name} sx={{ color: 'black' }} />
                </Link>
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </>
  )

  // )
}

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <KeyboardArrowUpIcon />, name: 'Move scroll' },
];
export const INTERFACE = ({ RENDERPAGE }) => {
  const matches = useMediaQuery('(min-width:900px)')
  const matchesMobileSmall = useMediaQuery('(min-width:550px)')
  const [perfil, setperfil] = useState(false)
  const [opens, setopens] = useState(null);
  const { user, logout } = useContext(AuthContext)
  const firstLatter = user.displayName.charAt(0);
  const words = user.displayName.split(' ');
  const firstWord = words[0];
  const [scrollHeight, setScrollHeight] = useState(0)
  const [selectedLink, setSelectedLink] = useState()
  const [anchorEl, setAnchorEl] = useState(null)
  const scrollRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((pathname) => pathname !== '');
  localStorage.setItem('breadcrumbs', JSON.stringify(pathnames));
  const storedBreadcrumbs = JSON.parse(localStorage.getItem('breadcrumbs'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (openDrawer) => () => {
    setOpenDrawer(openDrawer);
  };
  const [openDrawerRight, setOpenDrawerRight] = useState(false);
  const toggleDrawerRight = (openDrawerRight) => () => {
    setOpenDrawerRight(openDrawerRight);
  };
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const height = window.scrollY || 0;
        setScrollHeight(height);
      }, 100); // Adicione um pequeno atraso aqui, por exemplo, 100ms
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Limpe o evento de scroll quando o componente for desmontado
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
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
  const open = Boolean(opens);
  const handleClick = (event) => {
    setopens(event.currentTarget);
  };
  const Close = () => {
    setopens(null);
  };
  if (matches) {
    return (
      <>
        <Tag.Wrapper sx={{ gap: 0 }}>
          <Tag.Wrapper sx={{
            position: scrollHeight > 20 ? "fixed" : "relative",
            height: scrollHeight > 20 ? '5.5vh' : '11.5vh',
            borderBottom: '1px solid #e3e9ed',
            top: 0,
            left: 0,
            zIndex: scrollHeight && 9999,
            transition: "all 0.5s ease",
            transition: "height 0.3s ease",
          }}>
            <Tag.MenuItemsLinks sx={scrollHeight > 20 ? {
              transition: "all 0.5s ease",
              transition: "height 0.3s ease",
            } : {

            }}>
              <Tag.ItemsLinks sx={{
                maxWidth: '70%',
                width: 'auto'
              }}>
                <Tag.MenuBar >
                  <Fade in={scrollHeight}>
                    <Box
                      onClick={scrollToTop}
                      role="presentation"
                      sx={{ position: 'fixed', bottom: "2rem", right: "2rem" }}
                    >
                      <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                      </Fab>
                    </Box>
                  </Fade>
                  <Stack>
                    <img src={Logo} alt="" />
                  </Stack>
                  <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", height: '100%' }}>
                    {storedBreadcrumbs.map((pathname, index) => {
                      const routeTo = `/${storedBreadcrumbs.slice(0, index + 1).join('/')}`;
                      return (
                        <Link
                          sx={{ mr: 0.5, color: 'white' }}
                          key={routeTo}
                          href={routeTo}
                        >
                          <Box sx={{ textTransform: 'uppercase', mr: 0.5, display: 'flex', alignItems: "center", justifyContent: "center", height: '100%' }}>
                            <FolderIcon sx={{ mr: 0.5, color: 'white' }} />
                            {pathname}
                          </Box>
                        </Link>
                      );
                    })}
                  </Box>

                </Tag.MenuBar>
              </Tag.ItemsLinks>
              <Tag.ItemsLinks sx={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                mr: 3

              }}>
                <NotificationsIcon />
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2, color: 'white' }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar src={user?.photoURL} sx={{ width: 32, height: 32, border: '3px solid white' }}>{firstLatter}</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  opens={opens}
                  id="account-menu"
                  open={open}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {[
                    {
                      name: user?.displayName,
                      icon: <Avatar src={user?.photoURL} />
                    }, {
                      name: 'My account',
                      icon: <Avatar src={user?.photoURL} />
                    }
                  ].map((item, index) => {
                    return (
                      <>
                        <MenuItem key={item?.name} onClick={Close}>
                          {item?.icon} {item?.name}
                        </MenuItem>
                      </>
                    )
                  })}
                  <Divider />
                  <MenuItem onClick={Close}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Link href={`/edituser/${user?.uid}`}>
                        <PersonAdd fontSize="small" />
                      </Link>
                    </ListItemIcon>
                    Editar meu perfil
                  </MenuItem>
                  <MenuItem onClick={Close}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={logout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
                <Link>{firstWord}</Link>
              </Tag.ItemsLinks>
            </Tag.MenuItemsLinks>

            <Tag.MenuItemsLinks sx={{
              display: scrollHeight > 20 ? 'none' : 'flex',
              bgcolor: 'transparent',
              borderLeft: '15px solid #e3e9ed',
              height: scrollHeight > 20 ? "0vh " : '6vh',
              transition: "all 0.5s ease",
              transition: "height 0.3s ease",
            }}>
              <Tag.ItemsLinks>
                <Logo logoStyle={{
                  marginLeft: '-0.51rem',
                  paddingLeft: '10px',
                  filter: 'brightness(0.1) saturate(0.8) hue-rotate(10deg)',
                }} />
              </Tag.ItemsLinks>
              <Tag.ItemsLinks>
                <Tag.Search sx={{ width: 'auto' }}>
                  <Tag.SearchIconWrapper>
                    <CloseIcon />
                  </Tag.SearchIconWrapper>
                  <Tag.StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Tag.Search>

                <SearchIcon sx={{
                  borderRadius: '1px',
                  padding: '2px',
                  height: '2.3rem',
                  width: 'auto',
                  bgcolor: "#374957"
                }}></SearchIcon>

              </Tag.ItemsLinks>

              <Tag.ItemsLinks sx={{
                justifyContent: 'flex-end',
              }
              }>
                {[{
                  link: '/yourFavoriteRecipes',
                  icon: <FavoriteIcon />,
                  title: 'Receitas Favoritas'
                }, {
                  link: '/myRecipes',
                  icon: <DinnerDiningIcon />,
                  title: 'Minhas Receitas'
                },
                {
                  link: '/colletions',
                  icon: <FolderIcon />,
                  title: 'Folder'
                }, {
                  link: '/createRecipe',
                  icon: <Add />,
                  title: 'Criar uma receita'
                }].map((item, index) => {
                  return (
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                      <Tooltip title={item?.title}>
                        <IconButton
                          size="small"
                          sx={{ ml: 2, color: "#374957" }}
                        >
                          {item?.icon}
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )
                })}
              </Tag.ItemsLinks>
            </Tag.MenuItemsLinks>
          </Tag.Wrapper >
          <Tag.MenuItemsLinks sx={{
            width: '100%',
            minHeight: scrollHeight > 20 ? "94.5vh" : '88.5vh',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: "flex-start",
            bgcolor: 'transparent',
            padding: '0',
            transition: "all 0.5s ease",
            transition: "height 0.3s ease",
          }}>
            <Tag.MenuItemsLinks
              sx={{
                position: scrollHeight > 20 ? 'fixed' : 'relative',
                bottom: 0,
                flexDirection: 'column',
                width: '30%',
                height: scrollHeight > 20 ? "94.5vh" : '88.5vh',
                borderRight: '1px solid #e3e9ed',
                bgcolor: '#f8fafb',
                transition: "all 0.5s ease",
                transition: "height 0.3s ease",
              }}>
              <Tag.MinhaLista
                sx={{
                  width: !matchesMobileSmall ? '30%' : '100%',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <Tag.ListSub
                    sx={{
                      justifyContent: !matchesMobileSmall
                        ? 'space-between'
                        : 'flex-start',
                    }}
                    component="div"
                    id="nested-list-subheader"
                  >
                    <img src={Logo} alt="" />
                    {!matchesMobileSmall && (
                      <CloseIcon
                        onClick={(e) => setShowLinks(!showLinks)}
                      />
                    )}
                  </Tag.ListSub>
                }
              >
                {links.map((li) => {
                  return (
                    <Links_a
                      key={li.name}
                      {...li}
                      handleClick={(event) =>
                        handleSelectLink(event, li.name)
                      }
                      selectedLink={selectedLink}
                    />
                  )
                })}
              </Tag.MinhaLista>
            </Tag.MenuItemsLinks>
            <div
              ref={scrollRef}
              style={{
                marginTop: scrollHeight > 20 && '6.5vh',
                marginLeft: scrollHeight > 20 ? '30%' : '0',
                width: '70%',
                minHeight: '100%',
                height: "auto",
                bgcolor: '#f8fafb',
                transition: "all 0.5s ease",
                transition: "height 0.3s ease",
              }}>
              {RENDERPAGE}
            </div>
          </Tag.MenuItemsLinks>
          <Box sx={{
            position: 'fixed',
            bottom: '3.5rem',
            right: '1.5rem',
            height: 320,
            transform:
              'translateZ(0px)',
            flexGrow: 1,
          }}>
            <SpeedDial
              ariaLabel="SpeedDial openIcon example"
              icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  sx={{ bgcolor: '#374957', color: 'white' }}
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </Tag.Wrapper >
      </>
    )
  }
  return (
    <>
      <Tag.Wrapper sx={{ gap: 0 }}>
        <Tag.Wrapper sx={{
          position: scrollHeight > 20 ? "fixed" : "relative",
          height: scrollHeight > 20 ? '5.5vh' : '11.5vh',
          borderBottom: '1px solid #e3e9ed',
          top: 0,
          left: 0,
          zIndex: scrollHeight && 9999,
          transition: "all 0.5s ease",
          transition: "height 0.3s ease",
        }}>
          <Tag.MenuItemsLinks sx={scrollHeight > 20 ? {
            transition: "all 0.5s ease",
            transition: "height 0.3s ease",
          } : {

          }}>
            <Tag.ItemsLinks sx={{
              maxWidth: '70%',
              width: 'auto'
            }}>
              <Tag.MenuBar >
                <Fade in={scrollHeight}>
                  <Box
                    onClick={scrollToTop}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: "2rem", right: "2rem" }}
                  >
                    <Fab size="small" aria-label="scroll back to top">
                      <KeyboardArrowUpIcon />
                    </Fab>
                  </Box>
                </Fade>
                <Stack>
                  <img src={Logo} alt="" />
                </Stack>
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
                      <Tag.ItemsLinks sx={{
                        padding: 1.6
                      }}>
                        <Logo logoStyle={{
                          marginLeft: '-0.51rem',
                          paddingLeft: '10px',
                          filter: 'brightness(0.1) saturate(0.8) hue-rotate(10deg)',
                        }} />
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
                              handleClick={(event) =>
                                handleSelectLink(event, li.name)
                              }
                              selectedLink={selectedLink}
                            />
                          )
                        })}
                        <Divider />
                      </Tag.MinhaLista>
                    </SwipeableDrawer>
                  </div>
                </Stack>
              </Tag.MenuBar>
            </Tag.ItemsLinks>
            <Tag.ItemsLinks sx={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              mr: 3

            }}>
              <NotificationsIcon />
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2, color: 'white' }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar src={user?.photoURL} sx={{ width: 32, height: 32, border: '3px solid white' }}>{firstLatter}</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                opens={opens}
                id="account-menu"
                open={open}
                onClose={Close}
                onClick={Close}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {[
                  {
                    name: user?.displayName,
                    icon: <Avatar src={user?.photoURL} />
                  }, {
                    name: 'My account',
                    icon: <Avatar src={user?.photoURL} />
                  }
                ].map((item, index) => {
                  return (
                    <>
                      <MenuItem key={item?.name} onClick={Close}>
                        {item?.icon} {item?.name}
                      </MenuItem>
                    </>
                  )
                })}
                <Divider />
                <MenuItem onClick={Close}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Link href={`edituser/${user?.uid}`}>
                      <Edit fontSize="small" />
                    </Link>
                  </ListItemIcon>
                  edit my profile
                </MenuItem>
                <MenuItem onClick={Close}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <Link>{firstWord}</Link>
            </Tag.ItemsLinks>
          </Tag.MenuItemsLinks>

          <Tag.MenuItemsLinks sx={{
            display: scrollHeight > 20 ? 'none' : 'flex',
            bgcolor: 'transparent',
            borderLeft: '15px solid #e3e9ed',
            height: scrollHeight > 20 ? "0vh " : '6vh',
            transition: "all 0.5s ease",
            transition: "height 0.3s ease",
          }}>
            <Stack>
              <Logo logoStyle={{
                marginLeft: '-0.51rem',
                paddingLeft: '10px',
                filter: 'brightness(0.1) saturate(0.8) hue-rotate(10deg)',
              }} />
            </Stack>
            <Tag.ItemsLinks>
              <Tag.Search sx={{ width: 'auto' }}>
                <Tag.SearchIconWrapper>
                  <CloseIcon />
                </Tag.SearchIconWrapper>
                <Tag.StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Tag.Search>

              <SearchIcon sx={{
                borderRadius: '1px',
                padding: '2px',
                height: '2.3rem',
                width: 'auto',
                bgcolor: "#374957"
              }}></SearchIcon>

            </Tag.ItemsLinks>
            <Tag.ItemsLinks sx={{
              justifyContent: 'flex-end',
              color: "#374957",
              mr: 2
            }
            }>
              <TuneIcon onClick={toggleDrawerRight(true)} />
              <SwipeableDrawer
                sx={{
                  width: matchesMobileSmall ? '30%' : '100%',
                }}
                anchor="right"
                open={openDrawerRight}
                onClose={toggleDrawerRight(false)}
                onOpen={toggleDrawerRight(true)}
              >
                <Tag.ItemsLinks sx={{
                  padding: 1.6
                }}>
                  <Logo logoStyle={{
                    marginLeft: '-0.51rem',
                    paddingLeft: '10px',
                    filter: 'brightness(0.1) saturate(0.8) hue-rotate(10deg)',
                  }} />
                </Tag.ItemsLinks>
                <Divider />
                <Stack
                  sx={{ width: 350 }}
                  role="presentation"
                  onKeyDown={toggleDrawerRight(false)}
                  component="nav"
                  aria-labelledby="nested-list-subheader"

                >
                  <Tag.ItemMenu>
                    <SortIcon />
                    Classificar por
                  </Tag.ItemMenu>

                  <Tag.ItemMenu>
                    <CategoryIcon />
                    Tipo de recurso
                  </Tag.ItemMenu>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: "15px",
                    flexWrap: 'wrap',
                    width: '100%',
                    padding: '1rem'
                  }}>
                    <Tag.Item>
                      Recipe card
                    </Tag.Item>
                    <Tag.Item>
                      Image card
                    </Tag.Item>
                    <Tag.Item>
                      card text
                    </Tag.Item>
                    <Tag.Item>
                      Only image
                    </Tag.Item>
                  </Box>

                  <Tag.ItemMenu>
                    <ColorLensIcon />
                    Aplicar temas
                  </Tag.ItemMenu>

                </Stack>
              </SwipeableDrawer>
            </Tag.ItemsLinks>
          </Tag.MenuItemsLinks>
        </Tag.Wrapper >
        <Tag.MenuItemsLinks sx={{
          width: '100%',
          minHeight: scrollHeight > 20 ? "94.5vh" : '88.5vh',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: "flex-start",
          bgcolor: 'transparent',
          padding: '0',
          transition: "all 0.5s ease",
          transition: "height 0.3s ease",
        }}>

          <div
            ref={scrollRef}
            style={{
              marginTop: scrollHeight > 20 && '6.5vh',
              width: '100%',
              minHeight: '100%',
              height: "auto",
              bgcolor: '#f8fafb',
              transition: "all 0.5s ease",
              transition: "height 0.3s ease",
            }}>
            {RENDERPAGE}
          </div>
        </Tag.MenuItemsLinks>
        <Box sx={{
          position: 'fixed',
          bottom: '3.5rem',
          right: '1.5rem',
          height: 320,
          transform:
            'translateZ(0px)',
          flexGrow: 1,
        }}>
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                sx={{ bgcolor: '#374957', color: 'white' }}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </Tag.Wrapper >
    </>
  );
};
