import { Checkbox, FormControlLabel, Stack } from "@mui/material"
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
                    bgcolor: '',
                }}
            >
                <>
                    {recipe?.ingredients
                        .length > 0 &&
                        recipe?.ingredients
                            .map((ingredient, index) => {
                                return (
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
                                )
                            }
                            )
                    }
                </>
            </Stack>
        </>
    )
}