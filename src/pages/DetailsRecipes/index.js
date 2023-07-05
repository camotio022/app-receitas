import { CardActions, CardMedia, Stack, styled } from '@mui/material'
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
export const Midias = styled(CardMedia)(({ theme }) => ({
    height: '20rem',
    width: '100%',
    backgroundSize: '100%',
}))
export const NutInfo = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection:'row',
    flexWrap: 'wrap',
    gap: '2rem',
    width:'90%',
    height:'auto'
}))
export const Info = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent:'center',
    width: '30%',
    height:'5rem',
    paddingLeft: '10px',
    borderLeft: `1px solid ${orange[900]}`
}))
