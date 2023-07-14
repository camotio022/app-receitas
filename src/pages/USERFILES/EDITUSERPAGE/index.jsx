

import { Avatar, Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Input, Stack, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { Logo } from '../../../componentes/LOGO/index'
import * as Tag from './index.js'
import {
    Sort as SortIcon,
    Category as CategoryIcon,
    ColorLens as ColorLensIcon,
    Close,
    Edit,
    Save,
    Send,
    Photo,
    Camera,
    CameraAlt
} from '@mui/icons-material'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../api"
import { number } from "prop-types"

export const PerfilUser = () => {

    const { id } = useParams()
    const [editingField, setEditingField] = useState(null);

    const [isEditing, setIsEditing] = useState(false);
    const [userValues, setUserValues] = useState({});
    const [open, setOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(!open);
    };

    const handleSaveClick = async (id) => {
        if (!id) return
        const updatedData = {
            name: userValues.name ?? '',
            coverImage: userValues.coverImage ?? '',
            photoURL: userValues.photoURL ?? '',
            email: userValues.email ?? '',
            address: userValues.address ?? '',
            birthday: userValues.birthday ?? '',
            age: userValues.age ?? '',
            phoneNumber: userValues.phoneNumber ?? null,
            occupation: userValues.occupation ?? '',
            education: userValues.education ?? '',
            hobbies: userValues.hobbies ?? '',
            socialMedia: userValues.socialMedia ?? '',
            bio: userValues.bio ?? '',
        };
        const updatedUserValues = {
            ...userValues,
            ...updatedData,
        };
        console.log(updatedUserValues);
        try {
            await api.user.update(id, updatedUserValues);
            console.log('Usuário atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
        } finally {
        }
        setIsEditing(false);

    };
    const handleSaveCoverImage = async () => {
        if (!userValues.coverImage) {
            console.log('Nenhuma imagem de capa selecionada.');
            return;
        }
        try {
            // Verificar se o campo coverImage está definido em userValues
            if (userValues.coverImage) {
                // Chamar a função updateCover passando o ID do usuário e os dados atualizados
                await api.user.updateCover(id, { coverImage: userValues.coverImage });
                console.log('Imagem de capa atualizada com sucesso!');
            }

            // Verificar se o campo photoURL está definido em userValues
            if (userValues.photoURL) {
                // Chamar a função update passando o ID do usuário e os dados atualizados
                await api.user.update(id, { photoURL: userValues.photoURL });
                console.log('PhotoURL atualizado com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao atualizar a imagem:', error);
        }

        handleClose();
    };


    const handleChange = (event) => {
        setUserValues({ ...userValues, [event.target.name]: event.target.value });
    };
    const handleEditPhotoURL = () => {
        setEditingField("photoURL");
    };

    const handleEditCoverImage = () => {
        setEditingField("coverImage");
    };

    const handleCoverImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64Image = reader.result;
            const updatedData = { coverImage: base64Image, photoURL: base64Image };
            setUserValues({ ...userValues, ...updatedData });
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            try {
                const data = await api.user.get(id);
                setUserValues(data)
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [id]);
    return (
        <>
            <SwipeableDrawer
                anchor="top"
                open={true}
                onClose={true}
                onOpen={true}
            >
                <Tag.ItemsLinks sx={{
                    bgcolor: '#374957',
                    padding: 1.6
                }}>
                    <Logo logoStyle={{
                        marginLeft: '-0.51rem',
                        paddingLeft: '10px',
                        filter: 'brightness(0.9) saturate(0.8) hue-rotate(10deg)',
                    }} />
                    <Close />
                </Tag.ItemsLinks>
                <CardMedia
                    sx={{
                        maxHeight: 400,
                        height: 400,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        width: '100%',
                        height: '400px',
                        background: 'linear-gradient(to bottom, #ff9f00, #ffbf69)',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url(url-da-imagem-padrão)',
                            backgroundSize: 'cover',
                            opacity: 0.5,
                        }
                    }}
                    component="div"
                    image={userValues?.coverImage}
                >
                    <Button sx={{ mr: 3, mb: 3, zIndex: 1, }} variant="contained" endIcon={<CameraAlt />} onClick={handleEditCoverImage}>
                        Editar a foto da capa
                    </Button>
                </CardMedia>
                <Tag.ItemsLinks sx={{
                    justifyContent: 'flex-start !important',
                    gap: 1,
                    padding: 1.6,
                    mt: '-3.8rem',
                }}>
                    <Box>
                        <Avatar src={userValues?.photoURL} sx={{ zIndex: 0, width: 100, height: 100, border: '5px solid white' }} >
                        </Avatar>
                        <CameraAlt onClick={handleEditPhotoURL} sx={{ position: 'absolute', ml: '4.5rem', mt: "-2rem", zIndex: 1 }} />
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: 'white' }}>{userValues?.name}</Typography>
                        <Typography>30 receitas</Typography>
                    </Box>
                </Tag.ItemsLinks>
                <Tag.ItemMenu >
                    EDITAR O PERFIL
                </Tag.ItemMenu>

                <Stack
                    sx={{ width: '100vw', height: '100vh' }}
                    role="presentation"
                    onKeyDown={true}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: "15px",
                        flexWrap: 'wrap',
                        width: '100%',
                        padding: '1rem'
                    }}>
                        <Card
                            sx={{
                                width: '100%',
                                fontFamily: 'Arial, sans-serif',
                                transition: 'background-color 0.3s ease',
                                '&:hover': { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' },
                                background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)',
                                borderRadius: '12px',
                            }}
                        >
                            <CardContent>
                                {isEditing ? (
                                    <>
                                        <Tag.ItemMenu>
                                            Editando
                                        </Tag.ItemMenu>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="name"
                                                    label="Nome"
                                                    value={userValues.name || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="email"
                                                    label="E-mail"
                                                    value={userValues.email || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="birthday"
                                                    label="Aniversário"
                                                    type="date"
                                                    value={userValues.birthday || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="age"
                                                    label="Idade"
                                                    type="number"
                                                    value={userValues.age || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="address"
                                                    label="Endereço"
                                                    value={userValues.address || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="phoneNumber"
                                                    label="Telefone"
                                                    type="tel"
                                                    value={userValues.phoneNumber || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="occupation"
                                                    label="Ocupação"
                                                    value={userValues.occupation || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="education"
                                                    label="Educação"
                                                    value={userValues.education || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="hobbies"
                                                    label="Hobbies"
                                                    value={userValues.hobbies || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="socialMedia"
                                                    label="Mídias Sociais"
                                                    value={userValues.socialMedia || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <TextField
                                                    name="bio"
                                                    label="Biografia"
                                                    multiline
                                                    rows={4}
                                                    value={userValues.bio || ''}
                                                    onChange={handleChange}
                                                />
                                            </Grid>

                                        </Grid>
                                        <Button variant="contained" onClick={() => handleSaveClick(id)}>
                                            Salvar as informações
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Tag.ItemMenu>
                                            Apresentação
                                        </Tag.ItemMenu>
                                        <CardContent>
                                            <Typography variant="body1" component="div">
                                                Name: {userValues.name}
                                            </Typography>
                                            <Typography variant="body1" component="div">
                                                Email: {userValues.email}
                                            </Typography>
                                            <Typography variant="body1" component="div">
                                                Aniversário: {userValues.birthday}
                                            </Typography>

                                            <Typography variant="body1" component="div">
                                                Endereço: {userValues.address}
                                            </Typography>

                                            <Typography variant="body1" component="div">
                                                Telefone: {userValues.phoneNumber}
                                            </Typography>

                                            <Typography variant="body1" component="div">
                                                Ocupação: {userValues.occupation}
                                            </Typography>

                                            <Typography variant="body1" component="div">
                                                Educação: {userValues.education}
                                            </Typography>

                                            <Typography variant="body1" component="div">
                                                Hobbies: {userValues.hobbies}
                                            </Typography>

                                            <Typography variant="body1" component="div">
                                                Mídias Sociais: {userValues.socialMedia}
                                            </Typography>

                                            <Typography variant="body1" component="div">
                                                Biografia: {userValues.bio}
                                            </Typography>

                                        </CardContent>
                                        <Tag.ItemMenu>
                                            <Edit onClick={handleEditClick} />
                                        </Tag.ItemMenu>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </Box>
                </Stack>
            </SwipeableDrawer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>FOTO CAPA</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Escolha uma imagem para usar como foto de capa!
                    </DialogContentText>
                    {editingField === "photoURL" ? (
                        <TextField
                            autoFocus
                            margin="dense"
                            id="img"
                            label="Imagem"
                            type="file"
                            accept="image/*"
                            fullWidth
                            variant="standard"
                            onChange={handleCoverImageChange}
                        />
                    ) : editingField === "coverImage" ? (
                        <TextField
                            autoFocus
                            margin="dense"
                            id="img"
                            label="Imagem de capa"
                            type="file"
                            accept="image/*"
                            fullWidth
                            variant="standard"
                            onChange={handleCoverImageChange}
                        />
                    ) : null}


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>voltar</Button>
                    <Button onClick={handleSaveCoverImage}>Salvar</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}
