import { Grid, Stack, Typography } from "@mui/material"
import *as Tag from "./index.js"
import { orange } from "@mui/material/colors"
import { ArrowRight } from "@mui/icons-material"
import { AddIngredient } from "../addIngredient/index.jsx"



export const StepsDetailsRecipe = ({
    recipe, condicional, id
}) => {
    var Title = {
        width:"90%",
        color: orange[900],
        fontWeight: 'bold',
        fontFamily: 'sua-fonte-chamativa',
        textTransform:"uppercase",
        margin: '2rem 0 1rem 0',
    }
    return (
        <>
            <Typography sx={Title} padding={1}>
                Como preparar {recipe?.recipeTitle}
            </Typography>
            <Tag.StepsContain>
                <Stack sx={{
                    borderLeft: "4px solid orange",
                    textAlign: 'left',
                    width: '90%',
                    mb: "5rem"
                }}>
                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        height: "auto"
                    }}>
                        {recipe?.modPreps?.length > 0 &&
                            recipe?.modPreps.map((item, index) => {
                                return (
                                    <Grid
                                        
                                        item
                                        key={index}
                                        xs={12}
                                    >
                                        <Stack
                                            sx={{
                                                bgcolor: "orange",
                                                width: '5rem',
                                                textAlign: "center",
                                                fontWeight: 'bold',
                                                color: "white",
                                                fontFamily: 'sua-fonte-chamativa',
                                            }}>Etapa {index + 1}
                                        </Stack>
                                        <Stack sx={{padding:"10px"}}>{item}</Stack>
                                    </Grid>
                                )
                            })}
                            {condicional &&
                            <AddIngredient
                                condicional={condicional}
                                recipe={recipe}
                                id={id}
                            />}
                    </Grid>
                </Stack>
            </Tag.StepsContain>
        </>
    )
}