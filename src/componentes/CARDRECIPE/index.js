import styled from "@emotion/styled";
import { Box, Stack, Tooltip, Typography } from "@mui/material";

export const Card = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '20rem',
    height: 'auto',
    backgroundColor: 'white',
    transition: 'all .5s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    '@media only screen and (max-width: 550px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 'auto',
        fontSize: '100%',
        transition: 'all .5s ease-in-out',
    },
    '@media only screen and (min-width: 1000px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '16rem',
        height: 'auto',
        width: '20rem',
        fontSize: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        transition: 'all .5s ease-in-out',
    },
}))
export const FavoritingRecipe = styled(Tooltip)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
    color: '#2727',
    border: '1px solid',
    cursor: 'pointer',
    '&:hover': {
        borderRadius: '50%',
        backgroundColor: '#56565656',
        color: 'red',
        marginTop: '-1rem',
        width: '3rem',
        height: '3rem',
        transition: 'all .3s ease-in-out',
        fontSize: '2rem',
        border: 'none',
        padding: '10px',
    },
}))
export const Author = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'flex-start',
}))

export const ReviewScore = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    padding: theme.spacing(2),
}))

export const AuthorImage = styled(Box)(({ theme }) => ({
    width: '3rem',
    height: '3rem',
    overflow: 'hidden',
    borderRadius: '50%',
    color: theme.palette.secondary.light,
    img: {
        width: '100%',
        height: '100%',
    },
}))