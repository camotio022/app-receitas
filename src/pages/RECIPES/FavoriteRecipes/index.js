import { Box, Card, Container, IconButton, Stack, styled } from "@mui/material";

export const Contain = styled(Stack)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    width: '100%',
    height: 'auto',
    marginBlock:"10rem"
}))

export const FavoriteCard = styled(Card)(({ theme }) => ({
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