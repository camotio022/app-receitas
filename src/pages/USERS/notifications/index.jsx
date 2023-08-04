
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CheckCircle, } from "@mui/icons-material";
import { api_notifications } from "../../../api/users/notifications";
import { AuthContext } from "../../../contexts/AuthContext";
import { Stack } from "@mui/material";
export const Notifications = ({
    left, toggleDrawer,
}) => {
    const [notifications, setNotifications] = useState([]);
    const { user } = React.useContext(AuthContext);
    const getNotifications = async () => {
        if (!user.uid) return;
        try {
            const notificationsData = await api_notifications.notification.get(user.uid);
            setNotifications(notificationsData);
        } catch (error) {
            console.error('Erro ao obter notificações:', error);
        }
    };
    React.useEffect(() => {
        getNotifications();
    }, [user]);
    const seeTheNotification = async (userId, notificationId, isRead, ) => {
        if (!userId || !notificationId || isRead) return;
        try {
            await api_notifications.notification.hasAlreadyBeenSeen(userId, notificationId);
        } catch (error) {
            console.error('Erro ao marcar a notificação como lida:', error);
        }
    };
    return (
        <>

            <Drawer
                sx={{
                    width: 500,
                }}
                anchor="left"
                open={left}
                onClose={toggleDrawer('left', false)}
            >
                <Box

                    role="presentation"
                    onClick={toggleDrawer('left', false)}
                    onKeyDown={toggleDrawer('left', false)}
                >
                    <Drawer
                        anchor="left"
                        open={true}
                        onClose={toggleDrawer('left', false)}
                    >
                        <Box
                            sx={{ width: "100%" }}
                            role="presentation"
                            onClick={toggleDrawer('left', false)}
                            onKeyDown={toggleDrawer('left', false)}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <NotificationsIcon />
                                    </ListItemIcon>
                                    <ListItemText 
                                    primary={notifications.length>0?'NOTIFICAÇÕES':"SEM NOTIFICAÇÕES"} 
                                    secondary={notifications.length>0 &&"Marcar todas como lidas!"}/>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <List>
                                {notifications.map((notification) => (
                                    <ListItem
                                        onClick={()=>seeTheNotification
                                            (user.uid, notification.id, notification?.data?.data?.isRead)
                                        }
                                        key={notification.id}>
                                        <ListItemButton sx={{
                                            backgroundColor:
                                                !notification?.data?.data?.isRead ?
                                                    'rgba(0, 8, 0, 0.1)' : 'transparent',
                                            transition: 'background-color 0.3s ease',
                                            mb: 0.2
                                        }}>
                                            <ListItemIcon>
                                                {notification?.data?.data?.isRead ?
                                                    <CheckCircle /> :
                                                    <NotificationsIcon
                                                        sx={!notification?.data?.data?.isRead && { color: 'green' }} />}
                                            </ListItemIcon>
                                            <ListItemText 
                                                primary={
                                                    !notification?.data?.data?.isRead?
                                                    notification?.data?.data?.title:`Aberta dia 
                                                    ${notification.data.data.alreadyOpenedDate}
                                                    às ${notification.data.data.alreadyOpenedHours}
                                                `}
                                                secondary={`
                                                ${notification.data.data.action} - criado em: 
                                                ${notification.data.date}`}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box >
            </Drawer >

        </>
    )
}

