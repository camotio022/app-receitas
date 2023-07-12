// import { Avatar, Box, Button, Card, CardContent, CardMedia, Divider, Grid, Stack, SwipeableDrawer, TextField, Typography } from "@mui/material"
// import { Logo } from '../../../componentes/LOGO/index'
// import * as Tag from './index.js'
// import {
//     Sort as SortIcon,
//     Category as CategoryIcon,
//     ColorLens as ColorLensIcon,
//     Close,
//     Edit,
//     Save
// } from '@mui/icons-material'
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { api } from "../../../api"



// export const PerfilUser = () => {
//     const { id } = useParams()

//     const [isEditing, setIsEditing] = useState(false);

//     const [userValues, setUserValues] = useState([]);
//     const handleEditClick = () => {
//         setIsEditing(true);
//     };
//     const handleSaveClick = () => {
//         setIsEditing(false);
//     };
//     const handleChange = (event) => {
//         setUserValues({ ...userValues, [e.target.name]: e.target.value });
//     };
//     useEffect(() => {
//         if (!id) return;

//         const fetchData = async () => {
//             try {
//                 const data = await api.user.get(id);
//                 setUserValues(data)
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchData();
//     }, [id]);
//     return (
//         <>
//             <SwipeableDrawer
//                 anchor="top"
//                 open={true}
//                 onClose={true}
//                 onOpen={true}
//             >
//                 <Tag.ItemsLinks sx={{
//                     bgcolor: '#374957',
//                     padding: 1.6
//                 }}>
//                     <Logo logoStyle={{
//                         marginLeft: '-0.51rem',
//                         paddingLeft: '10px',
//                         filter: 'brightness(0.9) saturate(0.8) hue-rotate(10deg)',
//                     }} />
//                     <Close />
//                 </Tag.ItemsLinks>
//                 <CardMedia
//                     sx={{ maxHeight: 400 }}
//                     component="img"
//                     image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
//                 />
//                 <Tag.ItemsLinks sx={{
//                     justifyContent: 'flex-start !important',
//                     gap: 1,
//                     padding: 1.6,
//                     mt: '-3.8rem',
//                 }}>
//                     <Avatar src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" sx={{ width: 100, height: 100, border: '5px solid white' }} />
//                     <Box>
//                         <Typography variant="h6" sx={{ fontWeight: 900, color: 'white' }}>{userValues?.name}</Typography>
//                         <Typography>30 receitas</Typography>
//                     </Box>
//                 </Tag.ItemsLinks>
//                 <Tag.ItemMenu>
//                     EDITAR O PERFIL
//                 </Tag.ItemMenu>

//                 <Stack
//                     sx={{ width: '100vw', height: '100vh' }}
//                     role="presentation"
//                     onKeyDown={true}
//                     component="nav"
//                     aria-labelledby="nested-list-subheader"

//                 >
//                     <Box sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         gap: "15px",
//                         flexWrap: 'wrap',
//                         width: '100%',
//                         padding: '1rem'
//                     }}>
//                         <Card
//                             sx={{
//                                 width: '100%',
//                                 fontFamily: 'Arial, sans-serif',
//                                 transition: 'background-color 0.3s ease',
//                                 '&:hover': { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' },
//                                 background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)',
//                                 borderRadius: '12px',
//                             }}
//                         >
//                             <CardContent>
//                                 {isEditing ? (
//                                     <>
//                                         <Tag.ItemMenu>
//                                             Editando
//                                         </Tag.ItemMenu>
//                                         <Grid container spacing={2}>

//                                             <Grid item  xs={12} sm={6} md={4}>

//                                                 <TextField
//                                                     name="name"
//                                                     label="Nome"
//                                                     value={userValues.name}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>

//                                                 <TextField
//                                                     name="email"
//                                                     label="E-mail"
//                                                     value={userValues.email}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>

//                                             <Grid item  xs={12} sm={6} md={4}>

//                                                 <TextField
//                                                     name="birthday"
//                                                     label="birthday"
//                                                     type="date"
//                                                     value={userValues.age}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>

