import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme}) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    top: '0',
    bottom: '0',
}))