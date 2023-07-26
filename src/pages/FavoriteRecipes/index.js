import { Box, Card, Container, IconButton, styled } from "@mui/material";

export const Contain = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: "100%",
    marginTop: '10rem',
    paddingBottom: '4rem',
    gap: '3rem'
}))

export const FavoriteCard = styled(Card)(({ theme }) => ({
    maxHeight: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}))
export const FavoriteBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(225, 0, 0, 0.2)',
    backdropFilter: 'blur(3px)',
    transition: '.3s',
    color: 'white',
    '&:hover': {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0)',
        transition: '.3s',
    },
}))