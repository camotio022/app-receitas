import { styled, Stack, Box, InputBase, alpha, Paper, List, ListSubheader, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
export const Wrapper = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: "100vh",
    position: 'absolute',
    top: 0,
    left: 0,
}))

export const MenuBar = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%',
    height: '100%',
    color: 'blac',
    gap: '1rem',
    transition: 'all 0.5s ease-in-out'
}))
export const MenuItemsLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '22%',
    height: 'auto',
    background: "#374957",
    color: 'white',
    padding: '0.5rem'
}))
export const ItemsLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '40%',
    width: 'auto',
}))
export const MinhaLista = styled(List)(({ theme }) => ({
    transition: 'all 0.5s ease-in-out'
}))
export const ListSub = styled(ListSubheader)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    background: 'transparent',
}))
export const Search = styled(Box)(({ theme }) => ({
    position: 'relative',
    paddingRight: '0.5rem',
    color: "#374957",
    border: '1px solid #e3e9ed',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f8fafb7",
    lineHeight: "1.66",
    '&:hover': {
        backgroundColor: "#f8fafb",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    width: 'auto',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '26ch',
            '&:focus': {
                width: '36ch',
            },
        },
    },
}));

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
}));
export const ItemMenu = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: "10px",
    padding: "1rem",
    varian: "body1",
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: "16px",
    color: "primary"
}));