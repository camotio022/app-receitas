import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import * as Tag from './styles/index.js'
import { MyTypography } from '../../componentes/TYPOGRAPHY'
import { HeaderCreateRecipes } from './componentes/createRecipeHeader/index.jsx'
import { StepsCreateRecipes } from './componentes/createRecipesAddSteps/index.jsx'
import { CategoryCreateRecipes } from './componentes/createRecipesCategory/index.jsx'
import { MoreFieldsCreateRecipes } from './componentes/createRecipesMoreFields/index.jsx'
import { UserInfoCreateRecipes } from './componentes/createRecipeUserInfo/index.jsx'
export const RecipeForm = ({
    setFormData,
    formData,
    handleInputChangesCreateRecipes,
    handleSubmit,
    handleImageChange,
}) => {
    const handleInputIngre = (e, index) => {
        const novosValores = [...formData.ingredients]
        novosValores[index] = e.target.value
        setFormData({ ...formData, ingredients: novosValores })
    }
    const adicionarIngre = () => {
        setFormData({ ...formData, ingredients: [...formData.ingredients, ''] })
    }
    const removerIngre = (index) => {
        const novosValores = [...formData.ingredients]
        novosValores.splice(index, 1)
        setFormData({ ...formData, ingredients: novosValores })
    }
    const handleInputModPreps = (e, index) => {
        const novosValores = [...formData.modPreps]
        novosValores[index] = e.target.value
        setFormData({ ...formData, modPreps: novosValores })
    }
    const adicionarModPreps = () => {
        setFormData({ ...formData, modPreps: [...formData.modPreps, ''] })
    }
    const removerModPreps = (index) => {
        const novosValores = [...formData?.modPreps]
        novosValores.splice(index, 1)
        setFormData({ ...formData, modPreps: novosValores })
    }

    
    return (
        <>
            <MyTypography title={"Criação de receiatas"} variant="h6" />
            <HeaderCreateRecipes
                handleInputIngre={handleInputIngre}
                adicionarIngre={adicionarIngre}
                removerIngre={removerIngre}
                handleInputChangesCreateRecipes={handleInputChangesCreateRecipes}
            />
            <MyTypography title={"Etapas de preparo"} variant="h6" gutterBottom mt={3} mb={1} />
            <Grid container spacing={3}>
                <StepsCreateRecipes
                    handleInputModPreps={handleInputModPreps}
                    adicionarModPreps={adicionarModPreps}
                    removerModPreps={removerModPreps}
                />
            </Grid>
            <MyTypography title={"Categorias e Nutrição"} variant="h6" gutterBottom mt={3} />
            <Grid container spacing={3}>
                <CategoryCreateRecipes
                    handleInputChangesCreateRecipes={handleInputChangesCreateRecipes}
                    formData={formData}
                />
                <MoreFieldsCreateRecipes
                    formData={formData}
                    handleImageChange={handleImageChange}
                    handleInputChangesCreateRecipes={handleInputChangesCreateRecipes}
                />
            </Grid>
            <Typography title={"Dados do criador"} variant="h6" gutterBottom mt={3} />
            <Grid container spacing={3}>
                <UserInfoCreateRecipes
                    handleInputChangesCreateRecipes={handleInputChangesCreateRecipes}
                    formData={formData}
                />
                <Tag.StepFinish
                    item
                    xs={12}
                >
                    <Button onClick={handleSubmit} variant="contained">
                        Terminar a receita
                    </Button>
                </Tag.StepFinish>
            </Grid>
        </>
    )
}
