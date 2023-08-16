import { Stack } from '@mui/material';


import {
  Search as SearchIcon,
  Close as CloseIcon,
  Menu,
} from '@mui/icons-material';
import * as Tag from '../../index.js';
import * as S from './styles.js';
import { Logo } from '../../../../componentes/LOGO/index.jsx';
import { UserMenu } from '../UserMenu/index.jsx';
import { Links_a } from '../Links_a/index.jsx';
import { TopLinks } from '../TopLinks/index.jsx';
import { FloatingButton } from '../FloatingButton/index.jsx';
import { useState } from 'react';
import { MySearch } from '../../search/index.jsx';
export const MenuContent = ({
  scrollHeight,
  children,
  matchesMobileSmall,
  links = [],
  selectedLink,
  RENDERPAGE,
  anchorEl,
  handleClose,
  open,
  Close,
  handleSelectLink,
  handleOpenUserMenu,
  showLinks,
  setShowLinks,
}) => {
  const [search, setSearch] = useState('')
  return (
    <>
      <S.Container scrollHeight={scrollHeight}>
        <S.Header scrollHeight={scrollHeight}>
          {!matchesMobileSmall ? <Menu onClick={() => setShowLinks(!showLinks)} /> : <Logo />}
          <Stack direction="row" alignItems="center" ml={3}>
            <Tag.Search sx={{ width: 'auto' }}>
              <Tag.SearchIconWrapper>
                <CloseIcon />
              </Tag.SearchIconWrapper>
              <Tag.StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Tag.Search>
          </Stack>
          <Stack justifyContent={'flex-end'} alignItems={'center'}>
            <UserMenu
              handleClick={handleOpenUserMenu}
              handleClose={handleClose}
              anchorEl={anchorEl}
              open={open}
              Close={Close}
            />
          </Stack>
        </S.Header>

        <S.SideMenu sx={!matchesMobileSmall && {
          display: showLinks ? "block" : "none",
          position: 'absolute',
          bgcolor: 'white',
          zIndex: 1,
          width: '100%'
        }}
        >
          <S.MinhaLista
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
          </S.MinhaLista>
        </S.SideMenu>

        {search ?
          <S.Content><MySearch searchInput={search} /></S.Content>
          : <S.Content>

            {RENDERPAGE || children}
          </S.Content>}
        <FloatingButton />
      </S.Container >
    </>
  )
}
