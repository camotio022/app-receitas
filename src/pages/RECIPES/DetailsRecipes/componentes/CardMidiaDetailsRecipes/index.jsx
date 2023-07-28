import { Add } from '@mui/icons-material'
import * as Tag from './styles.js'
import { Button, Stack, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'

export const CardMidiaDetailRecipe = ({
    recipe
}) => {
    return (
        <>
            <Tag.Midias
                component="img"
                alt="green iguana"
                height="140"
                image={recipe?.recipeImage}
            />
            <Stack
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    mt: '-1.5rem',
                    height: '3rem',
                    width: '100%',
                    padding: '0 1.4rem 0 0',
                }}
            >
                <Button
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        bgcolor: orange[900],
                    }}
                    variant={'contained'}
                    startIcon={<Add />}
                >
                    Seguir o user
                </Button>
            </Stack>
            <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
            }} >
                <Typography gutterBottom variant="h5" component="div">
                    {recipe?.recipeTitle}
                </Typography>

                <Stack sx={{
                    width: '90%',
                }} gutterBottom variant="body2" color="text.secondary">
                    {recipe?.recipeDescription}
                </Stack>
            </Stack>
        </>
    )
}