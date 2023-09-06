import Typography from '@mui/material/Typography'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
    Box,
    Grid,
    Stack,
    useMediaQuery,
} from '@mui/material'
import *as Tag from '../../index.js'
import { useTheme } from '@emotion/react';
import { useState } from 'react';
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
export const CardFavoriteRecipe = ({
    index,
    favorite,
    deleteFavorite,
    user,
}) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const ingredients = favorite?.ingredients || []
    const modPreps = favorite?.modPreps || []
    const likesCounter = favorite?.likesCounter || []
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <Card onClick={() => !isSmallScreen && setExpanded(!expanded)}
            sx={isSmallScreen ? { width: 345 } : {
                width: 250,
                height: expanded ? 250 : "auto"
            }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}
                        src={favorite?.recipeImage}
                        aria-label="recipe"
                    >
                        {favorite?.recipeTitle?.charAt(0)}
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
                sx={isSmallScreen && { height: "10r" }}
                component="img"
                height="194"
                image={
                    !favorite?.recipeImage ?
                        "https://saturdaykitchenrecipes.com/wp-content/uploads/2020/04/default-recipe-image.gif" :
                        favorite?.recipeImage}
                alt={favorite?.recipeDescription}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {favorite?.recipeDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {likesCounter.length}
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: likesCounter.includes(user.uid) && "red" }} />
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
                    <Typography paragraph>INGREDIENTES:</Typography>
                    {ingredients.map((ing, index) => {
                        return (
                            <Typography variant="body2" color="text.secondary">
                                <ul>
                                    <li>{ing}</li>
                                </ul>
                            </Typography>
                        )
                    })}
                    <Typography paragraph>MODOS DE PREPARO:</Typography>
                    {modPreps.map((prep, index) => {
                        return (
                            <Typography variant="body2" color="text.secondary">
                                <ul>
                                    <li>{prep}</li>
                                </ul>
                            </Typography>
                        )
                    })}
                </CardContent>
            </Collapse>
        </Card>
    );
}