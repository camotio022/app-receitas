import { CameraAlt } from "@mui/icons-material"
import { Avatar, Box, Button, CardMedia, Stack } from "@mui/material"
import *as Tag from '../../index.js'


export const CardMediaUser = ({
    handleClickOpen,
    userValues,
    user,
    id
}) => {
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
                {user?.uid === id &&
                    <Button sx={{ mr: 3, mb: 3, zIndex: 1, }} variant="contained" endIcon={<CameraAlt />} onClick={() => handleClickOpen("coverImage")}>
                        Editar a foto da capa
                    </Button>}
            </CardMedia>
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