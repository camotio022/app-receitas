import { Box, Fab, Fade, Grid, IconButton, Stack, Tooltip } from '@mui/material'

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
import * as S from './styles.js'
import { Logo } from '../../../../componentes/LOGO/index.jsx'
import { UserMenu } from '../UserMenu/index.jsx'
import { Links_a } from '../Links_a/index.jsx'
import { ScrollToTopButton } from '../ScrollToTopButton/index.jsx'
import { TopLinks } from '../TopLinks/index.jsx'
import { FloatingButton } from '../FloatingButton/index.jsx'

export const MenuContent = ({
  scrollHeight,
  children,
  matchesMobileSmall,
  links = [],
  selectedLink,
  RENDERPAGE,
  anchorEl,
  handleClick,
  handleClose,
  open,
  Close,
  handleSelectLink,
  handleOpenUserMenu,
}) => {
  return (
    <>
      <S.Container scrollHeight={scrollHeight}>
        <S.Header scrollHeight={scrollHeight}>
          <Logo />

          <Stack justifyContent={'flex-end'} alignItems={'center'} mr={3}>
            <UserMenu
              handleClick={handleOpenUserMenu}
              handleClose={handleClose}
              anchorEl={anchorEl}
              open={open}
              Close={Close}
            />
          </Stack>
          <Stack direction="row" alignItems="center">
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
          </Stack>
          <TopLinks />
        </S.Header>
        <Stack
          direction="row"
          sx={{ width: '100vw', height: '90vh', background: 'green' }}
        >
          <S.SideMenu>
            <S.MinhaLista
              matchesMobileSmall={matchesMobileSmall}
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
            </S.MinhaLista>
          </S.SideMenu>

          <S.Content>{RENDERPAGE || children}</S.Content>
        </Stack>

        <FloatingButton />

        {/* <ScrollToTopButton scrollHeight={scrollHeight} /> */}
      </S.Container>
    </>
  )
}
