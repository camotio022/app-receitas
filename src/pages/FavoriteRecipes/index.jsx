import Typography from '@mui/material/Typography';
import { orange, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, IconButton, styled } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
import * as Tag from './index.js'
import { api } from '../../api/index.js';
import { AuthContext } from '../../contexts/AuthContext.jsx';

export const FavoriteRecipes = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const { user } = useContext(AuthContext)
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
        const fetchFavoriteRecipes = async () => {
            const userId = user.uid;

            if (userId) {
                try {
                    const recipes = await api.favoriteRecipes.get(userId);
                    setFavoriteRecipes(recipes);
                } catch (error) {
                    console.error("Erro ao buscar as receitas favoritas:", error);
                    setFavoriteRecipes([]); // Define uma lista vazia em caso de erro
                }
            } else {
                console.log("Erro ao buscar as receitas favoritas:", userId)
                setFavoriteRecipes([]); // Define uma lista vazia se o ID do usuário não estiver disponível
            }
        };
        fetchFavoriteRecipes();
    }, [user]);

    return (
        <Tag.Contain>
            {favoriteRecipes.map((favorite, index) => {
                return (
                    <Card key={index} sx={{
                        maxWidth: 345,
                        maxHeight: 'auto',
                        backgroundImage: `url(${favorite?.recipeImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',


                    }}>
                        <Box sx={{
                            backgroundColor: 'rgba(225, 0, 0, 0.2)',
                            backdropFilter: 'blur(3px)',
                            transition: '.3s',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                backdropFilter: 'blur(0)',
                                transition: '.3s',
                                // '.imageCardMedia': {
                                //     display: 'flex',
                                // }
                            },

                        }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={favorite?.recipeImage} sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={favorite?.name}
                                subheader={favorite?.creationDate}
                            />
                            <CardMedia
                                sx={{
                                    display: 'none',
                                    transition: '.3s',
                                }}
                                className='imageCardMedia'
                                component="img"
                                height="194"
                                image={favorite?.recipeImage}
                                alt="Paella dish"
                            />
                            <CardContent sx={{ color: 'white', }}>
                                <Typography variant="body2">
                                    {favorite?.recipeDescription}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Box>
                    </Card>
                )
            })}
        </Tag.Contain>
    );
} 