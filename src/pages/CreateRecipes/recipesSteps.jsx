import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';





export default function PaymentForm() {
    const [inputs, setInputs] = React.useState([]);

    const addInput = () => {
        setInputs([...inputs, '']);
    };

    const handleInputChange = (event, index) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };
    const removeInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Etapas de preparo
            </Typography>
            <Grid container spacing={3}>

                {inputs.map((value, index) => (
                    <Grid item xs={12} >
                        <TextField
                            id={index}
                            name={index}
                            label={`Etapa ${index + 1}`}
                            fullWidth
                            variant="standard"
                            key={index}
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    {inputs.length < 10 && <Button sx={{ mr: 2 }} onClick={addInput} variant='contained'>
                        + Add step
                    </Button>}
                    {inputs.length > 0 && <Button color="error" onClick={removeInput} variant='outlined' startIcon={<DeleteIcon />}>
                        Delete step
                    </Button>}
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
