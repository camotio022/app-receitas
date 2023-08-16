import {
    Card,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import * as Tag from './styles/index.js'
import React, { useEffect, useState } from 'react'
import { CardMidiaDetailRecipe } from './componentes/CardMidiaDetailsRecipes/index.jsx'
import { PreviaDetailsRecipe } from './componentes/previaDetailsRecipe/index.jsx'
import { NutricionaisDetailsRecipe } from './componentes/nutriDetailsRecipe/index.jsx'
import { IngredientDetailsRecipe } from './componentes/IngredientsDetailsRecipe/index.jsx'
import { StepsDetailsRecipe } from './componentes/StepsDetailsRecipe/index.jsx'
import { LoadingDetailsRecipe } from './componentes/loadingDetailsRecipe/index.jsx'
import { api_recipes } from '../../../api/recipes/recipes.js'
import { api_more } from '../../../api/index.js'
export const DetailsRecipes = () => {
    const { id } = useParams()
    const [recipe, setrecipe] = useState(null)
    const [ingredientes, setingredientes] = useState([])
    const [modopreparos, setmodopreparos] = useState([])
    useEffect(() => {
        const obterDetalhesrecipe = async () => {
            const doc = await api_recipes.recipe.get(id)
            const docIngredientes = await api_more.ingredientes.get(id)
            const getModosPre = await api_more.modopreparo.get(id)
            if (doc) {
                setrecipe(doc)
                docIngredientes?.map((i) => {
                    return setingredientes(i?.description)
                })
                getModosPre?.map((i) => {
                    return setmodopreparos(i?.description || i?.descripion)
                })
            }
        }
        obterDetalhesrecipe()
    }, [id])
    if (!recipe) {
        return (
            <>
                <LoadingDetailsRecipe />
            </>
        )
    }
    return (
        <>


            <Tag.Container>
                <Tag.CardMediaContain>
                    <CardMidiaDetailRecipe
                        recipe={recipe}
                    />
                    <PreviaDetailsRecipe
                        recipe={recipe}
                    />
                    <NutricionaisDetailsRecipe recipe={recipe} />
                    <IngredientDetailsRecipe recipe={recipe} />
                    <StepsDetailsRecipe recipe={recipe} />
                    <Card component="ul"
                        sx={{
                            flexGrow: 1,
                            minWidth: "90%",
                            height: '20rem',
                            mt: '15rem',
                        }}
                    >
                    </Card>
                </Tag.CardMediaContain>
            </Tag.Container>


        </>
    )
}
