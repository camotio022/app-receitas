import { useContext, useState } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  useMediaQuery,
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
  const matchesMobileSmall = useMediaQuery('(min-width:550px)')
  const { user, logout } = useContext(AuthContext)
  const firstLatter = user?.displayName?.charAt(0)
  const firstWord = user?.displayName?.split(' ')[0]
  const [noReadFromNotifications, setNoReadFromNotifications] = useState(0);
  const [notifications, setNotifications] = useState([])
  const updateNoReadFromNotifications = (newNoRead) => {
    setNoReadFromNotifications(newNoRead);
  };
  const toggleDrawer = () => (event) => {
    setLeft(!left);
  };
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Notifications
        left={left}
        setLeft={setLeft}
        toggleDrawer={toggleDrawer}
        noRead={noReadFromNotifications}
        updateNoRead={updateNoReadFromNotifications}
        notifications={notifications
        }
        setNotifications={setNotifications}

      />
      <Badge badgeContent={noReadFromNotifications} color="error">
        <NotificationsIcon
          onClick={toggleDrawer('left', true)}
          sx={{
            cursor: 'pointer',
          }}
        />
      </Badge>




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
                border: noReadFromNotifications > 0 ?
                  '3px solid green' : '3px solid white',
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
          <MenuItem onClick={Close}>
            <Avatar src={user?.photoURL} /> {user.displayName}
          </MenuItem>
          <Divider />
          <Link href={`/edituser/${user.uid}`}>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Edit user
            </MenuItem>
          </Link>
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Stack>
      </Menu>
      {matchesMobileSmall && <Link sx={{ color: 'white' }}>{firstWord}</Link>}
    </Stack >
  )
}