//                                                 <TextField
//                                                     name="address"
//                                                     label="Endereço"
//                                                     value={userValues.address}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>
//                                                 <TextField
//                                                     name="phoneNumber"
//                                                     label="Telefone"
//                                                     type="number"
//                                                     value={userValues.phoneNumber}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>

//                                                 <TextField
//                                                     name="occupation"
//                                                     label="Ocupação"
//                                                     value={userValues.occupation}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>
//                                                 <TextField
//                                                     name="education"
//                                                     label="Educação"
//                                                     value={userValues.education}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>

//                                                 <TextField
//                                                     name="hobbies"
//                                                     label="Hobbies"
//                                                     value={userValues.hobbies}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>

//                                                 <TextField
//                                                     name="socialMedia"
//                                                     label="Mídias Sociais"
//                                                     value={userValues.socialMedia}
//                                                     onChange={handleChange}
//                                                 />
//                                             </Grid>
//                                             <Grid item  xs={12} sm={6} md={4}>
//                                                 <TextField
//                                                     name="bio"
//                                                     label="Biografia"
//                                                     multiline
//                                                     rows={4}
//                                                     value={userValues.bio}
//                                                     onChange={handleChange}
//                                                 />

//                                             </Grid>
//                                             <Grid ite m xs={12} sm={6} md={4}>
//                                                 <Button variant="contained" onClick={handleSaveClick} >
//                                                     Salvar as informações
//                                                 </Button>
//                                             </Grid>

//                                         </Grid>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Tag.ItemMenu>
//                                             Apresentação
//                                         </Tag.ItemMenu>
//                                         <CardContent>
//                                             <Typography variant="body1" component="div">
//                                                 Name: {userValues.name}
//                                             </Typography>
//                                             <Typography variant="body1" component="div">
//                                                 Email: {userValues.email}
//                                             </Typography>
//                                             <Typography variant="body1" component="div">
//                                                 Age: {userValues.age}
//                                             </Typography>
//                                         </CardContent>
//                                         <Tag.ItemMenu>
//                                             <Edit onClick={handleEditClick} />
//                                         </Tag.ItemMenu>
//                                     </>
//                                 )}
//                             </CardContent>
//                         </Card>
//                     </Box>
//                 </Stack>
//             </SwipeableDrawer>
//         </>
//     )
// }

import { Avatar, Box, Button, Card, CardContent, CardMedia, Divider, Grid, Stack, SwipeableDrawer, TextField, Typography } from "@mui/material"
import { Logo } from '../../../componentes/LOGO/index'
import * as Tag from './index.js'
import {
    Sort as SortIcon,
    Category as CategoryIcon,
    ColorLens as ColorLensIcon,
    Close,
    Edit,
    Save
} from '@mui/icons-material'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../api"

export const PerfilUser = () => {
    const { id } = useParams()

    const [isEditing, setIsEditing] = useState(false);
    const [userValues, setUserValues] = useState({});

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = async () => {
        if (!id) return

        try {
            await api.user.update(userValues, id);
            console.log("Dados do usuário atualizados com sucesso!");
        } catch (error) {
            console.log("Erro ao atualizar os dados do usuário:", error);
        } finally {
            setIsEditing(false);
        }
    };
    const handleChange = (event) => {
        setUserValues({ ...userValues, [event.target.name]: event.target.value });
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
                    sx={{ maxHeight: 400 }}
                    component="img"
                    image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                />
                <Tag.ItemsLinks sx={{
                    justifyContent: 'flex-start !important',
                    gap: 1,
                    padding: 1.6,
                    mt: '-3.8rem',
                }}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" sx={{ width: 100, height: 100, border: '5px solid white' }} />
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: 'white' }}>{userValues?.name}</Typography>
                        <Typography>30 receitas</Typography>
                    </Box>
                </Tag.ItemsLinks>
                <Tag.ItemMenu>
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
                                        <Button variant="contained" onClick={handleSaveClick}>
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
        </>
    )
}
