import { Container, styled } from "@mui/material";

export const MyContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
}));