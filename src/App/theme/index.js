import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // background: '#191919',
        text: {
            primary: grey[100],
        },
        primary: {
            main: '#0c69a6',
        },
        background: {
            paper: '#fafafa',
        },
    },
})

export const lightTheme = createTheme({
    palette: {
        // background: '#fff',
        text: {
            primary: grey[800],
        },
        primary: {
            main: '#053972',
        },
        background: { paper: '#fafafa' },
    },
})
