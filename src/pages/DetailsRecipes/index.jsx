import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, FormControlLabel, FormGroup, Link, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material"

import { useParams } from 'react-router-dom';







import {
    ArrowBack as ArrowBackIcon,
    AvTimer as AvTimerIcon,
    ElectricBolt as ElectricBoltIcon,
    PersonAddAlt1 as PersonAddAlt1Icon,
    Add as AddIcon

} from '@mui/icons-material'


import * as Tag from './index.js'
import { grey, orange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { api } from "../../api/index.js";
export const DetailsRecipes = () => {
    const { id } = useParams();

    const [recipe, setrecipe] = useState(null);
    const [ingredientes, setingredientes] = useState([]);
    const [modopreparo, setmodopreparo] = useState([]);
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
    const [checkedItems, setCheckedItems] = useState(Array(5).fill(false));
    useEffect(() => {
        // Recupere os detalhes do usuário do Firebase com base no ID fornecido
        const obterDetalhesrecipe = async () => {
            const doc = await api.recipe.get(id)
            const docIngredientes = await api.ingredientes.get(id)
            const getModosPre = await api.modopreparo.get(id)
            if (doc) {
                setrecipe(doc)
                docIngredientes.map((i) => {
                    return (
                        setingredientes(i?.description)
                    )
                })
                getModosPre.map((i) => {
                    return (
                        setmodopreparo(i?.description)
                    )
                })
            }
        };

        obterDetalhesrecipe();
    }, [id]);
    const handleChange = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };
    if (!recipe) {
        return <>
            <Tag.Container>
                <p>Carregando...</p>
                <Stack>
                    {recipe?.tempo}
                </Stack>
            </Tag.Container>
        </>
    }

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
                            {recipe?.titleRecipe}
                        </Typography>
                        <Typography color={grey[900]} gutterBottom variant="body1" component="div">
                            Geralmente é para o almoço ou jantar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {recipe?.description}
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
                                {recipe?.userName}
                            </Typography>
                            <Typography variant="body2">
                                POST: {recipe?.dataPost}
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
                            title: recipe?.tempo,
                            icon: <AvTimerIcon />

                        }, {
                            title: recipe?.calories,
                            icon: <ElectricBoltIcon />
                        }, {
                            title: recipe?.porcoes,
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
                            {ingredientes?.description}

                            {ingredientes.length > 0 && ingredientes.map((ingredient, index) => {
                                return (
                                    <FormControlLabel key={index} sx={checkedItems[index] ? {
                                        textDecoration: 'line-through',
                                        paddingLeft: '1rem',
                                        color: grey[600]
                                    } : {
                                        textDecoration: 'none',
                                        paddingLeft: '3rem'
                                    }} control={<Checkbox
                                        checked={checkedItems[index]}
                                        onChange={() => handleChange(index)}
                                    />} label={ingredient || ''} />
                                )
                            })}

                        </>
                    </Stack>
                    <Typography sx={Title} padding={1}>
                        MODOS DE PREPARO
                    </Typography>
                    <Stack sx={{
                        display:'flex',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: 'trasnparent'
                    }}>
                        <>
                            <Stack width={"80%"}>
                                {modopreparo.length > 0 && modopreparo.map((p, index) => {
                                    return (
                                        <ul key={index}>
                                            <li>{p}</li>
                                        </ul>
                                    )
                                })}
                            </Stack>
                        </>
                    </Stack>
                </Card>
            </Tag.Container>
        </>
    )

}


