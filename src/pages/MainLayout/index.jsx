import * as Tag from './index.js'
import {
  Box,
  Divider,
  Link,
  Stack,
  SwipeableDrawer,
  useMediaQuery,
} from '@mui/material'
import { Folder, Menu as MenuIcon } from '@mui/icons-material'
import { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Logo } from '../../componentes/LOGO/index.jsx'
import { MenuContent } from './components/MenuContent/index.jsx'
import { Links_a } from './components/Links_a/index.jsx'
import { links } from './consts/links.jsx'

export const MainLayout = ({ children }) => {
  const matches = useMediaQuery('(min-width:900px)')
  const matchesMobileSmall = useMediaQuery('(min-width:550px)')
  const [opens, setopens] = useState(null)
  const [selectedLink, setSelectedLink] = useState()
  const [anchorEl, setAnchorEl] = useState(null)
  const [showLinks, setShowLinks] = useState(false)
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
console.log(showLinks)


  const handleOpenUserMenu = (e) => {
    setAnchorEl(e.target)
    setopens(true)
  }
  const handleSelectLink = (event, newLink) => {
    if (selectedLink === newLink) {
      setSelectedLink(null)

      return
    }
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
      showLinks={showLinks}
      setShowLinks={setShowLinks}
      open={open}
      matchesMobileSmall={matchesMobileSmall}
      links={links}
      selectedLink={selectedLink}
      anchorEl={anchorEl}
      RENDERPAGE={children}
      handleSelectLink={handleSelectLink}
      handleOpenUserMenu={handleOpenUserMenu}
    >
      {matches ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
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
                  <Folder sx={{ mr: 0.5, color: 'white' }} />
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
                      setShowLinks={setShowLinks}
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
