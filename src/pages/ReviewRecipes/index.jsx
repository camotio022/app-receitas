import { Stack, Typography, Box } from '@mui/material'
import * as Tag from './index'
import './index.css'
import Img1 from '../../images/mocks/foots/img1.jpeg'
import Img2 from '../../images/mocks/foots/img2.jpeg'
import Img3 from '../../images/mocks/foots/img3.png'
import Img4 from '../../images/mocks/foots/img4.png'
import Img5 from '../../images/mocks/foots/img5.jpeg'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react'


const recipe = [
    {
        img: Img1,
        avatar: '',
        titleRecipe: 'Sopinha de maracarão',
        commentsCounter: '22',
        starsLikedCounter: "123",
        starIcon: "estrelas",
        userName: 'Boa sorte mano',
        reviewScore: '9.0'
    },
    {
        img: Img2,
        avatar: '',
        titleRecipe: 'Salomão curado',
        commentsCounter: '552',
        starsLikedCounter: "21",
        starIcon: "121",
        userName: 'Timu da ccav',
        reviewScore: '10'
    },
    {
        img: Img3,
        avatar: '',
        titleRecipe: 'Carne moída com abóbora',
        commentsCounter: '200',
        starsLikedCounter: "231",
        starIcon: "212",
        userName: 'Geo de Abel',
        reviewScore: '11.2'
    },
    {
        img: Img4,
        avatar: '',
        titleRecipe: 'Lasanha de bringelas',
        commentsCounter: '92',
        starsLikedCounter: "231",
        starIcon: "1212",
        userName: '1212',
        reviewScore: '1212'
    },
    {
        img: Img5,
        avatar: '',
        titleRecipe: 'Crepioca de queijo',
        commentsCounter: '100',
        starsLikedCounter: "5 estrelas",
        starIcon: "111wx",
        userName: 'Sando de Sousa',
        reviewScore: '12.2'
    },
    {
        img: Img3,
        avatar: '',
        titleRecipe: 'Macarão com abóbrinha coitado',
        commentsCounter: '1000',
        starsLikedCounter: "5",
        starIcon: "wwww",
        userName: 'Viva aqui sou eu',
        reviewScore: '14.2'
    },
]
export const Recipes = (
    {
        img,
        avatar,
        titleRecipe,
        commentsCounter,
        starsLikedCounter,
        starIcon,
        userName,
        reviewScore
    }
) => {
    return (
        <>
            <Tag.Card>
                <Stack width={"100%"}>
                    <img className='img' src={img} alt="" />
                    <Stack sx={{
                        p: 2,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                    }} spacing={2}>
                        <Typography variant="h5">{titleRecipe}</Typography>
                        <Stack direction="row" spacing={2}>
                            <Box>{starIcon}</Box>
                            <Typography variant="p">{starsLikedCounter}</Typography>
                        </Stack>
                        <Stack direction="row" width={"100%"} justifyContent="space-between">
                            <Tag.AuthorImage>
                                <img style={{ borderRadius: '10px' }} src={img} alt="" />
                            </Tag.AuthorImage>
                            <Box id="info">
                                <Typography variant="subtitle1">{userName}</Typography>
                                <Stack direction="row" spacing={2}>
                                    <Stack direction="row">233</Stack>
                                    <Stack direction="row">{commentsCounter}</Stack>
                                </Stack>
                            </Box>
                            <Tag.ReviewScore>{reviewScore}</Tag.ReviewScore>
                        </Stack>
                    </Stack>
                </Stack>
            </Tag.Card>
        </>
    )
}
export const TopReview = () => {

    return (
        <Tag.Container id='scrollHeithg'>
            <Tag.HeaderView textAlign={'center'} width={'100%'}>
                <Tag.Title variant='h5'>Top Review</Tag.Title>
                <Typography variant='p' >
                    Aqui estão filtradas todas a receitas mais vistas nos ultimos dias, sacou!
                </Typography>
            </Tag.HeaderView>
            <Tag.Cards>
                {
                    recipe.map((recipe, index) => {
                        return (
                            <Recipes key={recipe.name} {...recipe} />
                        )
                    })
                }
            </Tag.Cards>
            <Tag.Pagination spacing={2}>
                <Pagination
                    count={100}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Tag.Pagination>
        </Tag.Container>
    )
}