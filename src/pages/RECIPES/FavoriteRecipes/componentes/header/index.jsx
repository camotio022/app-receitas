import { MoreVert } from "@mui/icons-material"
import { Avatar, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"


export const HeaderFavoriteCard = ({
    favorite
}) => {
    return (
        <>
            <CardHeader
                avatar={
                    <Avatar
                        src={favorite?.recipeImage}
                        sx={{ bgcolor: "#212121", textTransform: 'uppercase' }}
                        aria-label="recipe"
                    >
                        {favorite?.recipeTitle?.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={favorite?.name}
                subheader={favorite?.creationDate}
            />
            <CardMedia
                className="imageCardMedia"
                component="img"
                image={
                    !favorite?.recipeImage ?
                        "https://saturdaykitchenrecipes.com/wp-content/uploads/2020/04/default-recipe-image.gif" :
                        favorite?.recipeImage}
                alt={favorite?.recipeDescription}
            />
            <CardContent sx={{ color: 'white' }}>
                <Typography variant="body2">
                    {favorite?.recipeDescription}
                </Typography>
            </CardContent>


        </>
    )
}