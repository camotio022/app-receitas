import { Typography, useMediaQuery } from '@mui/material'
import *as Tag from './index.js'
import { grey } from '@mui/material/colors'
import * as SG from '../../styles/index.js'


export const NutricionaisDetailsRecipe = ({
    recipe
}) => {
    const matches = useMediaQuery('(min-width:800px)')
    return (
        <>
            <SG.Title padding={1}>
                Informações Nutricionais de {recipe?.recipeTitle}
            </SG.Title>
            <Tag.NutInfo>
                {[
                    {
                        name: 'Calorias',
                        val: `${recipe?.calories} kcal`,
                    },
                    {
                        name: 'Proteínas',
                        val: `${recipe?.protein} g`,
                    },
                    {
                        name: 'Gorduras Totais',
                        val: `${recipe?.gord} g`,
                    },
                    {
                        name: 'Gord. Saturadas',
                        val: `${(10 / 100) * recipe?.gord} g`,
                    },
                    {
                        name: 'Gord. Trans',
                        val: `${(recipe?.servingSize / 100) * recipe?.gord} g`,
                    },
                    {
                        name: 'Carboidratos',
                        val: `${recipe?.carbs} g`,
                    },
                    {
                        name: 'Fibras',
                        val: `${recipe?.fat} g`,
                    },
                    {
                        name: 'Sódio',
                        val: `${recipe?.sod} mg`,
                    },
                ].map((nut) => {
                    return (
                        <Tag.Info
                            sx={
                                matches && {
                                    width: '20%',
                                    height: '5rem',
                                }
                            }
                        >
                            <Typography
                                sx={{
                                    color: grey[600],
                                    fontSize: '14px',
                                }}
                                variant="p"
                            >
                                {nut?.name}
                            </Typography>
                            <Typography variant="body3">
                                {nut?.val}
                            </Typography>
                        </Tag.Info>
                    )
                })}
            </Tag.NutInfo>
        </>
    )
}