import * as React from 'react';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import { Button, Input, selectClasses, TextField } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';



export default function Review() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Categorias e Nutrição
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <select
                        name="recipeCategory"
                        placeholder="Select a pet…"
                        indicator={<KeyboardArrowDown />}
                        style={{
                            width: 240,
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <option value="">Selecione a Categoria</option>
                        <option value="breakfast">Café da manhã</option>
                        <option value="lunch">Almoço</option>
                        <option value="dinner">Jantar</option>
                    </select>
                </Grid>
                <Grid item xs={12} md={6} gap={1}>
                    <span>Dificuldade da Receita:</span>
                    <label >
                        <Input
                            type="radio"
                            name="recipeDifficulty"
                            value="easy"
                        />
                        Fácil
                    </label>
                    <label>
                        <Input
                            type="radio"
                            name="recipeDifficulty"
                            value="medium"
                        />
                        Médio
                    </label>
                    <label>
                        <Input
                            type="radio"
                            name="recipeDifficulty"
                            value="hard"
                        />
                        Difícil
                    </label>
                </Grid>
                <Grid item xs={12} md={6}>
                <Input
                        type="file"
                        name="recipeImage"
                        accept="image/*"
                    />
                </Grid>


                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="calories"
                        label="Calorias"
                        autoComplete="calories"
                        variant="standard"
                
                    />
                </Grid>
     
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="carbs"
                        label="Carboidratos"
                    
                        autoComplete="carboidratos"
                        variant="standard"
                
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="proteinas"
                        label="Proteínas"
                        autoComplete="proteinas"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="fibras"
                        label="Fibras"
                        autoComplete="fibras"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="sodio"
                        label="Sódio"
                        autoComplete="sodio"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="gorduras"
                        label="Gorduras"
                        autoComplete="gorduras"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="gordurasTransp"
                        label="Gorduras transpirantes"
                        autoComplete="gordurasTransp"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="gordurasSatur"
                        label="Gorduras saturadas"
                        autoComplete="gordurasSatur"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}