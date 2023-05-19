import { Stack, styled } from '@mui/material'
export const StackMui = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    padding: theme.spacing(2),
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
    fontSize: '16px'
}))
