import { Stack } from "@mui/material"
import LogoImage from '../../images/logo/logo-menu.png' 

export const Logo = () => {
    return (
        <>
            <Stack>
                <img src={LogoImage} alt="" />
            </Stack>
        </>
    )
}