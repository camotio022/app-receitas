import { Button, Typography } from '@mui/material'
import { Settings as SettingsIcon } from '@mui/icons-material'
import * as Tag from './colors'
// const colors_web = [
//     { fundo: '#001f3f' },
//     { fundo: '#111111' },
//     { fundo: '#FF851B' },
//     { fundo: '#3D9970' },
//     { fundo: '#39CCCC' },
//     { fundo: '#EDAE49' },
//     { fundo: '#00798c' },
// ]
export const ThemeButton = ({ handleClick }) => {
    return (
        <>
        <Tag.Colors>
            <SettingsIcon onClick={handleClick}>Trocar Tema</SettingsIcon>
        </Tag.Colors>
        </>
    )
}
