

import { Alert, Avatar, Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Input, Link, Stack, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { Logo } from '../../../componentes/LOGO/index'
import * as Tag from './index.js'
import {
    Sort as SortIcon,
    Category as CategoryIcon,
    ColorLens as ColorLensIcon,
    Close,
    Edit,
    CameraAlt
} from '@mui/icons-material'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../api"
import { number } from "prop-types"
import { INTERFACE } from "../../INTERFACE/index.jsx"

export const PerfilUser = () => {

    const { id } = useParams()
    const [editingField, setEditingField] = useState('');

    const [isEditing, setIsEditing] = useState(false);
    const [userValues, setUserValues] = useState({});
    const [open, setOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };
    const handleClickOpen = (value) => {
        setEditingField("");
        setOpen(!open);
        if (value === "coverImage") {
            setEditingField("coverImage");
        }
        if (value === "photoURL") {

            setEditingField("photoURL");
        }
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
            if (editingField === "coverImage") {
                // Chamar a função updateCover passando o ID do usuário e os dados atualizados
                await api.user.updateCover(id, { coverImage: userValues.coverImage });
                console.log('Imagem de capa atualizada com sucesso!');
            }

            // Verificar se o campo photoURL está definido em userValues
            if (editingField === "photoURL") {
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
    const handleCoverImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64Image = reader.result;
            let updatedData = {};

            if (editingField === 'coverImage') {
                updatedData = { ...updatedData, coverImage: base64Image };
            } else {
                updatedData = { ...updatedData, photoURL: base64Image };
            }

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
    if (!id) {
        return (
            <INTERFACE RENDERPAGE={<>
                <Dialog open={true} onClose={handleClose}>
                    <DialogTitle>INFORMAÇÕES DO ESTADO</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ITEM NÃO SELECIONDO POR FAVOR SELECIONE
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Link href="/topReview">Voltar</Link>
                    </DialogActions>
                </Dialog>
            </>} />
        )
    }
    if (id) {
        return (
            <>
                <INTERFACE RENDERPAGE={<>
                    <Stack
                    >

                        <CardMedia
                            sx={{
                                maxHeight: 400,
                                height: 400,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                width: '100%',
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
                            <Button sx={{ mr: 3, mb: 3, zIndex: 1, }} variant="contained" endIcon={<CameraAlt />} onClick={() => handleClickOpen("coverImage")}>
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
                                <CameraAlt onClick={() => handleClickOpen("photoURL")} sx={{ position: 'absolute', ml: '4.5rem', mt: "-2rem", zIndex: 1 }} />
                            </Box>
                            <Box>
                                <Stack variant="h6" sx={{ fontWeight: 900, color: 'black' }}>{userValues?.name || userValues?.displayName}</Stack>
                                <Stack sx={{ fontWeight: 100, color: 'black' }}>30 receitas</Stack>
                            </Box>
                        </Tag.ItemsLinks>
                        <Tag.ItemMenu >
                            EDITAR O PERFIL
                        </Tag.ItemMenu>

                        <Stack

                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: "15px",
                                flexWrap: 'wrap',
                                width: '100%',
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
                                                    <Stack variant="body1" component="div">
                                                        Name: {userValues.name}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Email: {userValues.email}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Aniversário: {userValues.birthday}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Endereço: {userValues.address}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Telefone: {userValues.phoneNumber}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Ocupação: {userValues.occupation}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Educação: {userValues.education}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Hobbies: {userValues.hobbies}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Mídias Sociais: {userValues.socialMedia}
                                                    </Stack>
                                                    <Stack variant="body1" component="div">
                                                        Biografia: {userValues.bio}
                                                    </Stack>
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
                    </Stack>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>FOTO CAPA</DialogTitle>
                        <CardMedia sx={{ width: "100%", height: 300 }}
                            component="img"
                            image={editingField === 'coverImage' ? userValues?.coverImage : userValues?.photoURL}>

                        </CardMedia>
                        <DialogContent>
                            <DialogContentText>
                                Escolha uma imagem para usar como foto de capa!
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="img"
                                label={editingField === 'coverImage' ? "Image cover" : "Imagem photoURL"}
                                type="file"
                                accept="image/*"
                                fullWidth
                                variant="standard"
                                onChange={handleCoverImageChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>voltar</Button>
                            <Button onClick={handleSaveCoverImage}>Salvar</Button>
                        </DialogActions>
                    </Dialog>
                </>} />


            </>
        )
    }
}
