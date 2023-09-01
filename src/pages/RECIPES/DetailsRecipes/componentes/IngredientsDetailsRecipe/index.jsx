import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material"
import { useContext, useState } from "react"
import * as SG from '../../styles/index.js'
import { grey } from "@mui/material/colors"
import { Add } from "@mui/icons-material"
import { EditMore } from "../EditText/index.jsx"
import { AuthContext } from "../../../../../contexts/AuthContext.jsx"
import { AddIngredient } from "../addIngredient/index.jsx"




export const IngredientDetailsRecipe = ({
    recipe, id, condicional
}) => {
    const { user } = useContext(AuthContext)
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
                    borderLeft: "4px solid orange",
                    textAlign: 'left',
                    width: '90%',
                    mb: "5rem"
                }}
            >
                <>
                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        textAlign: 'cente',
                        height: "auto"
                    }}>
                        {recipe?.ingredients?.length > 0 &&
                            recipe?.ingredients
                                .map((ingredient, index) => {
                                    return (
                                        <Grid
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
                                                            paddingLeft: "1rem",
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
                                            {
                                                <EditMore
                                                    id={id}
                                                    index={index}
                                                    value={ingredient}
                                                    itemType={'ingredient'}
                                                    condicional={condicional}
                                                />}
                                        </Grid>
                                    )
                                }
                                )
                        }
                        {condicional &&
                            <AddIngredient
                                condicional={condicional}
                                recipe={recipe}
                                id={id}
                            />}
                    </Grid>
                </>
            </Stack>
        </>
    )
}