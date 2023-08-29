import Typography from '@mui/material/Typography'
import {
    CardContent,
    Collapse,
    Grid,
    useMediaQuery,
} from '@mui/material'
import *as Tag from '../../index.js'
import { useTheme } from '@emotion/react';
import { HeaderFavoriteCard } from '../header/index.jsx';
import { BodyFavoriteRecipeCard } from '../body/index.jsx';
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
                        height:'auto',
                        backgroundImage: 
                        `url(${!favorite?.recipeImage ? 
                            "https://cdn.panelinha.com.br/post/1416189600000-Medidores-os-curingas-de-qualquer-cozinha.jpg" : 
                        favorite?.recipeImage})`,
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