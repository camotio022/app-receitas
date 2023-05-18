import { Stack, styled } from "@mui/material";

export const Colors = styled(Stack)(({theme})=> ({
    position: 'fixed',
    top: '7rem',
    left: '0rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'2rem',
    width: '2rem',
    color: 'white',
    padding: '1rem',
    background: theme.palette.primary.light,
}))