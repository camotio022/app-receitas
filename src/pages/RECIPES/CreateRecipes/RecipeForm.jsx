import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import * as Tag from './styles/index.js'
import { MyTypography } from '../../../componentes/TYPOGRAPHY'
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
  
    return (
        <>
            <MyTypography title={"Criação de receitas"} variant="h6" />
            <HeaderCreateRecipes
                formData={formData}
                setFormData={setFormData}
                handleInputChangesCreateRecipes={handleInputChangesCreateRecipes}
            />
            <MyTypography title={"Etapas de preparo"} variant="h6" gutterBottom mt={3} mb={1} />
            <Grid container spacing={3}>
                <StepsCreateRecipes
                    formData={formData}
                    setFormData={setFormData}
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
