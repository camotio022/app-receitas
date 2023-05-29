import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './recipesIngredients';
import PaymentForm from './recipesSteps';
import Review from './recipesNutricional';
import UserInfos from './UserInfos';
import { Logo } from '../../componentes/LOGO';
import { Grid } from '@mui/joy';
import { useParams } from 'react-router-dom';
import './index.css'




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const CreateRecipes = ({ }) => {
    const steps = ['Ingredientes', 'mod. preparos', 'Nutricionais', 'pessoais'];
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, recipeImage: file });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Object.values(formData).find(i => {
            if(i != null) {
                alert('O formulário não está passando')
                return false
            }
            alert('O formulárioestá passando')
        })
        console.log(formData);
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm onChange={handleInputChange} value={formData} />;
            case 1:
                return <PaymentForm onChange={handleInputChange} />;
            case 2:
                return <Review onChange={handleInputChange} />;
            case 3:
                return <UserInfos onChange={handleInputChange} />;
            default:
                throw new Error('Unknown step');
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const { id } = useParams();
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
                elevation={0}
                sx={{
                    position: 'fixed',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Toolbar sx={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'

                    }
                }>
                    <Logo />
                    <Typography variant="h6" color="inherit" noWrap>
                        User fulano criando uma receita
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 9 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        {activeStep === steps.length ? "Estados da sua receita" :
                            "Criação de receitas"}
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
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
                                    <Link href={`/detailsRecipes/:${id}`}>{"Ver a sua receita"}</Link>
                                </Button>
                                <Button size="small" sx={{ mt: 4 }} variant='outlined'><Link href='/'>{"Voltar para home"}</Link></Button>
                            </Grid>
                        </>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'submeter' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
}