import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Grid, Stack, Container, Paper, Box, Avatar, Button, Link } from '@mui/material';
import * as Tag from './index'
import { grey, orange } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { api } from '../../api';
import { INTERFACE } from '../INTERFACE/index.jsx';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase.config'
export const Comunidade = () => {
    const [loading, setLoading] = useState(false);
    const [recipesCount, setRecipesCount] = useState({});
    const [usuarios, setUsuarios] = useState();
    useEffect(() => {
        const obterUsuarios = async () => {
            try {
                const usuariosData = await api.user.get();
                setUsuarios(usuariosData || []);
                console.log(usuariosData);

                const recipesCountPerUser = await countRecipesPerUser(usuariosData);
                setRecipesCount(recipesCountPerUser);
            } catch (error) {
                console.log(error);
            }
        };
        console.log(usuarios);
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

                console.log(`Receitas do usuário ${usuario.id}:`, querySnapshot.docs.map((doc) => doc.data()));
            } catch (error) {
                console.log(`Erro ao obter as receitas do usuário ${usuario.id}:`, error);
                recipesCountPerUser[usuario.id] = 0;
            }
        }

        console.log('recipesCountPerUser:', recipesCountPerUser);

        return recipesCountPerUser;
    };




    console.log(usuarios); // 3. Estado 'usuarios' ainda vazio aqui, pois useEffect ainda não foi executado.

    const StyeleTable = {
        fontWeight: 'bold', color: orange[900]
    }
    function handleClick() {
        setLoading(!loading);
    }
    return (
        <>
            <INTERFACE RENDERPAGE={<>
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

                            <h2>Comunidade de usuários</h2>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={StyeleTable}>Info users</TableCell>
                                        <TableCell style={StyeleTable}>Emails</TableCell>
                                        <TableCell style={StyeleTable}>Recipes</TableCell>
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
                                                    <Stack>{user.name}</Stack>
                                                </TableCell>
                                                <TableCell>{user?.email}</TableCell>
                                                <TableCell>{user?.postCount}</TableCell>
                                            </TableRow>

                                        </TableBody>
                                    )
                                })}
                            </Table>
                        </Paper>
                    </Container>

                </Stack>
            </>} />






        </>
    )
}