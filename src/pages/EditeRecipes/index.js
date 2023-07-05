import { Stack, styled } from "@mui/material";

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
