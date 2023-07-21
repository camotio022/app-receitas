import { Card, CardActions, CardMedia, Stack, Typography, styled, useMediaQuery } from '@mui/material'
import { orange } from '@mui/material/colors'



export const Container = styled(Stack)(({ theme }) => ({
    position: 'static',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    color: 'red',

}))
export const CardMediaContain = styled(Card)(({ theme }) => (
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        boxShadow:
            'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        padding: '0 0 10rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
))

export const Midias = styled(CardMedia)(({ theme }) => ({
    height: '20rem',
    width: '100%',
    backgroundSize: '100%',
}))


export const Info = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '30%',
    height: '5rem',
    paddingLeft: '10px',
    borderLeft: `1px solid ${orange[900]}`
}))
export const Title = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '8rem',
    width: 'auto',
    color: orange[900],
    fontWeight: '900',
    margin: '2rem 0 1rem 0',
}))

