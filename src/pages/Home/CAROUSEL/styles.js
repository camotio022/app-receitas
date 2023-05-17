import Imag from '../../../images/mocks/foots/img1.jpeg';
import { styled, Stack, Typography } from "@mui/material";
export const Carousel = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
    marginTop: "8rem",
    background: theme.palette.primary.light,
}))

export const Title = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));