import { Favorite, Forum } from "@mui/icons-material"
import { Avatar, Link, Rating, Typography, Tooltip, Box, Stack, useMediaQuery, recomposeColor } from "@mui/material"
import { orange } from "@mui/material/colors"
import { useContext } from "react"
import { AuthContext } from "../../../../../contexts/AuthContext"
import *as Tag from '../../index.js'
export const CardMyRecipes = ({
    handleOptionsOP,
    index,
    recipe,
    handleOptions,
    options
}) => {
    const matches = useMediaQuery('(min-width:700px)')
    const { user } = useContext(AuthContext)
    const noWrap = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }
    return (
        <>

            <Tag.Card onDoubleClick={() => handleOptionsOP(index)} key={index}>
                <Stack width={'100%'}>
                    <Tooltip
                        sx={{ cursor: 'pointer' }}
                        title={`Dê dois clicks para comentar está receita  ${recipe?.recipeTitle}`}
                        followCursor
                    >
                        <img
                            style={{ height: '10rem' }}
                            className="img"
                            src={recipe?.recipeImage ? recipe?.recipeImage : 'https://cdn.panelinha.com.br/post/1416189600000-Medidores-os-curingas-de-qualquer-cozinha.jpg'}
                            alt={`receita de ${recipe?.recipeTitle}`}
                        />
                    </Tooltip>
                    <Stack padding={2} spacing={2}>
                        <Tooltip
                            sx={{ cursor: 'pointer' }}
                            title={`Ir para os detalhes  ${recipe?.recipeTitle}`}
                            followCursor
                        >
                            <Typography color={'gray'} variant="h6" sx={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                fontSize: '100%'
                            }}>
                                <Link
                                    href={`/detailsRecipes/${recipe?.id}`}
                                    color="inherit"
                                    underline="hover"
                                >
                                    {recipe?.recipeTitle}
                                </Link>
                            </Typography>
                        </Tooltip>
                        <Stack direction="row" justifyContent={'space-between'}>
                            <Stack direction="row" spacing={2}>
                                <Box color={'#ffa505'}>
                                    <Rating
                                        name={matches ? 'size-medium' : 'size-large'}
                                        disabled
                                        defaultValue={1}
                                    />
                                </Box>
                                <Typography variant="p">
                                    {recipe?.starsLikedCounter}
                                </Typography>
                                <Box>
                                    {handleOptions[index] && (
                                        <>
                                            {options}
                                        </>
                                    )}
                                </Box>
                            </Stack>
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
                                    <Avatar
                                        sx={{ bgcolor: orange[500] }}
                                        alt={recipe?.name}
                                        src={user?.photoURL}
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
                                    <Typography sx={noWrap} variant="body">
                                        {user?.displayName}
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                    <Stack direction="row" gap={1}>
                                        <Favorite
                                            sx={{
                                                color:
                                                    recipe?.likesCounter?.includes(user.uid)
                                                    && 'red'
                                            }}
                                            fontSize={matches ? 'small' : 'medium'}
                                        />
                                        {
                                            recipe?.likesCounter ?
                                            recipe?.likesCounter?.length : 0
                                        }
                                    </Stack>
                                        <Stack spacing={2} gap={1} direction="row">
                                            <Forum
                                                fontSize={matches ? 'small' : 'medium'}
                                            />
                                            {recipe?.commentsCounter}
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Tag.Author>
                            <Tag.ReviewScore
                                variant={matches ? 'subtitle1' : 'h4'}
                            >
                                {recipe?.ranking}
                            </Tag.ReviewScore>
                        </Stack>
                    </Stack>
                </Stack>
            </Tag.Card>
        </>
    )
}