import Imag from '../../../images/mocks/foots/img1.jpeg';
import { styled, Stack, Typography, CardMedia } from "@mui/material";
export const Carousel = styled(CardMedia)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    width: "100%",
    minHeight: "100%",
    filter: 1,
}))
export const CardImage = styled(CardMedia)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    transition: "all 1s ease 0s",
    background: 'rgba(65,60,53,0.82)',
    color: 'rgba(255,255,255)',
    height: "100%",
    width: '100%',
    "&:hover": {
        background: 'transparent',
        color: "white",
    }
}))

export const Title = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    transition: "all 0s ease 0s",
    width: '90%',
    margin: "6.4px 0px 3.2px",
}));