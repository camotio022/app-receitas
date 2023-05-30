
import { Stack,styled } from '@mui/material'

export const Container = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    color: 'red',
}))
