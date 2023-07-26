import { Favorite, Forum } from "@mui/icons-material"
import { Avatar, Link, Rating, Typography, Tooltip, Box, Stack, useMediaQuery } from "@mui/material"
import { orange } from "@mui/material/colors"
import { useContext } from "react"
import { AuthContext } from "../../../../contexts/AuthContext"
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
                        title={`Ir para os detalhes  ${recipe?.recipeTitle}`}
                        followCursor
                    >
                        <img className="img" src={recipe?.recipeImage} alt="" />
                    </Tooltip>
                    <Stack padding={2} spacing={2}>
                        <Typography color={'gray'} variant="h6" sx={noWrap}>
                            <Link
                                href={`/detailsRecipes/${recipe?.id}`}
                                color="inherit"
                                underline="hover"
                            >
                                {recipe?.recipeTitle}
                            </Link>
                        </Typography>
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
                                    <Typography sx={noWrap} variant="subtitle1">
                                        {user?.displayName}
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <Stack direction="row" gap={1}>
                                            <Favorite
                                                fontSize={matches ? 'small' : 'medium'}
                                            />
                                            {recipe?.favoritesCounter}
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