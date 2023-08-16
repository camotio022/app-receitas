import { styled, Stack, Box, Typography, Tooltip } from '@mui/material'
export const Wrapper = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    gap: '5rem',
    padding: '3%',
    width: "100%",
    height: "100vh",
}))

export const Container = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '5%',
    width: '100%',
    minHeight: '40%',
    fontSize: '100%',
    background: theme.palette.background.paper,

}))
export const HeaderView = styled(Stack)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    paddingBottom: '1rem',
}))
export const Title = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
}))
export const Cards = styled(Stack)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    gap: "2rem",
    marginBlock: '5rem',
    bgcolor: '#f8fafb',
}))
export const Card = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '20rem',
    height: 'auto',
    backgroundColor: 'white',
    transition: 'all .5s ease-in-out',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    fontSize: '100% !important',
    '@media only screen and (max-width: 550px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 'auto',
        fontSize: '100%',
        transition: 'all .5s ease-in-out',
        fontSize: '100% !important',
    },
    '@media only screen and (min-width: 1000px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '16rem',
        height: 'auto',
        width: '20rem',
        fontSize: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        transition: 'all .5s ease-in-out',
        fontSize: '100% !important',
    },
}))
export const FavoritingRecipe = styled(Tooltip)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
    color: '#2727',
    border: '1px solid',
    cursor: 'pointer',
    '&:hover': {
        borderRadius: '50%',
        backgroundColor: '#56565656',
        color: 'red',
        marginTop: '-1rem',
        width: '3rem',
        height: '3rem',
        transition: 'all .3s ease-in-out',
        fontSize: '2rem',
        border: 'none',
        padding: '10px',
    },
}))
export const Author = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'flex-start',
}))

export const ReviewScore = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    padding: theme.spacing(2),
}))

export const AuthorImage = styled(Box)(({ theme }) => ({
    width: '3rem',
    height: '3rem',
    overflow: 'hidden',
    borderRadius: '50%',
    color: theme.palette.secondary.light,
    img: {
        width: '100%',
        height: '100%',
    },
}))
export const Pagination = styled(Stack)(({ theme }) => ({
    position: 'fixed',
    bottom: '3rem',
}))
export const MenuItemsLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    padding: '10px',
    width: '100%',
    height: '100%',
    bgcolor: '#f8fafb',
}))

export const CardImage = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: 5,
    marginBlock: '5rem',
}))

export const ContainerTopReview = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: 5,
    marginBlock: '5rem',
}))