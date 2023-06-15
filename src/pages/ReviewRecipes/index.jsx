import { Stack, Typography, Box, useMediaQuery, Tooltip, Link, Rating } from '@mui/material'
import * as Tag from './index'
import './index.css'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import {
    Forum as ForumIcon,
    Favorite as FavoriteIcon,
    Star as StarIcon,
    NavigateNext as NavigateNextIcon
} from '@mui/icons-material'
import { ShowSlider } from '../Home/CAROUSEL'
import { Dashboard } from '../../componentes/BASEBOARD/index.jsx'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';

export const TopReview = () => {
    const matches = useMediaQuery('(min-width:700px)')
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [top, setTop] = useState(false);
    const [itemsPerPage] = useState(10);
    const indexOfLastRecipe = currentPage * itemsPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        // Recupere os usuários do Firebase
        const obterrecipes = async () => {
            const recipesData = await api.recipe.get()
            setRecipes(recipesData);
            console.log(recipesData)
        };
        obterrecipes();
    }, []);
    const noWrap = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop + windowHeight >= documentHeight) {
            setTop(true)
        } else {
            setTop(false)
        }
    };
    window.addEventListener('scroll', handleScroll);
    const [imageUrls, setImageUrls] = useState([]);
    const [currentImageUrl, setCurrentImageUrl] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const fetchImages = async () => {
        const imagesRef = collection(db, 'imagesCard');
        const imagesSnapshot = await getDocs(imagesRef);
        const imagesData = imagesSnapshot.docs.map((doc) => doc.data().url);
        setImageUrls(imagesData);
      };
      fetchImages();
    }, []);
    return (
        <Tag.Wrapper>
            <Tag.Container id="scrollHeithg">
            
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
                    {currentRecipes.map((recipe) => {
                        return (
                            <>
                                <Tag.Card key={recipe?.id}>
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
                                                <Link href={`/detailsRecipes/${recipe?.id}`} color='inherit' underline="hover">
                                                    {recipe?.recipeTitle}
                                                </Link>
                                            </Typography>
                                            <Stack direction="row" justifyContent={'space-between'}>
                                                <Stack direction="row" spacing={2}>
                                                    <Box color={'#ffa505'}>
                                                        <Rating
                                                            name={matches ? 'size-medium' : 'size-large'} defaultValue={1} />

                                                    </Box>
                                                    <Typography variant="p">
                                                        {recipe?.starsLikedCounter}
                                                    </Typography>
                                                </Stack>
                                                <Tag.FavoritingRecipe
                                                    title={`Favoritar está receita ${recipe?.titleRecipe}`}
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
                                                            src={recipe?.avatar}
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
                                                            {recipe?.name}
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
                                                                {recipe?.commentsCounter}
                                                            </Stack>
                                                        </Stack>
                                                    </Box>
                                                </Tag.Author>
                                                <Tag.ReviewScore
                                                    variant={matches ? 'subtitle1' : 'h4'}
                                                >
                                                    {recipe?.reviewScore}
                                                </Tag.ReviewScore>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Tag.Card>

                            </>
                        )
                    })}
                </Tag.Cards>
                {/* Paginação */}
                {/* <Dashboard /> */}
            </Tag.Container>
            {top && <> {
                recipes.length > itemsPerPage && (
                    <Tag.Pagination spacing={2} sx={{ transition: '.3s', mt: "3" }}>
                        <Pagination
                            count={Math.ceil(recipes.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                />
                            )}
                        />
                    </Tag.Pagination>
                )
            }</>}
        </Tag.Wrapper>
    )
}
