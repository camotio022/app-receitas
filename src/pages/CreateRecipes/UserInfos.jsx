import * as React from 'react';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import { Button, Input, selectClasses, TextField } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';








export default function UserInfos() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Dados do criador
            </Typography>
            <Grid container spacing={3}>




                <Grid item xs={12}>
                    <TextField
                        required
                        id="authotName"
                        label="Nome do criador"
                        autoComplete="authotName"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="dateCreated"
                        label="Data de criação"

                        autoComplete="dateCreated"
                        variant="standard"

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="ranking"
                        label="Rankig da receita de(1-10)"
                        autoComplete="ranking"
                        variant="standard"
                    />
                </Grid>
             
                

                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="UserEmail"
                        label="Email do criador"
                        autoComplete="UserEmail"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="coutry"
                        label="O pais do criador"
                        autoComplete="gordurasTransp"
                        variant="standard"
                    />
                </Grid>
              
            </Grid>
        </React.Fragment>
    );
}