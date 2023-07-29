import { AvTimer, DataSaverOff, PieChartOutline } from "@mui/icons-material"
import { CardActions, Stack, Typography } from "@mui/material"
import * as Tag from './index.js'
import * as SG from '../../styles/index.js'
export const PreviaDetailsRecipe = ({
    recipe,
}) => {
    return (
        <>
            <SG.Title variant="body1">
                IMPORTANTES SOBRE A RECEITA
            </SG.Title>
            <CardActions
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 2,
                    gap: '2rem',
                    width: '95%',
                }}
            >
                {[
                    {
                        title: recipe?.cookTime,
                        desc: 'Preparo',
                        icon: <AvTimer />,
                    },
                    {
                        title: recipe?.calories,
                        desc: 'Rendimento',
                        icon: <PieChartOutline />,
                    },
                    {
                        title: recipe?.servingSize,
                        desc: 'Gra. por Porção',
                        icon: <DataSaverOff />,
                    },
                ].map((item) => {
                    return (
                        <>
                            <Tag.DetailsImportant>
                                {item.icon}
                                <Stack>
                                    <Typography variant="body1">
                                        {item.desc}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>
                                </Stack>
                            </Tag.DetailsImportant>
                        </>
                    )
                })}
            </CardActions>
        </>
    )
}