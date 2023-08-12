import { useState } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { CheckCircle } from '@mui/icons-material'
import { api_notifications } from '../../../api/users/notifications'
import { AuthContext } from '../../../contexts/AuthContext'
import { Alert, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../../../firebase.config'
export const Notifications = ({ left, toggleDrawer, noRead, updateNoRead, notifications, setNotifications }) => {

  const navegate = useNavigate()
  const [checkAll, setCheckAll] = useState(false)
  const { user } = useContext(AuthContext)
  const getNotifications = async () => {
    if (!user.uid) return
    try {
      const notificationsData = await api_notifications.notification.get(
        user.uid
      )
      setNotifications(notificationsData)
      newsNotifications(notificationsData)
    } catch (error) {
      console.error('Erro ao obter notificações:', error)
    }
  }
  const sortedNotifications = [...notifications].sort((a, b) => {
    if (!a.data?.isRead && b.data?.isRead) {
      return -1
    }
    if (a.data?.isRead && !b.data?.isRead) {
      return 1
    }
    return 0
  })
  const newsNotifications = (notificationsData) => {
    const unreadNotifications = notificationsData.filter(
      (notification) => !notification?.data?.isRead
    )
    updateNoRead(unreadNotifications.length)
  }
  useEffect(() => {
    const fetchData = async () => {
      await getNotifications()
    }
    fetchData()
    updateNoRead(noRead)
  }, [user, noRead, updateNoRead])
  const seeTheNotification = async (
    userId,
    notificationId,
    docType,
    docRef
  ) => {
    if (!userId || !notificationId) return
    console.log(userId,
      notificationId,
      docType,
      docRef)
    try {
      await api_notifications.notification.hasAlreadyBeenSeen(
        userId,
        notificationId
      )
      if (docType === 'receita') {
        navegate(`/new_recipe/${docRef} `)
      } else {
        navegate(`/new_user/${docRef} `)
      }
    } catch (error) {
      console.error('Erro ao marcar a notificação como lida:', error)
    }
  }
  const checkAllnotif = (event) => {
    setCheckAll(!checkAll)
    event.stopPropagation()
  }
  const openAllNotifications = async (event) => {
    event.stopPropagation()
    try {
      await api_notifications.notification.markAllAsRead(user.uid)
    } catch (error) {
      console.log('Erro ao marcar a notificação como lidas:', error)
    }
  }

  useEffect(() => {
    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', user.uid)
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const temp = []
      querySnapshot.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() })
      })
      setNotifications(temp)
    })
    return () => unsubscribe()
  }, [])
  return (
    <>
      <Stack
        anchor="right"
        open={left}
        onClick={toggleDrawer('right', false)}
        onKeyDown={toggleDrawer('right', false)}
      >
        <Box role="presentation">
          <Drawer anchor="right" open={left}>
            <Box role="presentation">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      notifications.length > 0
                        ? 'NOTIFICAÇÕES'
                        : 'SEM NOTIFICAÇÕES'
                    }
                    secondary={
                      notifications.length > 0 &&
                      `${notifications.length} notificações`
                    }
                  />
                  {noRead > 0 && (
                    <ListItemIcon>
                      {!checkAll && (
                        <Alert
                          onClick={checkAllnotif}
                          disablePadding
                          variant="filled"
                          severity="info"
                        >
                          {`${noRead}  novas!`}
                        </Alert>
                      )}
                      {checkAll && (
                        <Alert
                          onClick={openAllNotifications}
                          variant="filled"
                          severity="success"
                        >
                          Ler todas.
                        </Alert>
                      )}
                    </ListItemIcon>
                  )}
                </ListItemButton>
              </ListItem>
              <Divider />
              <List>
                {sortedNotifications.map((notification) => (
                  <ListItem
                    onClick={() =>
                      seeTheNotification(
                        user.uid,
                        notification.id,
                        notification.type,
                        notification.docRef
                      )
                    }
                    key={notification.id}
                  >
                    <ListItemButton
                      sx={{
                        backgroundColor: !notification?.data?.isRead
                          ? 'rgba(0, 8, 0, 0.1)'
                          : 'transparent',
                        transition: 'background-color 0.3s ease',
                        mb: 0.2,
                      }}
                    >
                      <ListItemIcon>
                        {notification?.data?.isRead ? (
                          <CheckCircle />
                        ) : (
                          <NotificationsIcon
                            sx={
                              !notification?.data?.isRead && {
                                color: 'green',
                              }
                            }
                          />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          notification?.data?.title
                        }
                        secondary={`
                        ${notification?.data?.action} às
                        ${notification?.time?.hours}
                        de ${notification?.time?.date} `}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Stack>
    </>
  )
}
