import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api_recipes } from "../../../api/recipes/recipes"
import { CardRecipe } from "../../../componentes/CARDRECIPE/index.jsx"
import { Container } from "@mui/material"
import *as C from './index.js'
export const OpenNotifRecipe = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const getUser = async () => {
        try {
            const user = await api_recipes.recipe.get(id)
            setData(user)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getUser()
    }, [id])
    if (data === null) {
        return (
            <C.MyContainer>
                NOTIFICAÇÃO ESTÁ SENDO REDIRECIONADA
            </C.MyContainer>
        )
    }
    return (
        <>
            <C.MyContainer>
                <CardRecipe
                    recipeTitleHoverHeader={data?.recipeTitle}
                    detailsRecipes={id}
                    recipeImage={data?.recipeImage}
                    recipeTitle={data?.recipeTitle}
                    AuthorName={data?.name}
                    commentsCounter={data?.commentsCounter}
                    ranking={data?.ranking}
                />
            </C.MyContainer >
        </>
    )
}