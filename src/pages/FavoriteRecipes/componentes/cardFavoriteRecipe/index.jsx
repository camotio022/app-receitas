import Typography from '@mui/material/Typography'
import {
    CardContent,
    Collapse,
    Grid,
    useMediaQuery,
} from '@mui/material'
import *as Tag from '../../index.js'
import { useTheme } from '@emotion/react';
import { HeaderFavoriteCard } from './componentes/header/index.jsx';
import { BodyFavoriteRecipeCard } from './componentes/body/index.jsx';
export const CardFavoriteRecipe = ({
    index,
    favorite,
    expanded,
    deleteFavorite,
    handleExpandClick
}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Tag.FavoriteCard
                    key={index}
                    sx={{
                        width: isSmallScreen ? '100%' : 345,
                        backgroundImage: `url(${!favorite?.recipeImage ? "https://www.biotecdermo.com.br/wp-content/uploads/2016/10/sem-imagem-10.jpg" : favorite?.recipeImage})`,
                    }}
                >
                    <Tag.FavoriteBox>
                        <HeaderFavoriteCard favorite={favorite} />
                        <BodyFavoriteRecipeCard
                            deleteFavorite={deleteFavorite}
                            handleExpandClick={handleExpandClick}
                            favorite={favorite}
                            expanded={expanded}
                            index={index}
                        />
                        <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Descripstion</Typography>
                                <Typography paragraph>{favorite?.description}</Typography>
                            </CardContent>
                        </Collapse>
                    </Tag.FavoriteBox>
                </Tag.FavoriteCard>
            </Grid>
        </>
    )
}