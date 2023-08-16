
import { Grid, Stack, styled } from '@mui/material'

export const Container = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    color: 'red',
}))
export const StepFinish = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
}))
