import { Stack, styled } from "@mui/material";









export const Container = styled(Stack)(({ theme}) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100vw',
    minHeight: '100vh',
    color: 'red',
    zIndex: 1,
    backgroundColor: 'white',
    overflow: 'auto',
    paddingBottom: '5rem'
}))