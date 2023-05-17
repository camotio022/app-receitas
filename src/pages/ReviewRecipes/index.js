import { styled, Stack, Box, Typography } from "@mui/material";
export const Container = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "5%",
    width: "100%",
    minHeight: "40%",
    fontSize: '100%',
    marginBottom: '3rem'

}))
export const HeaderView = styled(Stack)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.primary.light}`,
    paddingBottom: "1rem",
}))
export const Title = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
}));
export const Cards = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: "2rem",
    width: "100%",
    height: "auto",
    paddingBottom: "15rem",
}))


export const Card = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '20rem',
    height: '30rem',
    backgroundColor: theme.palette.primary.light,
    transition: "all .5s ease-in-out",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    '@media only screen and (max-width: 550px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 'auto',
        fontSize: "100%",
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        backgroundColor: theme.palette.secondary.light,
        transition: "all .5s ease-in-out",
        ".img": {
            width: '100%',
            height: '10%',
        }
    },
    '@media only screen and (min-width: 1000px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16rem',
        height: 'auto',
        fontSize: "100%",
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        backgroundColor: theme.palette.secondary.light,
        transition: "all .5s ease-in-out",
    },
}));

export const ReviewScore = styled(Box)(({ theme }) => ({
    backgroundColor: "green",
    color: "white",
    padding: theme.spacing(2),
}));

export const AuthorImage = styled(Box)(() => ({
    width: "20%",
    overflow: "hidden",

    img: {
        width: "100%",
    },
}))
export const Pagination = styled(Stack)(({theme}) => ({
    position: 'absolute',
    bottom: "4rem",
    
}))


