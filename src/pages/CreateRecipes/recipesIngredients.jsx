import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';







export default function AddressForm({
  handleInputChange, formData
}) {
  const [inputs, setInputs] = React.useState([]);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputsChange = (event, index) => {
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
        Ingredientes
      </Typography>
      <Grid container spacing={3} sx={{ transition: '300ms' }}>
        <Grid item xs={12}>
          <TextField
            required
            id="recipeTitle"
            name="recipeTitle"
            value={formData?.recipeTitle}
            onChange={handleInputChange}
            label="Insirá o titulo da receita"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="recipeDescription"
            name="recipeDescription"
            label="Faça uma breve descrição"
            fullWidth
            autoComplete="description"
            size="lg"
          />
        </Grid>

        {inputs.map((value, index) => (
          <Grid item xs={12} >
            <TextField
              id={index}
              name={index}
              label={`ingrediente ${index + 1}`}
              fullWidth
              variant="standard"
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleInputsChange(e, index)}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          {inputs.length < 10 && <Button sx={{ mr: 2 }} onClick={addInput} variant='contained'>
            + Add ingredient
          </Button>}
          {inputs.length > 0 && <Button color="error" onClick={removeInput} variant='outlined' startIcon={<DeleteIcon />}>
            Delete ingredient
          </Button>}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Userdata" value="yes" />}
            label="Usar dados de usuário logado para mais informação"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}