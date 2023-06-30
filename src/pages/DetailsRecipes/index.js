import { CardActions, CardMedia, Stack, styled } from '@mui/material'
import { orange } from '@mui/material/colors'

export const Container = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100vw',
    minHeight: '100vh',
    color: 'red',
    zIndex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    paddingBottom: '5rem',
}))
export const Midias = styled(CardMedia)(({ theme }) => ({
    height: '20rem',
    width: '100%',
    backgroundSize: '100%',
}))
export const UserSections = styled(CardActions)(({ theme }) => ({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    height: '4.5rem',
    width: '100%',
    background: theme.palette.secondary.dark,
    zIndex: 9,
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
