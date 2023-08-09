import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
    Delete as DeleteIcon,
    Details as DetailsIcon,
} from '@mui/icons-material'
import {
    CardActions,
    IconButton,
    Link,
    Tooltip,
} from '@mui/material'
import styled from '@emotion/styled';
export const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const BodyFavoriteRecipeCard = ({
    deleteFavorite,
    handleExpandClick,
    favorite,
    expanded,
    index
}) => {
    return (
        <>

            <CardActions disableSpacing>
                <Tooltip title={`Deletar a receita de "${favorite?.recipeTitle}" dos seus favoritos`}>
                    <IconButton
                        onClick={() => deleteFavorite(favorite?.id, user?.uid)}
                        size="small"
                        sx={{ ml: 2, color: "#374957" }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Link href={`detailsRecipes/${favorite?.id}`}>
                    <Tooltip title={`"Detalhar a receita de "${favorite?.id}"`}>
                        <IconButton
                            size="small"
                            sx={{ ml: 2, color: "#374957" }}
                        >
                            <DetailsIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
                <ExpandMore
                    expand={expanded[index]}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
        </>
    )
}