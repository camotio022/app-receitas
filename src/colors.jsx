import { Button, Typography } from '@mui/material'
const colors_web = [
    { fundo: '#001f3f' },
    { fundo: '#111111' },
    { fundo: '#FF851B' },
    { fundo: '#3D9970' },
    { fundo: '#39CCCC' },
    { fundo: '#EDAE49' },
    { fundo: '#00798c' },
]
// export const Colors_web = ({ fundo }) => {
//     return (
//         <>
//             <div style={{ background: fundo }}></div>
//         </>
//     )
// }
export const ThemeButton = ({ handleClick }) => {
    console.log(handleClick)

    return <Button onClick={handleClick}>Trocar Tema</Button>
}
