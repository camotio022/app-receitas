import { Card as MuiCard, Box, styled } from '@mui/material'

export const Card = styled(MuiCard)(({ theme }) => ({
    width: '200px',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
}))

export const ReviewScore = styled(Box)(({ theme }) => ({
    backgroundColor: 'green',
    color: 'white',
    padding: theme.spacing(2),
}))

export const AuthorImage = styled(Box)(() => ({
    width: '20%',
    overflow: 'hidden',

    img: {
        width: '100%',
    },
}))
