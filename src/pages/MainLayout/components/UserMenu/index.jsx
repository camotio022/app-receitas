import { useContext, useState } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from '@mui/material'

import {
  Notifications as NotificationsIcon,
  Settings,
  PersonAdd,
  Logout,
} from '@mui/icons-material'
import { links } from './links'
import { Notifications } from '../../../USERS/notifications/index.jsx'
export const UserMenu = ({
  handleClick,
  handleClose,
  open,
  Close,
  anchorEl,
}) => {
  const [left, setLeft] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const firstLatter = user?.displayName?.charAt(0)
  const firstWord = user?.displayName?.split(' ')[0]
  const toggleDrawer = () => (event) => {
    setLeft(!left);
  };
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Notifications
        left={left}
        setLeft={setLeft}
        toggleDrawer={toggleDrawer}
      />
      <NotificationsIcon onClick={toggleDrawer('left', true)} sx={{ zIndex: 1 }} />
      <Stack position={'absolute'}
        sx={{
          ml: '-6rem',
          mb: '-2rem',
          fontSize: '13px'
        }}></Stack>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, color: 'white' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar
              src={user?.photoURL}
              sx={{
                width: 32,
                height: 32,
                border: '3px solid white',
              }}
            >
              {firstLatter}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id="account-menu"
        open={open}
        onClose={Close}
        onClick={Close}
        anchorEl={anchorEl}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Stack>
          {links(user)?.map((item) => {
            return (
              <>
                <MenuItem key={item} onClick={Close}>
                  <Avatar src={user?.photoURL} /> {item}
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
          <Link href={`/edituser/${user.uid}`}>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Edit user
            </MenuItem>
          </Link>
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
        </Stack>
      </Menu>
      <Link sx={{ color: 'white' }}>{firstWord}</Link>
    </Stack >
  )
}
