import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Grid, Stack, Container, Paper, Box, Avatar, Button } from '@mui/material';
import * as Tag from './index'
import { grey, orange } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export const Comunidade = () => {
    const users = [
        { name: 'Temotio Luis Bernardo', postCount: 5, viewCount: 100, avatar: '', fallowing: '4 mill', fallowers: "20" },
        { name: 'Abimael Neto', postCount: 3, viewCount: 50, avatar: '', fallowing: '1001', fallowers: "30" },
        { name: 'Quizito Cristiano', postCount: 7, viewCount: 200, avatar: '', fallowing: '300', fallowers: "2.000" },
    ];

    const StyeleTable = {
        fontWeight: 'bold', color: orange[900]
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
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
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
                            {users.map((user, index) => {
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
                                            <TableCell><Button variant='contained'>Follow</Button></TableCell>
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