import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Input, selectClasses, TextField } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FormLabel, RadioGroup, Radio } from '@mui/material';








export const RecipeForm = ({
    handleInputIngre,
    formData,
    adicionarIngre,
    removerIngre,
    handleInputChangesCreateRecipes,
    handleSubmit,
    handleImageChange,
}) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [valores, setValores] = React.useState([]);
    const stepNames = ['Ingredientes', 'mod. preparos', 'Nutricionais', 'pessoais'];
    const [stepsData, setStepsData] = React.useState([
        { inputs: [], prep: [] }, // Etapa 0
        { inputs: [], prep: [] }, // Etapa 1
        { inputs: [], prep: [] }, // Etapa 2
        { inputs: [], prep: [] }, // Etapa 3
    ]);


    const [step, setStep] = React.useState(0); // Variável de estado para controlar o passo atual

   
    const handleInputsChange = (event, index) => {
        const newInputs = [...stepsData[step].inputs];
        newInputs[index] = event.target.value;
        const newStepsData = [...stepsData];
        newStepsData[step].inputs = newInputs;
        setStepsData(newStepsData);
    };


    const AddStep = () => {
        const newPrep = [...stepsData[step].prep, ''];
        const newStepsData = [...stepsData];
        newStepsData[step].prep = newPrep;
        setStepsData(newStepsData);
    };

    const removeInput = (index) => {
        const newPrep = [...stepsData[step].prep];
        newPrep.splice(index, 1);
        const newStepsData = [...stepsData];
        newStepsData[step].prep = newPrep;
        setStepsData(newStepsData);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    console.log(formData.ingredientes)
    return (
        <>
            <Typography component="h1" variant="h4" align="center">
                {step === stepsData.length ? "Estados da sua receita" : "Criação de receitas"}
            </Typography>
            <Stepper activeStep={step} sx={{ pt: 3, pb: 5 }}>
                {stepNames.map((_, index) => (
                    <Step key={index}>
                        <StepLabel>{index < step ? "Concluído" : stepNames[index]}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {step === stepNames.length && (
                <>

                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Obrigado pela sua contribuição                                </Typography>
                        <Typography variant="subtitle1">
                            Receita criada com sucesso!
                            Obrigado pela sua contribuição, o número da sua receita é: 23, id: sdarewesdsssZ\DaqSSSXx
                        </Typography>
                    </React.Fragment>
                    <Grid xs={12} gap={3}>
                        <Button size="small" sx={{ mt: 4, mr: 2 }} variant='outlined'>
                            <Link href={'/TopReview'}>{"Ver a sua receita"}</Link>
                        </Button>
                        <Button size="small" sx={{ mt: 4 }} variant='outlined'><Link href='/'>{"Voltar para home"}</Link></Button>
                    </Grid>
                </>
            )}
            <Typography variant="h6" gutterBottom>
                Ingredientes
            </Typography>
            <Grid container spacing={2} sx={{ transition: '300ms' }}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="recipeTitle"
                        name="recipeTitle"
                        onChange={handleInputChangesCreateRecipes}
                        label="Insirá o titulo da receita"
                        fullWidth
                        autoComplete="given-name"
                        variant='filled'
                        value={formData?.recipeTitle}
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
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.recipeDescription}
                    />
                </Grid>
                <Grid item xs={12} sx={{ mt: '0.2rem',overflow: 'auto' , height: formData.ingredients.length > 0? '10rem': 0, transition: '.3s'}}>
                    {formData.ingredients.map((valor, index) => (
                        <>
                            <Grid item xs={12} key={index} sx={{ display: 'flex', mt: 2 }}>
                                <TextField
                                    label={`Ingrediente ${index + 1}`}
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    value={valor}
                                    onChange={(e) => handleInputIngre(e, index)}
                                />

                            </Grid>
                            <Grid item xs={12} key={index} sx={{ display: 'flex', }}>
                                <Button color="error" onClick={() => removerIngre(index)} variant='outlined' startIcon={<DeleteIcon />}>
                                    Delete Ingrediente
                                </Button>
                            </Grid>
                        </>
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Button size='small' sx={{ mr: 2 }} onClick={adicionarIngre} variant='contained'>
                        + Add ingredient
                    </Button>
                </Grid>


            </Grid>
            <Typography variant="h6" gutterBottom mt={3}>
                Etapas de preparo
            </Typography>
            <Grid container spacing={3}>
                {stepsData[step].prep.map((input, index) => (
                    <Grid item xs={12} key={index}>
                        <TextField
                            label={`Etapa ${index + 1}`}
                            fullWidth
                            variant='filled'
                            type="text"
                            value={input}
                            onChange={(e) => handleInputsChange(e, index)}
                        />
                        <Button color="error" onClick={() => removeInput(index)} variant='outlined' startIcon={<DeleteIcon />}>
                            Delete step
                        </Button>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    {<Button sx={{ mr: 2 }} onClick={AddStep} variant='contained'>
                        + Add step
                    </Button>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="prepTime"
                        name="prepTime"
                        label="Tempo de preparo"
                        fullWidth
                        autoComplete="prepTime"
                        type='number'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.prepTime}
                        variant='filled'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cookTime"
                        name='cookTime'
                        label="Tempo de cozimento"
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.cookTime}
                        type={"number"}
                        fullWidth
                        autoComplete="cc-csc"
                        variant='filled'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="servingSize"
                        name='servingSize'
                        label="Rendimento da receita/porções"
                        fullWidth
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.servingSize}
                        autoComplete="cc-csc"
                        variant='filled'
                    />
                </Grid>
            </Grid>


            <Typography variant="h6" gutterBottom mt={3}>
                Categorias e Nutrição
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                        <Select
                            id="demo-simple-select"
                            labelId="demo-simple-select-label"
                            name="recipeCategory"
                            value={formData.recipeCategory}
                            onChange={handleInputChangesCreateRecipes}
                            placeholder="Selecione a Categoria"
                            variant='filled'
                        >
                            <MenuItem value="">Selecione a Categoria</MenuItem>
                            <MenuItem value="breakfast">Café da manhã</MenuItem>
                            <MenuItem value="lunch">Almoço</MenuItem>
                            <MenuItem value="dinner">Jantar</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} gap={1}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Dificuldade da Receita:</FormLabel>
                        <RadioGroup
                            name="recipeDifficulty"
                            value={formData.recipeDifficulty}
                            onChange={handleInputChangesCreateRecipes}
                        >
                            <FormControlLabel
                                value="easy"
                                control={<Radio />}
                                label="Fácil"
                            />
                            <FormControlLabel
                                value="medium"
                                control={<Radio />}
                                label="Médio"
                            />
                            <FormControlLabel
                                value="hard"
                                control={<Radio />}
                                label="Difícil"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth
                        type="file"
                        name="recipeImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        value={formData?.recipeImage}
                        variant='filled'
                    />
                </Grid>


                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth
                        required
                        id="calories"
                        name='calories'
                        label="Calorias"
                        autoComplete="calories"
                        variant="filled"
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.calories}
                        type='number'
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        name='carbs'
                        required
                        id="carbs"
                        label="Carboidratos"
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.carbs}
                        autoComplete="carboidratos"
                        variant='filled'
                        type='number'

                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        required
                        name="protein"
                        id="proteinas"
                        label="Proteínas"
                        autoComplete="proteinas"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.protein}
                        type='number'
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        required
                        id="fibras"
                        name='fat'
                        label="Fibras"
                        autoComplete="fibras"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.fat}
                        type='number'
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        required
                        id="sodio"
                        name='sod'
                        label="Sódio"
                        autoComplete="sodio"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.sod}
                        type='number'
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        required
                        name='gord'
                        id="gorduras"
                        label="Gorduras"
                        autoComplete="gorduras"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.gord}
                        type='number'
                    />
                </Grid>
            </Grid>


            <Typography variant="h6" gutterBottom mt={3}>
                Dados do criador
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        id="author"
                        label="Nome do criador"
                        name='author'
                        autoComplete="authotName"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.author}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        id="creationDate"
                        name='creationDate'
                        label="Data de criação"
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.creationDate}
                        autoComplete="creationDate"
                        variant='filled'
                        type='date'

                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        id="ranking"
                        name='ranking'
                        label="Rankig da receita de(1-10)"
                        autoComplete="ranking"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.ranking}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        id="UserEmail"
                        name='email'
                        label="Email do criador"
                        autoComplete="UserEmail"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.email}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        id="country"
                        name='country'
                        label="O pais do criador"
                        autoComplete="country"
                        variant='filled'
                        onChange={handleInputChangesCreateRecipes}
                        value={formData?.country}
                    />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Button onClick={handleSubmit} variant="contained">
                        Terminar a receita
                    </Button>
                </Grid>
            </Grid>

        </>
    )
}
