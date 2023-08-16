import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Grid, Stack, Container, Paper, Box, Avatar, Button, Link, Typography } from '@mui/material';
import * as Tag from './styles/index'
import { orange } from '@mui/material/colors';
import { api_users } from '../../../api/users/users'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase.config'
export const Comunidade = () => {
    const [recipesCount, setRecipesCount] = useState({});
    const [usuarios, setUsuarios] = useState();
    useEffect(() => {
        const obterUsuarios = async () => {
            try {
                const usuariosData = await api_users.user.get();
                setUsuarios(usuariosData || []);
                console.log(usuariosData);

                const recipesCountPerUser = await countRecipesPerUser(usuariosData);
                setRecipesCount(recipesCountPerUser);
            } catch (error) {
                console.log(error);
            }
        };
        obterUsuarios();
    }, []);
    const countRecipesPerUser = async (usuarios) => {
        const recipesCountPerUser = {};

        for (const usuario of usuarios) {
            try {
                const querySnapshot = await getDocs(
                    query(collection(db, 'receitas'), where('author', '==', usuario.id))
                );
                const recipesCount = querySnapshot.size;
                recipesCountPerUser[usuario.id] = recipesCount;

            } catch (error) {
                recipesCountPerUser[usuario.id] = 0;
            }
        }
        return recipesCountPerUser;
    };
    const StyeleTable = {
        fontWeight: 'bold',
        color: orange[900],
        fontSize: '10px',
        wordWrap: "break-word",
        whiteSpace: "normal",
        maxWidth: "100px"

    };

    return (
        <>
            <Stack sx={{
                display: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
            }}>
                <Container
                    component="main"
                    maxWidth="sm"
                >
                    <Paper
                        variant="outlined"
                        sx={{ my: { xs: 3, md: 12 }, p: { xs: 3, md: 3 }, width: "100%" }}
                    >

                        <Typography variant="h6">Comunidade de Usuários</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={StyeleTable}>Info users</TableCell>
                                    <TableCell style={StyeleTable}>Emails</TableCell>
                                </TableRow>
                            </TableHead>
                            {usuarios?.map((user, index) => {
                                return (
                                    <TableBody key={index}>
                                        <TableRow>
                                            <TableCell sx={{ display: 'flex', alignItems: "center", gap: '1rem' }}>
                                                <Link href={`/edituser/${user.id}`}>
                                                    <Avatar sx={{ width: 46, height: 46 }} alt={user.name} src={user.photoURL} />
                                                </Link>
                                                <Stack sx={StyeleTable}>{user.name}</Stack>
                                            </TableCell>
                                            <TableCell>
                                                <div style={StyeleTable}>
                                                    {user?.email}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )
                            })}
                        </Table>
                    </Paper>
                </Container>

            </Stack >
        </>
    )
}