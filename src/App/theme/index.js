import { createTheme } from '@mui/material'
import { grey, yellow, orange } from '@mui/material/colors'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // background: '#191919',
        text: {
            primary: orange[900],
        },
        primary: {
            main: '#0c69a6',
        },
        background: {
            paper: '#e65100',
        },
    },
})
// 50: '#fff3e0';
// 100: '#ffe0b2';
// 200: '#ffcc80';
// 300: '#ffb74d';
// 400: '#ffa726';
// 500: '#ff9800';
// 600: '#fb8c00';
// 700: '#f57c00';
// 800: '#ef6c00';
// 900: '#e65100';
// A100: '#ffd180';
// A200: '#ffab40';
// A400: '#ff9100';
// A700: '#ff6d00';
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        // background: '#fff',
        text: {
            primary: grey[900],
        },
        primary: {
            main: '#053972',
        },
        background: { paper: '#fafafa' },
    },
})
