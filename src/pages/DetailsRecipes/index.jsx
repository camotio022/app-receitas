import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, FormControlLabel, FormGroup, Link, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material"







import {
    ArrowBack as ArrowBackIcon,
    AvTimer as AvTimerIcon,
    ElectricBolt as ElectricBoltIcon,
    PersonAddAlt1 as PersonAddAlt1Icon,
    Add as AddIcon

} from '@mui/icons-material'
import * as Tag from './index.js'
import { grey, orange } from "@mui/material/colors";
import { useState } from "react";
export const DetailsRecipes = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const matches = useMediaQuery('(min-width:600px)');
    var Title = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '8rem',
        width: 'auto',
        color: orange[900],
        fontWeight: '900',
        margin: '2rem 0 1rem 0'
    }

    if (!matches) {
        return (
            <>
                <Tag.Container sx={{
                    gap: '3rem'
                }}>
                    <Tooltip
                        sx={{
                            cursor: 'pointer',
                            position: 'fixed',
                            top: "1rem",
                            left: "1rem",
                            "&:hover": {
                                border: "1px solid black",
                                color: 'black',
                                padding: '0.3rem',
                                bgcolor: "rgba(255, 255, 255)",
                                transition: "all 200ms"
                            }
                        }}
                        title="Voltar para as receitas"
                        followCursor
                    >
                        <Link href="/">
                            <ArrowBackIcon fontSize="large" />
                        </Link>
                    </Tooltip>
                    <Card sx={{
                        width: "100vw",
                        backgroundColor: 'white',
                        boxShadow: 'none',
                        borderRadius: "0px"
                    }}>
                        <CardMedia sx={{
                            width: "100%",
                            height: "30%"
                        }}
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://img.freepik.com/free-vector/cartoon-recipe-note-pack_52683-73979.jpg?size=626&ext=jpg"
                        />
                        <CardContent padding={1}>
                            <Typography gutterBottom variant="h4" component="div">
                                Sopinha de maracarão
                            </Typography>
                            <Typography color={grey[900]} gutterBottom variant="body1" component="div">
                                Geralmente é para o almoço ou jantar
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>

                        <CardActions sx={{
                            mb: '3rem',
                            gap: '2rem'
                        }}>
                            <CardMedia
                                sx={{
                                    height: '4rem',
                                    width: "4rem",
                                    borderRadius: '50%'
                                }} component="img" image="https://img.freepik.com/free-vector/cartoon-recipe-note-pack_52683-73979.jpg?size=626&ext=jpg"
                            />
                            <Stack sx={{ color: orange[500] }}>
                                <Typography variant="body1">
                                    Temotio Luis bernardo
                                </Typography>
                                <Typography variant="body2">
                                    POST: 20/02/2018
                                </Typography>
                            </Stack>
                            <Button variant="contained" startIcon={<AddIcon />}>
                                Seguir o user
                            </Button>
                        </CardActions>
                        <Typography variant="body2" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: "1rem 0.5rem 1rem 1rem",
                            width: '8rem',
                            bgcolor: orange[900],
                            color: "white",
                            fontWeight: '900'
                        }}>
                            IMPORTANTES
                        </Typography >
                        <CardActions sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            paddingTop: 2,
                            gap: '4rem',

                        }}>
                            {[{
                                title: '20m',
                                icon: <AvTimerIcon />

                            }, {
                                title: '300C',
                                icon: <ElectricBoltIcon />
                            }, {
                                title: '1/2P',
                                icon: <PersonAddAlt1Icon />
                            }].map((item) => {
                                return (
                                    <>
                                        <Stack sx={{
                                            color: orange[900],
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            {item.icon}
                                            <Typography variant="h5">
                                                {item.title}
                                            </Typography>
                                        </Stack>
                                    </>
                                )
                            })}

                        </CardActions>
                        <Typography sx={Title} padding={1}>
                            INGREDIENTES
                        </Typography>
                        <Stack sx={{
                            gap: 2,
                            bgcolor: 'trasnparent'
                        }}>
                            <>
                                {[...new Array(4)
                                ].map((i, p) => {
                                    return (
                                        <FormControlLabel sx={checked ? {
                                            textDecoration: 'line-through',
                                            paddingLeft: '1rem',
                                            color: grey[600]
                                        } : {
                                            textDecoration: 'none',
                                            paddingLeft: '3rem'
                                        }} control={<Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                        />} label={'Os ingredientes culinários (sal, açúcar, óleos e gorduras) são aqueles utilizados para temperar e cozinhar alimentos e criar preparações culinárias. Alimentos processados,'} />
                                    )
                                })}
                            </>
                        </Stack>
                    </Card>
                </Tag.Container>
            </>
        )
    }
    return (
        <>
            <Tag.Container>
                Não sei fio
            </Tag.Container>
        </>
    )

}