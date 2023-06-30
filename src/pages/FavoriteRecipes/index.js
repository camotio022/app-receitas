import { Container, styled } from "@mui/material";

export const Contain = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height:"100%",
    marginTop: '10rem',
    paddingBottom: '4rem',
    gap: '3rem'
}))