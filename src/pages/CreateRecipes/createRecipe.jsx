import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import {
    KeyboardArrowUp as KeyboardArrowUpIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Logo } from '../../componentes/LOGO'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import './index.css'
import { RecipeForm } from './RecipeForm'
import { Fab, Fade } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export const CreateRecipes = ({ }) => {
    const [scrollHeight, setScrollHeight] = useState(0)
    const [formData, setFormData] = useState({
        recipeTitle: '',
        recipeDescription: '',
        prepTime: '',
        cookTime: '',
        servingSize: '',
        recipeCategory: '',
        recipeDifficulty: '',
        recipeImage: null,
        cookingTips: '',
        calories: '',
        carbs: '',
        protein: '',
        fat: '',
        sod: '',
        gord: '',
        author: '',
        creationDate: '',
        name: '',
        email: '',
        country: '',
    })
    const handleInputChangesCreateRecipes = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        setFormData({ ...formData, recipeImage: file })
    }

    const handleSubmit = (event) => {
        const val = Object.values(formData).join(", ");
        alert(val);
        console.log(formData);
    }

    useEffect(() => {
        const handleScroll = () => {
            const height = window.scrollY || 0
            setScrollHeight(height)
        }
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll)

            // Limpe o evento de scroll quando o componente for desmontado
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (

        <>
            <Fade in={scrollHeight}>
                <Box
                    onClick={scrollToTop}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                >
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </Box>
            </Fade>
            <Container
                component="main"
                maxWidth="sm"
                sx={{
                    mb: 4,
                    mt: 15,
                    display: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <React.Fragment>
                        <RecipeForm
                            formData={formData}
                            setFormData={setFormData}
                            handleInputChangesCreateRecipes={handleInputChangesCreateRecipes}
                            handleImageChange={handleImageChange}
                            handleSubmit={handleSubmit}
                        />
                    </React.Fragment>
                </Paper>
            </Container>
        </>

    )
}
