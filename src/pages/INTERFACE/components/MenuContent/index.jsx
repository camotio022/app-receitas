import {
  Avatar,
  Box,
  Divider,
  Fab,
  Fade,
  IconButton,
  Link,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from '@mui/material'

import {
  Search as SearchIcon,
  Folder as FolderIcon,
  Add,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Close as CloseIcon,
  DinnerDining as DinnerDiningIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material'

import * as Tag from '../../index.js'
import { Logo } from '../../../../componentes/LOGO/index.jsx'
import { UserMenu } from '../UserMenu/index.jsx'
import { Links_a } from '../Links_a/index.jsx'
import { ScrollToTopButton } from '../ScrollToTopButton/index.jsx'

export const MenuContent = ({
  scrollHeight,
  children,
  matchesMobileSmall,
  links = [],
  selectedLink,
  scrollRef,
  RENDERPAGE,
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Tag.Wrapper sx={{ gap: 0 }}>
        <Tag.Wrapper
          sx={{
            position: scrollHeight > 20 ? 'fixed' : 'relative',
            height: scrollHeight > 20 ? '5.5vh' : '11.5vh',
            borderBottom: '1px solid #e3e9ed',
            top: 0,
            left: 0,
            zIndex: scrollHeight && 9999,
            transition: 'all 0.5s ease',
            transition: 'height 0.3s ease',
          }}
        >
          <Tag.MenuItemsLinks
            sx={
              scrollHeight > 20
                ? {
                    transition: 'all 0.5s ease',
                    transition: 'height 0.3s ease',
                  }
                : {}
            }
          >
            <Tag.ItemsLinks
              sx={{
                maxWidth: '70%',
                width: 'auto',
              }}
            >
              <Tag.MenuBar>
                <Fade in={scrollHeight != 0}>
                  <Box
                    onClick={scrollToTop}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
                  >
                    <Fab size="small" aria-label="scroll back to top">
                      <KeyboardArrowUpIcon />
                    </Fab>
                  </Box>
                </Fade>
                <Logo />

                {children}
              </Tag.MenuBar>
            </Tag.ItemsLinks>
            <Tag.ItemsLinks
              sx={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                mr: 3,
              }}
            >
              {/* <UserMenu /> */}
            </Tag.ItemsLinks>
          </Tag.MenuItemsLinks>

          <Tag.MenuItemsLinks
            sx={{
              display: scrollHeight > 20 ? 'none' : 'flex',
              bgcolor: 'transparent',
              borderLeft: '15px solid #e3e9ed',
              height: scrollHeight > 20 ? '0vh ' : '6vh',
              transition: 'all 0.5s ease',
              transition: 'height 0.3s ease',
            }}
          >
            <Tag.ItemsLinks>
              <Logo
                logoStyle={{
                  marginLeft: '-0.51rem',
                  paddingLeft: '10px',
                  filter: 'brightness(0.1) saturate(0.8) hue-rotate(10deg)',
                }}
              />
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

              <SearchIcon
                sx={{
                  borderRadius: '1px',
                  padding: '2px',
                  height: '2.3rem',
                  width: 'auto',
                  bgcolor: '#374957',
                }}
              ></SearchIcon>
            </Tag.ItemsLinks>

            <Tag.ItemsLinks
              sx={{
                justifyContent: 'flex-end',
              }}
            >
              {[
                {
                  link: '/yourFavoriteRecipes',
                  icon: <FavoriteIcon />,
                  title: 'Receitas Favoritas',
                },
                {
                  link: '/myRecipes',
                  icon: <DinnerDiningIcon />,
                  title: 'Minhas Receitas',
                },
                {
                  link: '/colletions',
                  icon: <FolderIcon />,
                  title: 'Folder',
                },
                {
                  link: '/createRecipe',
                  icon: <Add />,
                  title: 'Criar uma receita',
                },
              ].map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Tooltip title={item?.title}>
                      <IconButton size="small" sx={{ ml: 2, color: '#374957' }}>
                        {item?.icon}
                      </IconButton>
                    </Tooltip>
                  </Box>
                )
              })}
            </Tag.ItemsLinks>
          </Tag.MenuItemsLinks>
        </Tag.Wrapper>
        <Tag.MenuItemsLinks
          sx={{
            width: '100%',
            minHeight: scrollHeight > 20 ? '94.5vh' : '88.5vh',
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            bgcolor: 'transparent',
            padding: '0',
            transition: 'all 0.5s ease',
            transition: 'height 0.3s ease',
          }}
        >
          <Tag.MenuItemsLinks
            sx={{
              position: scrollHeight > 20 ? 'fixed' : 'relative',
              bottom: 0,
              flexDirection: 'column',
              width: '30%',
              height: scrollHeight > 20 ? '94.5vh' : '88.5vh',
              borderRight: '1px solid #e3e9ed',
              bgcolor: '#f8fafb',
              transition: 'all 0.5s ease',
              transition: 'height 0.3s ease',
            }}
          >
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
                  <Logo />

                  {!matchesMobileSmall && (
                    <CloseIcon onClick={(e) => setShowLinks(!showLinks)} />
                  )}
                </Tag.ListSub>
              }
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
            </Tag.MinhaLista>
          </Tag.MenuItemsLinks>
          <div
            ref={scrollRef}
            style={{
              marginTop: scrollHeight > 20 && '6.5vh',
              marginLeft: scrollHeight > 20 ? '30%' : '0',
              width: '70%',
              minHeight: '100%',
              height: 'auto',
              bgcolor: '#f8fafb',
              transition: 'all 0.5s ease',
              transition: 'height 0.3s ease',
            }}
          >
            {RENDERPAGE}
          </div>
        </Tag.MenuItemsLinks>
        {/* <ScrollToTopButton /> */}
      </Tag.Wrapper>
    </>
  )
}
