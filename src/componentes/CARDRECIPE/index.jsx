import { Avatar, Box, Link, Rating, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import * as Tag from './index.js'
import { Favorite, Forum } from '@mui/icons-material'
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { useContext } from 'react'
export const CardRecipe = ({
    recipeTitleHoverHeader,
    recipeImage,
    recipeTitle,
    author,
    starsLikedCounter,
    fevoritingRecipe,
    displayNameAuhtor,
    AuthorName,
    commentsCounter,
    ranking,
    id,
    likesCounter
}) => {
    const matches = useMediaQuery('(min-width:700px)')
    const { user } = useContext(AuthContext)
    const comment = () => {
        alert('Deseja comentar essa receita?')
    }
    return (
        <Tag.Card key={id} onDoubleClick={() => comment(user.uid)}>
            <Stack width={'100%'}>
                <Tooltip
                    sx={{ cursor: 'pointer' }}
                    title={`Dê dois clicks para comentar está receita  ${recipeTitle}`}
                    followCursor
                >
                    <img
                        style={{ height: '10rem' }}
                        className="img"
                        src={recipeImage ? recipeImage : 'https://cdn.panelinha.com.br/post/1416189600000-Medidores-os-curingas-de-qualquer-cozinha.jpg'}
                        alt={`receita de ${recipeTitle}`}
                    />
                </Tooltip>
                <Stack padding={2} spacing={2}>
                    <Tooltip
                        sx={{ cursor: 'pointer' }}
                        title={`Ir para os detalhes  ${recipeTitleHoverHeader}`}
                        followCursor
                    >
                        <Typography color={'gray'} variant="h6" sx={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            fontSize: '100%'
                        }}>
                            <Link
                                href={`/detailsRecipes/${id}`}
                                color="inherit"
                                underline="hover"
                            >
                                {recipeTitle}
                            </Link>
                        </Typography>
                    </Tooltip>
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
                            <Avatar
                                src={
                                    author === user.uid
                                        ? user.photoURL
                                        : recipeImage
                                }
                                alt=""
                            />
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
                                        <Stack>
                                            {displayNameAuhtor}
                                        </Stack>
                                    </>
                                ) : (
                                    <>
                                        <Stack>
                                            {AuthorName}
                                        </Stack>
                                    </>
                                )}
                                <Stack direction="row" spacing={2}>
                                    <Stack direction="row" gap={1}>
                                        <Favorite
                                            sx={{
                                                color:
                                                    likesCounter?.includes(user.uid)
                                                    && 'red'
                                            }}
                                            fontSize={matches ? 'small' : 'medium'}
                                        />
                                        {
                                            likesCounter ?
                                                likesCounter.length : 0
                                        }
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
                            variant={matches ? 'subtitle1' : 'subtitle2'}
                        >
                            {ranking}
                        </Tag.ReviewScore>
                    </Stack>
                </Stack>
            </Stack>
        </Tag.Card>
    )
}