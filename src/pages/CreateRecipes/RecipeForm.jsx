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









export const RecipeForm = ({ formData, handleInputChanges, handleSubmit, handleImageChange }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const stepNames = ['Ingredientes', 'mod. preparos', 'Nutricionais', 'pessoais'];
    const [stepsData, setStepsData] = React.useState([
        { inputs: [], prep: [] }, // Etapa 0
        { inputs: [], prep: [] }, // Etapa 1
        { inputs: [], prep: [] }, // Etapa 2
        { inputs: [], prep: [] }, // Etapa 3
    ]);


    const [step, setStep] = React.useState(0); // Variável de estado para controlar o passo atual

    const nextStep = () => {
        setStep(step + 1); // Atualiza o valor do passo para avançar para o próximo
    };

    const handleBack = () => {
        setStep(step - 1); // Atualiza o valor do passo para voltar para o anterior
    };

    const AddIngre = () => {
        const newInputs = [...stepsData[step].inputs, ''];
        const newStepsData = [...stepsData];
        newStepsData[step].inputs = newInputs;
        setStepsData(newStepsData);
    };

    const handleInputsChange = (event, index) => {
        const newInputs = [...stepsData[step].inputs];
        newInputs[index] = event.target.value;
        const newStepsData = [...stepsData];
        newStepsData[step].inputs = newInputs;
        setStepsData(newStepsData);
    };

    const removeIngred = (index) => {
        const newInputs = [...stepsData[step].inputs];
        newInputs.splice(index, 1);
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
                        value={formData?.recipeTitle}
                        onChange={handleInputsChange}
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

                {stepsData[step].inputs.map((input, index) => (
                    <>
                        <Grid item xs={12} key={index} sx={{ display: 'flex', }}>
                            <TextField
                                label={`Etapa ${index + 1}`}
                                fullWidth
                                variant="filled"
                                type="text"
                                value={input}
                                onChange={(e) => handleInputsChange(e, index)}
                            />

                        </Grid>
                        <Grid item xs={12} key={index} sx={{ display: 'flex', }}>
                            <Button color="error" onClick={() => removeIngred(index)} variant='outlined' startIcon={<DeleteIcon />}>
                                Delete Ingrediente
                            </Button>
                        </Grid>
                    </>
                ))}
                <Grid item xs={12}>
                    <Button size='small' sx={{ mr: 2 }} onClick={AddIngre} variant='contained'>
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
                            variant="standard"
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


                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth
                        required
                        id="calories"
                        label="Calorias"
                        autoComplete="calories"
                        variant="standard"

                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                       fullWidth
                        required
                        id="carbs"
                        label="Carboidratos"

                        autoComplete="carboidratos"
                        variant="standard"

                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                       fullWidth
                        required
                        id="proteinas"
                        label="Proteínas"
                        autoComplete="proteinas"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                       fullWidth
                        required
                        id="fibras"
                        label="Fibras"
                        autoComplete="fibras"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                       fullWidth
                        required
                        id="sodio"
                        label="Sódio"
                        autoComplete="sodio"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                       fullWidth
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
                       fullWidth
                        required
                        id="gordurasSatur"
                        label="Gorduras saturadas"
                        autoComplete="gordurasSatur"
                        variant="standard"
                    />
                </Grid>
            </Grid>


            <Typography variant="h6" gutterBottom mt={3}>
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
                <Grid item xs={12} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Button onClick={nextStep} variant="contained">
                        Terminar a receita
                    </Button>
                </Grid>
            </Grid>

        </>
    )
}
