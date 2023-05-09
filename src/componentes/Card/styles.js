import {Card as MuiCard, styled} from '@mui/material'



export const Card = styled(MuiCard)(({active})=>({
    backgroundColor: active === 'true' ? 'red' : 'blue',
    ...( active ==='true' ? {
        height: '200px',
        color: 'green'
    } : {
        padding: '10rem'
    })
}))