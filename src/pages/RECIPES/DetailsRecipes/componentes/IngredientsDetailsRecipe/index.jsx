import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material"
import { useState } from "react"
import * as SG from '../../styles/index.js'
import { grey } from "@mui/material/colors"




export const IngredientDetailsRecipe = ({
    recipe
}) => {

    const [checkedItems, setCheckedItems] = useState(Array(5).fill(false))
    const handleChange = (index) => {
        const newCheckedItems = [...checkedItems]
        newCheckedItems[index] = !newCheckedItems[index]
        setCheckedItems(newCheckedItems)
    }
    return (
        <>
            <SG.Title padding={1}>
                INGREDIENTES DESTA RECEITA
            </SG.Title>
            <Stack
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    textAlign: 'left',
                    width: '90%',
                    mb: "5rem"
                }}
            >
                <>
                    <Grid container spacing={2}>
                        {recipe?.ingredients?.length > 0 &&
                            recipe?.ingredients
                                .map((ingredient, index) => {
                                    return (
                                        <Grid
                                            sx={{ borderLeft: "4px solid orange" }}
                                            item
                                            key={index}
                                            xs={12}
                                        >
                                            <Stack
                                                sx={{
                                                    bgcolor: checkedItems[index] ? "gray" : "orange",
                                                    width: '8rem',
                                                    transition: '.9s',
                                                    height: 'auto',
                                                    textAlign: "center",
                                                    ml: "-1rem",
                                                    fontWeight: 'bold',
                                                    color: "white",
                                                    fontFamily: 'sua-fonte-chamativa',
                                                }}>
                                                {checkedItems[index] ?
                                                    `ingrediente ${index + 1} marcado` :
                                                    `ingrediente ${index + 1}`}
                                            </Stack>
                                            <FormControlLabel
                                                key={index}
                                                sx={
                                                    checkedItems[index]
                                                        ? {
                                                            textDecoration:
                                                                'line-through',
                                                            paddingLeft: 0,
                                                            color: grey[600],
                                                            transition: '.3s',
                                                            height: 'auto',
                                                        }
                                                        : {
                                                            textDecoration:
                                                                'none',
                                                            paddingLeft: '2rem',
                                                            transition: '.3s',
                                                            height: 'auto',
                                                        }
                                                }
                                                control={
                                                    <Checkbox
                                                        checked={
                                                            checkedItems[index]
                                                        }
                                                        onChange={() =>
                                                            handleChange(index)
                                                        }
                                                    />
                                                }
                                                label={ingredient || ''}
                                            />
                                        </Grid>
                                    )
                                }
                                )
                        }
                    </Grid>
                </>
            </Stack>
        </>
    )
}