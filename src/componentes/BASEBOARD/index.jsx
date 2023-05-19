import { Button, Card, Input, Typography, useMediaQuery } from "@mui/material"
import { Stack } from "@mui/system"
import {
    Mail as MailIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    YouTube as YouTubeIcon,
    Google as GoogleIcon,
    Twitter as TwitterIcon,
    WhatsApp as WhatsAppIcon,
    Whatshot as WhatshotIcon
} from "@mui/icons-material"
import { dark, light } from "@mui/material/styles/createPalette"
import { grey, pink } from "@mui/material/colors"
import * as Tag from "./index";

export const Dashboard = () => {
    const matches = useMediaQuery('(min-width:700px)')

    return (
        <>
            <Stack sx={{
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: "center",
                width: '100%',
                minHeight: "25rem",
            }}>
                <Tag.StackMui sx={{
                }}>
                    <Typography sx={{
                        textAlign: "left",
                        fontSize: "20px",
                        color: "#fff",
                        lineHeight: "30px",
                        margin: 0,
                    }} variant="h5">Fique sempre atualizado conosco. Faça login com nosso boletim informativo</Typography>

                    <Input
                        placeholder="mail@boletim.com"
                        sx={{
                            '--Input-decoratorChildHeight': '100%',
                            background: '#fff',
                            border: 'nobe',
                            padding: '2px',
                            outline: 'none',
                        }}
                        type="email"
                        required
                        endAdornment={
                            <Button
                                variant="solid"
                                type="submit"
                                sx={{
                                    borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
                                    color: 'white',
                                    backgroundColor: 'black',
                                    "&:hover": {
                                        color: 'white',
                                        backgroundColor: 'green',
                                    }
                                }}
                            >
                                Registrar
                            </Button>
                        }
                    />
                </Tag.StackMui>

                <Stack sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    width: '100%',
                    height: '100%',
                }}>
                    <Stack direction='row' gap={1} >
                        {[<WhatshotIcon />, <WhatsAppIcon />, <YouTubeIcon />, <TwitterIcon />, <GoogleIcon />, <InstagramIcon />, <FacebookIcon />].map((i) => {
                            return (
                                <>
                                    <Stack sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '2rem',
                                        width: '2rem',
                                        color: '#8a8a8a',
                                        // background: '#f5f5f5f5',
                                        backgroundColor: grey[200],
                                        fontSize: "16px",
                                        borderRadius: '50%',
                                        fontStyle: "normal",
                                        fontVariant: "normal",
                                        textRendering: "auto",
                                        lineHeight: 1,
                                    }}>
                                        {i}
                                    </Stack>
                                </>
                            )
                        })}
                    </Stack>
                    <Typography sx={{
                        textAlign: 'center',
                        width: '20rem',
                        color: '#8c8c8c',
                        fontWeight: '300',
                        fontSize: '12px'
                    }}>
                        Recipes Food | All Rights Reserved.
                        Template By themearabia.net
                    </Typography>
                </Stack>
            </Stack >
        </>
    )
}