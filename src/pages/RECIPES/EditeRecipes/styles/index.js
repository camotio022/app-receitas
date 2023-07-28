import { Container, Paper, Stack, styled } from "@mui/material";

export const Cards = styled(Stack)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    width: '100%',
    height: '100',
    flexWrap: 'wrap',
    gap: "2rem",
    marginBlock: '5rem'
}))

export const MyContainer = styled(Container)(({ theme }) => ({
    width: "100%",
    height: "auto",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "2rem",
    bgcolor: 'transparent !important',
    marginBlock: '5rem'
}))

export const MyPaper = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: "wrap",
    gap: "1rem",
    paddingBlock: '3rem',
}))
