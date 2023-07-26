import { Box, Link, Rating, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import * as Tag from './index.js'
import { Favorite, Forum } from '@mui/icons-material'
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { useContext } from 'react'
export const CardRecipe = ({
    recipeTitleHoverHeader,
    recipeImage,
    detailsRecipes,
    recipeTitle,
    author,
    starsLikedCounter,
    fevoritingRecipe,
    displayNameAuhtor,
    AuthorName,
    commentsCounter,
    ranking
}) => {
    const matches = useMediaQuery('(min-width:700px)')
    const { user } = useContext(AuthContext)


    return (
        <Tag.Card>
            <Stack width={'100%'}>
                <Tooltip
                    sx={{ cursor: 'pointer' }}
                    title={`Ir para os detalhes  ${recipeTitleHoverHeader}`}
                    followCursor
                >
                    <img
                        className="img"
                        src={recipeImage}
                        alt=""
                    />
                </Tooltip>
                <Stack padding={2} spacing={2}>
                    <Typography color={'gray'} variant="h6" sx={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        <Link
                            href={`/detailsRecipes/${detailsRecipes}`}
                            color="inherit"
                            underline="hover"
                        >
                            {recipeTitle}
                        </Link>
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent={'space-between'}
                    >
                        <Stack direction="row" spacing={2}>
                            {
                                <Box color={'#ffa505'}>
                                    <Rating
                                        name={
                                            matches ? 'size-medium' : 'size-large'
                                        }
                                        disabled={author === user.uid}
                                        defaultValue={1}
                                    />
                                </Box>
                            }
                            <Typography variant="p">
                                {starsLikedCounter}
                            </Typography>
                        </Stack>

                        <Tag.FavoritingRecipe
                            onClick={fevoritingRecipe}
                            title={`Favoritar está receita ${recipeTitle}`}
                            followCursor
                        >
                            <Favorite />
                        </Tag.FavoritingRecipe>
                    </Stack>
                    <Stack
                        spacing={1}
                        borderTop={'0.1rem solid #f5f5f5f5'}
                        direction="row"
                        width={'100%'}
                        justifyContent="space-between"
                    >
                        <Tag.Author>
                            <Tag.AuthorImage>
                                <img
                                    style={{
                                        borderRadius: '10px',
                                    }}
                                    src={
                                        author === user.uid
                                            ? user.photoURL
                                            : recipeImage
                                    }
                                    alt=""
                                />
                            </Tag.AuthorImage>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    height: '100%',
                                    fontSize: '13px',
                                    color: '#565656',
                                }}
                                id="info"
                            >
                                {author === user.uid ? (
                                    <>
                                        <Typography variant="subtitle1">
                                            {displayNameAuhtor}
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="subtitle1">
                                            {AuthorName}
                                        </Typography>
                                    </>
                                )}

                                <Stack direction="row" spacing={2}>
                                    <Stack direction="row" gap={1}>
                                        <Favorite
                                            fontSize={matches ? 'small' : 'medium'}
                                        />
                                        233
                                    </Stack>
                                    <Stack spacing={2} gap={1} direction="row">
                                        <Forum
                                            fontSize={matches ? 'small' : 'medium'}
                                        />
                                        {commentsCounter}
                                    </Stack>
                                </Stack>
                            </Box>
                        </Tag.Author>
                        <Tag.ReviewScore
                            variant={matches ? 'subtitle1' : 'h4'}
                        >
                            {ranking}
                        </Tag.ReviewScore>
                    </Stack>
                </Stack>
            </Stack>
        </Tag.Card>
    )
}