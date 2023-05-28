import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

export default function AddressForm() {
    const [formData, setFormData] = React.useState({
        recipeTitle: "",
        recipeDescription: "",
        ingredient1: "",
        ingredient2: "",
        step1: "",
        step2: "",
        prepTime: "",
        cookTime: "",
        servingSize: "",
        recipeCategory: "",
        recipeDifficulty: "",
        recipeImage: null,
        cookingTips: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
        tags: "",
        author: "",
        creationDate: "",
        rating: "",
        comments: "",
        name: "",
        email: "",
        country: ""
    });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="recipeTitle"
            name="recipeTitle"
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
        <Grid item xs={12}>
          <TextField
            required
            id="ingredient1"
            name="ingredient1"
            label="ingredient 1"
            fullWidth
            autoComplete="ingredient1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ingredient2"
            name="ingredient2"
            label="ingredient 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="ingredient3"
            name="ingredient3"
            label="ingredient 3"
            fullWidth
            autoComplete="ingredient3"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="ingredient4"
            name="ingredient4"
            label="ingredient 4"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained'>
            + Add ingredient
          </Button>
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