import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Etapas de preparo
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="strep1"
                        label="Etapa 1"
                        fullWidth
                        autoComplete="strep1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="strep2"
                        label="Etapa 2"
                        fullWidth
                        autoComplete="strep2"
                        variant="standard"
                        helperText="Se precisar adicionar mais etapas clica no botão abaixo"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained'>
                        + Add etapa
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="prepTime"
                        label="Tempo de preparo"
                        fullWidth
                        autoComplete="prepTime"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cookTime"
                        label="Tempo de cozimento"
                      
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="servingSize"
                        label="Rendimento da receita/porções"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
