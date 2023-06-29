import { Links } from "../../componentes/LINKS";
import "./index.css";

import churros from "../../images/imgsPages/churos.jpg";
import avatar from "../../images/mocks/avatar.jpg";
import { Avatar, Box, Container, Divider, IconButton, Link, ListItemIcon, Menu, MenuItem, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import * as Tag from './styles'
import { green, orange } from "@mui/material/colors";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Logo } from "../../componentes/LOGO";
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowUp as KeyboardArrowDownIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  FileCopy as FileCopyIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Edit as EditIcon,
  Settings,
  PersonAdd,
  Logout
} from '@mui/icons-material';
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export const HomePage = () => {
  const matches = useMediaQuery('(min-width:900px)')
  const matchesMobileSmall = useMediaQuery('(min-width:550px)')
  const { user } = useContext(AuthContext)
  const firstLatter = user.displayName.charAt(0);
  const words = user.displayName.split(' ');
  const firstWord = words[0];



  const [perfil, setperfil] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (matches) {
    return (
      <>
        <Tag.Wrapper>
          <Tag.Wrapper sx={{
            height: '25%',
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
          }}>
            <Tag.MenuItemsLinks>
              <Tag.ItemsLinks >
                <Link>Home</Link>
                <Link>Pages</Link>
                <Link>Receitas</Link>
                <Link>Blogs</Link>
                <Link>Comunidade</Link>
              </Tag.ItemsLinks>
              <Tag.ItemsLinks sx={{
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
                <NotificationsIcon />
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar href={user?.photoURL} sx={{ width: 32, height: 32 }}>{firstLatter}</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
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
                      name: 'Profile',
                      icon: <Avatar />
                    }, {
                      name: 'My account',
                      icon: <Avatar />
                    }
                  ].map((item, index) => {
                    return (
                      <>
                        <MenuItem key={item?.name} onClick={handleClose}>
                          {item?.icon} {item?.name}
                        </MenuItem>
                      </>
                    )
                  })}
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
                <Link>{firstWord}</Link>
              </Tag.ItemsLinks>
            </Tag.MenuItemsLinks>
            <Tag.MenuItemsLinks>
              <Tag.ItemsLinks>
                <Logo />
              </Tag.ItemsLinks>
              <Tag.ItemsLinks>
                <Tag.Search sx={{ width: 'auto' }}>
                  <Tag.SearchIconWrapper>
                    <SearchIcon />
                  </Tag.SearchIconWrapper>
                  <Tag.StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Tag.Search>
              </Tag.ItemsLinks>

              <Tag.ItemsLinks sx={{
                gap: 3,
                justifyContent: 'flex-end',
                mr: 5
              }
              }>
                <ItemsLinks sx={{padding: '5px',border: '1px solid'}}>
                  Minhas receitas
                </ItemsLinks>
                <Stack sx={{padding: '5px',border: '1px solid'}}>
                  Receitas favoritas
                </Stack>
              </Tag.ItemsLinks>
            </Tag.MenuItemsLinks>
            <Stack>

            </Stack>
          </Tag.Wrapper>


          <Container>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Container>


          <Box sx={{ position: 'fixed', bottom: '1rem', right: '3rem', height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial openIcon example"
              icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </Tag.Wrapper>
      </>
    )
  }



  return (
    <>
      <Tag.Wrapper id="wrapper">
        opacity
      </Tag.Wrapper>
    </>
  );
};
