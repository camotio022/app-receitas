import {
    Box,
    Stack,
    Typography,
    styled as MuiA,
    styled,
    List,
    ListSubheader,
} from '@mui/material'

export const Menu_links = styled(Stack)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20%',
    width: '100%',
    height: '6%',
    height: 'auto',
    transition: 'all.5s',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    padding: '1em',
    backgroundColor: theme.palette.background,
    color: '#fff',
}))

export const Logo = styled(Typography)(({ theme }) => ({
    display: 'flex',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 'auto',
    '@media only screen and (max-width: 810px)': {
        opacity: 0,
        width: '100%',
    },
}))
export const MenuBar = styled(Stack)(({ theme }) => ({
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%',
    height: '7%',
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    color: '#fff',
    padding: '15px',
    transition: 'all 0.5s ease-in-out'
}))
export const ListSub = styled(ListSubheader)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    background: 'transparent',
    background: theme.palette.primary.dark,
}))

export const Aa = MuiA('a')(({ theme }) => ({
    color: 'white',
}))

export const IconLink = styled(Box)(({ theme }) => ({}))

export const LogoIconMobile = styled(Stack)(({ theme }) => ({
    display: 'flex',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    '@media only screen and (max-width: 550px)': {
        display: 'flex',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    },
}))

export const Links = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    color: theme.palette.primary.contrastText,
    '@media only screen and (min-width: 800px)': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        width: '100%',
        height: '100%',
        color: theme.palette.primary.contrastText,
    },
    '@media only screen and (max-width: 810px)': {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '50%',
        height: '100%',
        transition: 'all .5s',
        color: theme.palette.primary.contrastText,
    },
    '@media only screen and (max-width: 550px)': {
        position: 'fixed',
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100vw',
        height: '100vh',
        transition: 'all .5s',
        color: theme.palette.primary.contrastText,
    },
}))

export const ContainLinks = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    transition: 'all.5s',
}))

export const SubMenus = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textTransform: 'auto',
    width: '100%',
    paddingLeft: '1em',
    color: theme.palette.primary.contrastText,
    transition: 'all.5s',
    '@media only screen and (min-width: 810px)': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: '5rem',
        left: 0,
        padding: '2%',
    },
}))
export const Branch = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '16px',
    width: '100%',
    color: '#fff',
    fontWeight: '300',
    borderLeft: '1px solid gray',
    padding: '5px 5px 5px 16px',
    '&:hover': {
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.main,
        borderLeft: `1px solid ${theme.palette.primary.dark}`,
        transition: 'all.5s',
    },
    '@media only screen and (min-width: 810px)': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '30%',
        height: 'auto',
        border: 'none',
        borderBottom: '1px solid gray',
    },
}))

export const Link = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    '&:hover': {
        cursor: 'pointer',
        fontWeight: '700',
        transform: 'translate(0%, 30%)',
        transition: '0.3s ease-out',
        borderWidth: '10%',
        '.iconLnk': {
            display: 'none',
        },
    },
    '@media only screen and (min-width: 810px)': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    '@media only screen and (max-width: 810px)': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 10px 0 10px',

        '&:hover': {
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: '700',
            transform: 'translate(0%, 30%)',
            transition: '0.3s ease-out',
            borderBottom: 'none',
            color: theme.palette.primary.contrastText,
        },
    },
}))
export const IconMenu = styled(Typography)(({ theme, props }) => ({
    ...{ props },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '0.5em',
    color: 'text.secondary',
    fontWeight: '700',
    '@media only screen and (min-width: 810px)': {
        display: 'none',
    },
}))
export const ShowlinkIcon = styled(Box)(() => ({
    '@media only screen and (min-width: 810px)': {
        display: 'none',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}))

export const Div = styled('div')(({ theme }) => ({}))

export const MinhaLista = styled(List)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: '60%',
    position: 'absolute',
    left: 0,
    height: '100vh',
    transition: 'all 0.5s ease-in-out'
}))
