
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
import { useNavigate } from "react-router-dom";
export const Notifications = ({
    left, toggleDrawer,
}) => {
    const [notifications, setNotifications] = useState([]);
    const navegate = useNavigate()
    const [noRead, setNoRead] = useState(0);
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
    const seeTheNotification = async (
        userId,
        notificationId,
        docType,
        docRef,
    ) => {
        if (
            !userId ||
            !notificationId
        ) return;
        try {
            await api_notifications.notification.hasAlreadyBeenSeen(userId, notificationId);
            if (docType === 'receita') {
                navegate(`/new_recipe/${docRef} `)
            } else {
                navegate(`/new_user/${docRef} `)
            }
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
                onClick={toggleDrawer('left', false)}
                onKeyDown={toggleDrawer('left', false)}
            >
                <Box
                    role="presentation"

                >
                    <Drawer
                        anchor="left"
                        open={true}

                    >
                        <Box
                            sx={{ width: "100%" }}
                            role="presentation"
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <NotificationsIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={notifications.length > 0 ? 'NOTIFICAÇÕES' : "SEM NOTIFICAÇÕES"}
                                        secondary={notifications.length > 0 && `${noRead} notificações não lidas!`} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <List>
                                {notifications.map((notification) => (
                                    <ListItem
                                        onClick={() => seeTheNotification
                                            (
                                                user.uid,
                                                notification.id,
                                                notification?.data?.type,
                                                notification?.data?.docRef
                                            )
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
                                                    !notification?.data?.data?.isRead ?
                                                        notification?.data?.data?.title : `Aberta dia 
                                                    ${notification.data.data.alreadyOpenedDate}
                                                    às ${notification.data.data.alreadyOpenedHours}
            `}
                                                secondary={`
                                                ${notification.data.data.action} às 
                                                ${notification.data.time.hours} 
                                                de ${notification.data.time.date} `}
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

