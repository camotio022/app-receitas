import { CreateNewFolder, Favorite, ThumbUp } from "@mui/icons-material"
import { CardCover } from "@mui/joy"
import { Avatar, Box, Card, CardMedia, IconButton, Link, Typography } from "@mui/material"
import *as Tag from "../../index.js"


export const CardInImage = ({
    recipeImage,
    recipeTitle,
    id,
}) => {
    return (

            <Card
                sx={{
                    height: 250,
                    width: 250,
                    bgcolor: 'initial',
                    boxShadow: 'none',
                    '--Card-padding': '0px',
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    <Avatar
                        src={recipeImage}
                        sx={{
                            border: '3px solid green',
                            position: 'absolute',
                            mt: 1,
                            ml: 1,
                        }}
                    ></Avatar>
                    <CardMedia
                        component="img"
                        sx={{height:"10rem"}}
                        src={
                            recipeImage
                                ? recipeImage
                                : 'https://cdn.panelinha.com.br/post/1416189600000-Medidores-os-curingas-de-qualquer-cozinha.jpg'
                        }
                        alt={recipeTitle}
                    />
                    <CardCover
                        className="gradient-cover"
                        sx={{
                            '&:hover, &:focus-within': {
                                opacity: 1,
                            },
                            opacity: 0,
                            transition: '0.1s ease-in',
                            background:
                                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    alignSelf: 'flex-end',
                                    color: 'white',
                                }}
                            >
                                <Typography
                                    level="h2"
                                    noWrap
                                    sx={{ fontSize: 'lg' }}
                                >
                                    <Link
                                        href={`/detailsRecipes/${id}`}
                                        underline="none"
                                        sx={{
                                            color: '#fff',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            display: 'block',
                                        }}
                                    >
                                        {recipeTitle?.split(' ')[0]}
                                    </Link>
                                </Typography>
                                <IconButton
                                    size="sm"
                                    color="white"
                                    sx={{ ml: 'auto' }}
                                >
                                    <CreateNewFolder sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton size="sm" color="white">
                                    <ThumbUp sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton size="sm" color="white">
                                    <Favorite sx={{ color: 'white' }} />
                                    <Typography sx={{ color: 'white' }}>
                                        10.7K
                                    </Typography>
                                </IconButton>
                            </Box>
                        </Box>
                    </CardCover>
                </Box>
            </Card>

    )
}
