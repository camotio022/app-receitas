import { Button, Card, Input, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { Mail as MailIcon } from "@mui/icons-material"
import { dark, light } from "@mui/material/styles/createPalette"
import { pink } from "@mui/material/colors"
import * as Tag from "./index";
export const Dashboard = () => {
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
                    <Typography variant="h5">Fique sempre atualizado conosco. Faça login com nosso boletim informativo</Typography>

                    <Input

                        sx={{
                            '--Input-decoratorChildHeight': '100%',
                            borderRadius: 'none',
                            border: '1px solid',
                            padding: '2px',
                        }}
                        placeholder="mail@mui.com"
                        type="email"
                        required
                        // value={data.email}
                        // onChange={(event) =>
                        //     setData({ email: event.target.value, status: 'initial' })
                        // }
                        // error={data.status === 'failure'}
                        endAdornment={
                            <Button
                                variant="solid"
                                color="primary"
                                // loading={data.status === 'loading'}
                                type="submit"
                                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0
                                 }}
                            >
                                Registrar
                            </Button>
                        }
                    />
                </Tag.StackMui>
            </Stack >
        </>
    )
}