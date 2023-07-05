import { Stack } from "@mui/material"
import LogoImage from '../../images/logo/logo-menu.png' 

export const Logo = ({logoStyle}) => {
    return (
        <>
            <Stack>
                <img style={logoStyle} src={LogoImage} alt="" />
            </Stack>
        </>
    )
}