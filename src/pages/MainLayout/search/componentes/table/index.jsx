import React, { } from 'react';
import { Table, TableHead, TableRow, TableCell, Stack, Container, Paper, Box, Avatar, Button, Link } from '@mui/material';
import { MapResult } from './listresult';

export const ResultTable = ({
    results
}) => {
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
                        <h2>Comunidade de usuários</h2>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={StyeleTable}>Info users</TableCell>
                                    <TableCell style={StyeleTable}>Emails</TableCell>
                                    <TableCell style={StyeleTable}>Recipes</TableCell>
                                </TableRow>
                            </TableHead>
                            {results?.map((result, index) => {
                                return (
                                    <MapResult
                                        index={index}
                                        id={result.id}
                                        name={result.name}
                                        photoURL={result.photoURL}
                                        email={result.email}
                                    />
                                )
                            })}

                        </Table>
                    </Paper>
                </Container>

            </Stack>
        </>
    )
}