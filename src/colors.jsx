import './colors.css'
import { useState } from 'react'
import * as Tag from './colors.js'
import { Settings as SettingsIcon } from '@mui/icons-material'
const colors_web = [
    { fundo: '#001f3f' },
    { fundo: '#111111' },
    { fundo: '#FF851B' },
    { fundo: '#3D9970' },
    { fundo: '#39CCCC' },
    { fundo: '#EDAE49' },
    { fundo: '#00798c' },
]
export const Colors_web = ({ fundo }) => {
    return (
        <>
            <div style={{ background: fundo }}></div>
        </>
    )
}
export const THEMASPAGE = () => {
    const [opentheme, setOpentheme] = useState('0')
    return (
        <>
            <div className="container_color">
                {
                    <div
                        style={{
                            width: !opentheme ? '10rem' : '0rem',
                            opacity: !opentheme ? '1' : '0',
                        }}
                        className="color_a"
                    >
                        <h3>Skins Colors</h3>
                        <div className="color_contain">
                            {colors_web.map((color) => {
                                return (
                                    <Colors_web key={color.fundo} {...color} />
                                )
                            })}
                        </div>
                        <h3>Layout</h3>
                        <div className="layout_webs">
                            <div>Wide</div>
                            <div>Boxed</div>
                        </div>
                    </div>
                }
                <Tag.Colors className="color_b">
                    <div
                        onClick={() => setOpentheme(!opentheme)}
                        className="color_b_a"
                    >
                        <SettingsIcon />
                    </div>
                    <div className="color_b_a">EN</div>
                </Tag.Colors>
            </div>
        </>
    )
}
