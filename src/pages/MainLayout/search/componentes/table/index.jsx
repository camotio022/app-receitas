import React, { } from 'react';
import { Table, TableHead, TableRow, TableCell, Stack, Container, Paper, Box, Avatar, Button, Link } from '@mui/material';
import { MapResult } from './listresult';
import { orange } from '@mui/material/colors';

export const ResultTable = ({
    results,
    searchInput
}) => {
    const StyeleTable = {
        fontWeight: 'bold', color: orange[900]
    }
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
                        <h2>{`Resultados da pesquisa "${searchInput}"`}</h2>
                        <TableHead>
                            <TableRow>
                                <TableCell style={StyeleTable}>User name</TableCell>
                                <TableCell style={StyeleTable}>Emails</TableCell>
                            </TableRow>
                        </TableHead>
                        {results.map((res) => {
                            return (
                                <MapResult
                                    index={res.id}
                                    searchInput={searchInput}
                                    id={res.id}
                                    name={res.name}
                                    photoURL={res.photoURL}
                                    email={res.email}
                                />
                            )
                        })}
                    </Paper>
                </Container>

            </Stack>
        </>
    )
}