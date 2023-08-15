import { Stack, Typography } from "@mui/material"
import *as Tag from "./index.js"
import { orange } from "@mui/material/colors"



export const StepsDetailsRecipe = ({
    recipe
}) => {
    var Title = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '8rem',
        width: 'auto',
        color: orange[900],
        fontWeight: '900',
        margin: '2rem 0 1rem 0',
    }
    return (
        <>
            <Typography sx={Title} padding={1}>
                Como preparar {recipe?.recipeTitle}
            </Typography>
            <Tag.StepsContain>
                <>
                    <Stack width={'90%'}>
                        {recipe?.modPreps?.length > 0 &&
                            recipe?.modPreps.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{item}</li>
                                    </ul>
                                )
                            })}
                    </Stack>
                </>
            </Tag.StepsContain>
        </>
    )
}