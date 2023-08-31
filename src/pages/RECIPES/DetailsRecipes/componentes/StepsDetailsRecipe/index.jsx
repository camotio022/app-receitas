import { Grid, Stack, Typography } from "@mui/material"
import *as Tag from "./index.js"
import { orange } from "@mui/material/colors"
import { ArrowRight } from "@mui/icons-material"



export const StepsDetailsRecipe = ({
    recipe
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
                <>
                    <Grid container spacing={2}>
                        {recipe?.modPreps?.length > 0 &&
                            recipe?.modPreps.map((item, index) => {
                                return (
                                    <Grid
                                        sx={{ borderLeft: "4px solid orange" }}
                                        item
                                        key={index}
                                        xs={12}
                                    >
                                        <Stack
                                            sx={{
                                                bgcolor: "orange",
                                                width: '5rem',
                                                textAlign: "center",
                                                ml: "-1rem",
                                                fontWeight: 'bold',
                                                color: "white",
                                                fontFamily: 'sua-fonte-chamativa',
                                            }}>Etapa {index + 1}
                                        </Stack>
                                        <Stack>{item}</Stack>
                                    </Grid>
                                )
                            })}
                    </Grid>
                </>
            </Tag.StepsContain>
        </>
    )
}