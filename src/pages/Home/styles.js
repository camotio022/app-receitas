import { styled, Stack, Box, InputBase, alpha } from "@mui/material";
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
export const MenuItemsLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '22%',
    background: theme.palette.primary.light,
    color: 'white',
    padding: '0.5rem'
}))
export const ItemsLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
    color: 'white',
}))
export const Search = styled(Box)(({ theme }) => ({
    position: 'relative',
    paddingRight: '0.5rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
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