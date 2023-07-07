import { useContext } from 'react'
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

export const UserMenu = ({ handleClick, handleClose, opens, Close }) => {
  const { user, logout } = useContext(AuthContext)
  const firstLatter = user.displayName.charAt(0)
  const words = user.displayName.split(' ')
  const firstWord = words[0]
  return (
    <>
      <NotificationsIcon />

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
        <Stack>
          {[
            {
              name: user?.displayName,
              icon: <Avatar src={user?.photoURL} />,
            },
            {
              name: 'My account',
              icon: <Avatar src={user?.photoURL} />,
            },
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
      <Link>{firstWord}</Link>
    </>
  )
}
