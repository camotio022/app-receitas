import { Box, Stack, Typography, styled as MuiA, styled } from "@mui/material";


export const Menu_links = styled(Stack)(({ theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20%",
    width: "100%",
    minHeight: "6%",
    height: "auto",
    transition: "all.5s",
    borderBottom: "1px solid #000",
    padding: "1em",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.secondary,
}));

export const Logo = styled(Typography)(({ theme }) => ({
    display: "flex",
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: "auto",
    "@media only screen and (max-width: 810px)": {
        opacity: 0,
        width: "100%",
    }
}));
export const Aa = MuiA('a')(({ theme }) => ({
    color: "white",
}));

export const IconLink = styled(Box)(({ theme }) => ({

}));


export const Links = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: '100%',
 
    "@media only screen and (min-width: 800px)": {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        gap: '1rem',
        width: '100%',
        height: '100%',
    },
    "@media only screen and (max-width: 810px)": {
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "50%",
        height: "100vh",
        transition: "all .5s",
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.main,
    },
    "@media only screen and (max-width: 550px)": {
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100vw",
        height: "100vh",
        transition: "all .5s",
        background: 'green',
    }
}));

export const Link = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",


    "&:hover": {
        cursor: "pointer",
        fontWeight: '700',
        transform: "translate(0%, 30%)",
        transition: "0.3s ease-out",
        backgroundColor: theme.palette.primary.secondary,
        borderBottom: '5px solid gray',
        borderWidth: '10%',
        ".iconLnk": {
            display: 'none'
        }
    },
    "@media only screen and (min-width: 810px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '100%',
        
    },
    "@media only screen and (max-width: 800px)": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "0.1px solid #b9b2b2",
        width: "100%",
        padding: "0 10px 0 10px",
        backgroundColor: theme.palette.primary.light,
        "&:hover": {
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: '700',
            transform: "translate(0%, 30%)",
            transition: "0.3s ease-out",
            backgroundColor: theme.palette.primary.light,
            borderBottom: 'none',
            color: theme.palette.primary.dark,
            borderLeft: `10px solid gray`
        },
    }
}));
export const IconMenu = styled(Typography)(({ theme, props }) => ({
    ...{ props },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: '0.5em',
    color: 'text.secondary',
    fontWeight: '700',
    "@media only screen and (min-width: 800px)": {
        display: "none",
    },
}));
export const ShowlinkIcon = styled(Box)(() => ({
    "@media only screen and (min-width: 800px)": {
        display: "none",
        alignItems: "center",
        justifyContent: "space-between",
    }
}));
