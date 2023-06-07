import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Grid, Stack, Container, Paper, Box, Avatar, Button } from '@mui/material';
import * as Tag from './index'
import { grey, orange } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { api } from '../../api';
export const Comunidade = () => {
    const [loading, setLoading] = useState(false);

    const [usuarios, setUsuarios] = useState([]);
    const users = [
        { name: 'Temotio Luis Bernardo', postCount: 5, viewCount: 100, avatar: '', fallowing: '4 mill', fallowers: "20" },
        { name: 'Abimael Neto', postCount: 3, viewCount: 50, avatar: '', fallowing: '1001', fallowers: "30" },
        { name: 'Quizito Cristiano', postCount: 7, viewCount: 200, avatar: '', fallowing: '300', fallowers: "2.000" },
    ];
    useEffect(() => {
        // Recupere os usuários do Firebase
        const obterUsuarios = async () => {
            const usuariosData = await api.user.get()
            setUsuarios(usuariosData);
            console.log(usuariosData)
        };
        console.log(usuarios)
        obterUsuarios();
    }, []);
    const StyeleTable = {
        fontWeight: 'bold', color: orange[900]
    }
    function handleClick() {
        setLoading(!loading);
    }
    return (
        <>
            <Container
                component="main"
                maxWidth="sm"
                sx={{
                    mt: 15,
                    display: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "100%",
                    height: "100%",
                }}
            >
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 12 }, p: { xs: 3, md: 3 }, width: "auto" }}
                >
                    <React.Fragment>
                        <h2>Comunidade de usuários</h2>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={StyeleTable}>Info users</TableCell>
                                    <TableCell style={StyeleTable}>Posts</TableCell>
                                    <TableCell style={StyeleTable}>Views</TableCell>
                                    <TableCell style={StyeleTable}>Folls</TableCell>
                                    <TableCell style={StyeleTable}>Following</TableCell>
                                    <TableCell style={StyeleTable}>Follow</TableCell>
                                </TableRow>
                            </TableHead>
                            {usuarios.map((user, index) => {
                                return (
                                    <TableBody key={index}>
                                        <TableRow>

                                            <TableCell sx={{ display: 'flex', alignItems: "center", gap: '1rem' }}>
                                                <Avatar sx={{ width: 46, height: 46 }} alt={user.name} src={user.avatar} />
                                                <Stack>{user.name}</Stack>
                                            </TableCell>


                                            <TableCell>{user.postCount}</TableCell>
                                            <TableCell>{user.viewCount}</TableCell>
                                            <TableCell>{user.fallowers}</TableCell>
                                            <TableCell>{user.fallowing}</TableCell>
                                            <TableCell>
                                                <LoadingButton
                                                    size="small"
                                                    onClick={handleClick}
                                                    startIcon={<PersonAddIcon />}
                                                    loading={loading && loading}
                                                    loadingPosition="end"
                                                    variant="contained"
                                                >
                                                    <span>Fallow</span>
                                                </LoadingButton>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                )
                            })}

                        </Table>
                    </React.Fragment>
                </Paper>
            </Container>


        </>
    )
}