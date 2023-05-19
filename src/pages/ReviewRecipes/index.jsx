import { Stack, Typography, Box, useMediaQuery, Tooltip, Link } from '@mui/material'
import * as Tag from './index'
import './index.css'
import Aos from 'aos'
import Img1 from '../../images/mocks/foots/img1.jpeg'
import Img2 from '../../images/mocks/foots/img2.jpeg'
import Img3 from '../../images/mocks/foots/img3.png'
import Img4 from '../../images/mocks/foots/img4.png'
import Img5 from '../../images/mocks/foots/img5.jpeg'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
    Forum as ForumIcon,
    Favorite as FavoriteIcon,
    Star as StarIcon,
    NavigateNext as NavigateNextIcon
} from '@mui/icons-material'
import { ShowSlider } from '../Home/CAROUSEL'
import { Dashboard } from '../../componentes/BASEBOARD/index.jsx'

const recipes = [
    {
        img: Img1,
        avatar: '',
        titleRecipe: 'Sopinha de maracarão',
        commentsCounter: '22',
        starsLikedCounter: '123',
        starIcon: 'estrelas',
        userName: 'Boa sorte mano',
        reviewScore: '9.0',
    },
    {
        img: Img2,
        avatar: '',
        titleRecipe: 'Salomão curado',
        commentsCounter: '552',
        starsLikedCounter: '21',
        starIcon: '121',
        userName: 'Timu da ccav',
        reviewScore: '10',
    },
    {
        img: Img3,
        avatar: '',
        titleRecipe: 'Carne moída com abóbora',
        commentsCounter: '200',
        starsLikedCounter: '231',
        starIcon: '212',
        userName: 'Geo de Abel',
        reviewScore: '11.2',
    },
    {
        img: Img4,
        avatar: '',
        titleRecipe: 'Lasanha de bringelas',
        commentsCounter: '92',
        starsLikedCounter: '231',
        starIcon: '1212',
        userName: '1212',
        reviewScore: '1212',
    },
    {
        img: Img5,
        avatar: '',
        titleRecipe: 'Crepioca de queijo',
        commentsCounter: '100',
        starsLikedCounter: '5 estrelas',
        starIcon: '111wx',
        userName: 'Sando de Sousa',
        reviewScore: '12.2',
    },
    {
        img: Img3,
        avatar: '',
        titleRecipe: 'Macarão com abóbrinha coitado',
        commentsCounter: '1000',
        starsLikedCounter: '5',
        starIcon: 'wwww',
        userName: 'Viva aqui sou eu',
        reviewScore: '14.2',
    },
]
export const Recipes = ({
    img,
    avatar,
    titleRecipe,
    commentsCounter,
    starsLikedCounter,
    userName,
    reviewScore,
}) => {
    <script>
        Aos.init();
    </script>
    const noWrap = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }
    const matches = useMediaQuery('(min-width:700px)')

    return (
        <>
            <Tag.Card data-aos="fade-right">
                <Stack width={'100%'}>
                    <Tooltip
                        sx={{ cursor: 'pointer' }}
                        title={`Ir para os detalhes  ${titleRecipe}`}
                        followCursor
                    >
                        <img className="img" src={img} alt="" />

                    </Tooltip>
                    <Stack padding={2} spacing={2}>
                        <Typography color={'gray'} variant="h6" sx={noWrap}>
                            <Link href='/detailsRecipes' color='inherit' underline="hover">
                                {titleRecipe}
                            </Link>
                        </Typography>
                        <Stack direction="row" justifyContent={'space-between'}>
                            <Stack direction="row" spacing={2}>
                                <Box color={'#ffa505'}>
                                    {[...new Array(5)].map(() => (
                                        <StarIcon
                                            fontSize={matches ? 'small' : 'medium'} />
                                    ))}
                                </Box>
                                <Typography variant="p">
                                    {starsLikedCounter}
                                </Typography>
                            </Stack>
                            <Tag.FavoritingRecipe
                                title={`Favoritar está receita ${titleRecipe}`}
                                followCursor
                            >
                                <FavoriteIcon />
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
                                        style={{ borderRadius: '10px' }}
                                        src={img}
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
                                    <Typography sx={noWrap} variant="subtitle1">
                                        {userName}
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <Stack direction="row" gap={1}>
                                            <FavoriteIcon
                                                fontSize={
                                                    matches ? 'small' : 'medium'
                                                }
                                            />
                                            233
                                        </Stack>
                                        <Stack
                                            spacing={2}
                                            gap={1}
                                            direction="row"
                                        >
                                            <ForumIcon
                                                fontSize={
                                                    matches ? 'small' : 'medium'
                                                }
                                            />
                                            {commentsCounter}
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Tag.Author>
                            <Tag.ReviewScore
                                variant={matches ? 'subtitle1' : 'h6'}
                            >
                                {reviewScore}
                            </Tag.ReviewScore>
                        </Stack>
                    </Stack>
                </Stack>
            </Tag.Card>
        </>
    )
}
export const TopReview = () => {
    return (
        <Tag.Wrapper>
            <Tag.Container id="scrollHeithg">
                <ShowSlider wellcome="Seja bem vindo ao Recipes Food"
                    image='https://www.rockrecipes.com/wp-content/uploads/2013/05/Top-TEn-Chicken-Dinner-Recipes-2020-square-collage-for-featured-post-image.jpg'
                    pathPagination={"Top Review //"}
                />
                <Tag.HeaderView textAlign={'center'} width={'100%'}>
                    <Tag.Title sx={{
                        letterSpacing: "-1px",
                        fontWeight: 700,
                        marginBottom: 0,
                        color: 'text-primary',
                        textShadow: "0px 2px 2px rgba(65,60,53,.82)",
                    }} variant="h5">Top Review</Tag.Title>
                    <Typography variant="p">
                        Aqui estão filtradas todas a receitas mais vistas nos
                        ultimos dias, sacou!
                    </Typography>
                </Tag.HeaderView>
                <Tag.Cards>
                    {recipes.map((recipe) => {
                        return <Recipes key={recipe.titleRecipe} {...recipe} />
                    })}
                </Tag.Cards>

                {false && (
                    <Tag.Pagination spacing={2}>
                        <Pagination
                            count={100}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{
                                        previous: ArrowBackIcon,
                                        next: ArrowForwardIcon,
                                    }}
                                    {...item}
                                />
                            )}
                        />
                    </Tag.Pagination>
                )}
                <Dashboard />
            </Tag.Container>
        </Tag.Wrapper>
    )
}
