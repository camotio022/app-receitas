import { CameraAlt, Person, PersonAdd, PersonRemove, ShowChart } from "@mui/icons-material"
import { Avatar, Box, Button, CardMedia, Stack } from "@mui/material"
import * as Tag from '../../index.js'
import { api_users } from "../../../../../../api/users/users.js"
import { useEffect, useState } from "react"
import { orange } from "@mui/material/colors"

export const CardMediaUser = ({
    handleClickOpen,
    userValues,
    user,
    id
}) => {
    const userToken = "AAAAv0yytIg:APA91bHa7M_Jx_xNU_Yiauvz27XsuiHDvBPWBOOxuKSCXbq4M3P0pihVVTDRIg9zcotq7gwDNQoLO6caUWZiJKT077Ofenoy-VOofGH21mBW8CY1DcT2dMVksbp7Yl2qvCoK_DjDpBJV";
    const [isFollowing, setIsFollowing] = useState();
    const unfallow = async (seguidor, seguido) => {
        if (!seguido && !seguidor) return
        try {
            await api_users.fallow.unfollow(seguidor, seguido)
            await api_users.sendNotificationUser.update(userToken)
            setIsFollowing(false);
        } catch (error) {
            alert(error.message)
        }
    }
    const handleClickfallowed = async (seguidor, seguido) => {
        if (!seguido && !seguido) return
        try {
            await api_users.fallow.add(seguidor, seguido)
            await api_users.sendNotificationUser.update(userToken)
            setIsFollowing(true);
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        const userIdFollower = user.uid;
        const userIdFollowed = userValues.id;
        if (!userIdFollower || !userIdFollowed) return;
        const hasFollowers = async () => {
            try {
                const fallowers = await api_users.fallow.followers(userIdFollowed, userIdFollower);
                setIsFollowing(fallowers);
            } catch (error) {
                console.error(error.message);
            }
        };
        hasFollowers();
    }, [isFollowing]);
    return (
        <>
            <CardMedia
                sx={{
                    maxHeight: 400,
                    height: 400,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    width: '100%',
                    bgcolor: 'gray',
                    backgroundImage: `url(${userValues?.coverImage})`,
                    backgroundSize: '100%',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        opacity: 0.5,
                    }
                }}
                component="div"
                image={userValues?.coverImage}
            >
                {
                    user?.uid === id ?
                        <Button sx={{ mr: 3, mb: 3, zIndex: 1, }} variant="contained" endIcon={<CameraAlt />} onClick={() => handleClickOpen("coverImage")}>
                            Editar a foto da capa
                        </Button> :
                        <Stack>
                            <Button sx={{ mr: 3, mb: 1, zIndex: 1, }}
                                variant="contained"
                                endIcon={<ShowChart />}
                            >
                                ver as receitas
                            </Button>
                            {!isFollowing ? < Button
                                onClick={() => handleClickfallowed(userValues?.id, user?.uid)}
                                sx={{ mr: 3, mb: 4, zIndex: 1, }}
                                variant="contained"
                                endIcon={<PersonAdd />}
                            >
                                seguir
                            </Button> :
                                < Button
                                    onClick={() => unfallow(userValues?.id, user?.uid)}
                                    sx={{ mr: 3, mb: 4, zIndex: 1, bgcolor: orange[500] }}
                                    variant="contained"
                                    endIcon={<PersonRemove />}
                                >
                                    Deixar de seguir
                                </Button>
                            }
                        </Stack>
                }
            </CardMedia >
            <Tag.ItemsLinks sx={{
                justifyContent: 'flex-start !important',
                gap: 1,
                padding: 1.6,
                mt: '-3.8rem',
            }}>
                <Box onDoubleClick={() => handleClickOpen("photoURL")}>
                    <Avatar src={userValues?.photoURL} sx={{ zIndex: 0, width: 100, height: 100, border: '5px solid white' }} >
                    </Avatar>
                </Box>
                <Box>
                    <Stack variant="h6" sx={{ fontWeight: 900, color: 'black' }}>{userValues?.name || userValues?.displayName}</Stack>
                    <Stack sx={{ fontWeight: 100, color: 'black' }}>30 receitas</Stack>
                </Box>
            </Tag.ItemsLinks>
        </>
    )
}