import { Stack, styled } from '@mui/material'

export const StackMui = styled(Stack)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'center',
    textAlign: 'center',
    gap: '1rem',
    width: '100%',
    height: '50%',
    borderRadius: 'none',
    padding: '5rem',
}))
