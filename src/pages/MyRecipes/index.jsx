import React, { useState, useEffect, useContext } from 'react'
import { api } from '../../api'
import './index.css'
import * as Tag from './index.js'
import {
    Stack,
    Typography,
    Box,
    useMediaQuery,
    Tooltip,
    Link,
    Rating,
    Paper,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Pagination,
    PaginationItem,
    Avatar,
    CircularProgress,
    AppBar,
    Tab,
} from '@mui/material'
import {
    Forum as ForumIcon,
    Favorite as FavoriteIcon,
    Star as StarIcon,
    NavigateNext as NavigateNextIcon,
    Close as CloseIcon,
    MoreVert as MoreVertIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Details as DetailsIcon,
    Folder as FolderIcon,
    Image as ImageIcon,
    Add as AddIcon,
    ContentCut,
    ContentPaste,
    Cloud,
    ContentCopy,
    MoreVert,
} from '@mui/icons-material'
import PropTypes from 'prop-types';
import { green, orange, red } from '@mui/material/colors'
import { AuthContext } from '../../contexts/AuthContext'
import { INTERFACE } from '../INTERFACE/index.jsx'
import { Tabs } from '@mui/base'
import { useTheme } from '@emotion/react'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Typography>
    );
}
TabPanel.PropTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
        bgcolor: green[600],
    },
};

export const MyRecipes = () => {
    const { user } = useContext(AuthContext)
    const matches = useMediaQuery('(min-width:700px)')
    const theme = useTheme();
    const [value, setValue] = useState(0)
    const [myRecipes, setMyRecipes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const indexOfLastRecipe = currentPage * itemsPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
    const currentRecipes = myRecipes.slice(
        indexOfFirstRecipe,
        indexOfLastRecipe
    )
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);


    const [floatingMenu, setFloatingMenu] = useState(null)

    const [handleOptions, setHandleOptions] = useState([])

    const handleOptionsOP = (index) => {
        const updatedOptions = {}
        for (let i = 0; i < myRecipes.length; i++) {
            updatedOptions[i] = i === index ? !handleOptions[index] : false
        }
        setHandleOptions(updatedOptions)
    }
    const handleClickOutsideMenu = (index) => {
        setHandleOptions(!handleOptions[index])
    }
    const deleteRecipe = async (recipeId, recipeName) => {
        if (recipeId) {
            const response = window.prompt(
                `Tem certeza que deseja apagar permanentemente esta receita? ${recipeName}? Sim ou Não`
            )
            if (response === 'sim') {
                try {
                    await api.myRecipes.delete(recipeId)
                    alert('Receita apagada com sucesso!')
                } catch (error) {
                    console.error('Erro ao apagar a receita:', error)
                    alert(
                        'Ocorreu um erro ao apagar a receita. Por favor, tente novamente.'
                    )
                }
            } else {
                alert('Ainda bem que não confirmou!')
            }
        }
    }

    const handlePageChange = (event, page) => {
        setCurrentPage(page)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 50));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const noWrap = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }
    const handleScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
        if (scrollTop + windowHeight >= documentHeight) {
            setTop(true)
        } else {
            setTop(false)
        }
    }
    window.addEventListener('scroll', handleScroll)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const myRecipesList = await api.myRecipes.get(user.uid)
                console.log(myRecipesList)
                setMyRecipes(myRecipesList)
                // Faça algo com a lista de receitas, como atualizar o estado do componente
            } catch (error) {
                console.error('Erro ao buscar as receitas:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <INTERFACE RENDERPAGE={
            <>
                <AppBar sx={{
                    width: '100%', display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',


                        }} label={
                            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                <FolderIcon style={{ marginRight: '0.5rem' }} />
                                MINHAS RECEITAS
                            </div>
                        } {...a11yProps(0)} />
                    </Tabs>
                </AppBar>
                {
                    isLoading ? <>
                        <Tag.Cards sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <CircularProgress variant="indeterminate" value={progress} size={80} />
                            <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                                {`${progress}%`}
                            </Typography>
                        </Tag.Cards>
                    </> :
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Tag.Cards>
                                {currentRecipes.map((recipe, index) => {
                                    return (
                                        <>
                                            <Tag.Card key={index}>
                                                <Stack width={'100%'}>
                                                    <Stack
                                                        sx={{
                                                            position: 'absolute',
                                                            width: '3rem',
                                                            height: '3rem',
                                                            color: red[900],
                                                            bgcolor: 'white',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <MoreVert
                                                            onClick={() =>
                                                                handleOptionsOP(index)
                                                            }
                                                        />
                                                    </Stack>
                                                    <Tooltip
                                                        sx={{ cursor: 'pointer' }}
                                                        title={`Ir para os detalhes  ${recipe?.recipeTitle}`}
                                                        followCursor
                                                    >
                                                        <img
                                                            className="img"
                                                            src={recipe?.recipeImage}
                                                            alt=""
                                                        />
                                                    </Tooltip>
                                                    <Stack padding={2} spacing={2}>
                                                        <Typography
                                                            color={'gray'}
                                                            variant="h6"
                                                            sx={noWrap}
                                                        >
                                                            <Link
                                                                href={`/detailsRecipes/${recipe?.id}`}
                                                                color="inherit"
                                                                underline="hover"
                                                            >
                                                                {recipe?.recipeTitle}
                                                            </Link>
                                                        </Typography>
                                                        <Stack
                                                            direction="row"
                                                            justifyContent={'space-between'}
                                                        >
                                                            <Stack
                                                                direction="row"
                                                                spacing={2}
                                                            >
                                                                <Box color={'#ffa505'}>
                                                                    <Rating
                                                                        name={
                                                                            matches
                                                                                ? 'size-medium'
                                                                                : 'size-large'
                                                                        }
                                                                        disabled
                                                                        defaultValue={1}
                                                                    />
                                                                </Box>
                                                                <Typography variant="p">
                                                                    {
                                                                        recipe?.starsLikedCounter
                                                                    }
                                                                </Typography>
                                                                <Box>
                                                                    {handleOptions[
                                                                        index
                                                                    ] && (
                                                                            <Tag.Options>
                                                                                <Tag.PaperOptions
                                                                                    className={`floating-menu ${floatingMenu ===
                                                                                        index
                                                                                        ? 'open'
                                                                                        : ''
                                                                                        }`}
                                                                                >
                                                                                    <MenuList>
                                                                                        <MenuItem>
                                                                                            <ListItemIcon>
                                                                                                <DetailsIcon fontSize="small" />
                                                                                            </ListItemIcon>
                                                                                            <ListItemText>
                                                                                                Detalhar
                                                                                            </ListItemText>
                                                                                            <Typography
                                                                                                variant="body2"
                                                                                                color="text.secondary"
                                                                                            >
                                                                                                Control
                                                                                                +
                                                                                                V
                                                                                            </Typography>
                                                                                        </MenuItem>
                                                                                        <Link href={`/editerecipes/${recipe?.id}`}>
                                                                                            <MenuItem >
                                                                                                <ListItemIcon>
                                                                                                    <EditIcon fontSize="small" />
                                                                                                </ListItemIcon>
                                                                                                <ListItemText>
                                                                                                    Editar
                                                                                                    minha
                                                                                                    receita
                                                                                                </ListItemText>
                                                                                                <Typography
                                                                                                    variant="body2"
                                                                                                    color="text.secondary"
                                                                                                >
                                                                                                    Control
                                                                                                    +
                                                                                                    E
                                                                                                </Typography>
                                                                                            </MenuItem>
                                                                                        </Link>
                                                                                        <MenuItem
                                                                                            onClick={() =>
                                                                                                deleteRecipe(
                                                                                                    recipe?.id,
                                                                                                    recipe?.recipeTitle
                                                                                                )
                                                                                            }
                                                                                            sx={{
                                                                                                color: red[500],
                                                                                            }}
                                                                                        >
                                                                                            <ListItemIcon>
                                                                                                <DeleteIcon
                                                                                                    sx={{
                                                                                                        color: red[500],
                                                                                                    }}
                                                                                                    fontSize="small"
                                                                                                />
                                                                                            </ListItemIcon>
                                                                                            <ListItemText>
                                                                                                Deletar
                                                                                                a
                                                                                                receita
                                                                                            </ListItemText>
                                                                                            <Typography
                                                                                                variant="body2"
                                                                                                color="text.secondary"
                                                                                            >
                                                                                                Control
                                                                                                +
                                                                                                D
                                                                                            </Typography>
                                                                                        </MenuItem>
                                                                                        <Divider />
                                                                                        <MenuItem
                                                                                            onClick={() =>
                                                                                                handleClickOutsideMenu(
                                                                                                    index
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            <ListItemIcon>
                                                                                                <CloseIcon fontSize="small" />
                                                                                            </ListItemIcon>
                                                                                            <ListItemText>
                                                                                                Fechar
                                                                                                o
                                                                                                menu
                                                                                            </ListItemText>
                                                                                        </MenuItem>
                                                                                    </MenuList>
                                                                                </Tag.PaperOptions>
                                                                            </Tag.Options>
                                                                        )}
                                                                </Box>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack
                                                            spacing={1}
                                                            borderTop={
                                                                '0.1rem solid #f5f5f5f5'
                                                            }
                                                            direction="row"
                                                            width={'100%'}
                                                            justifyContent="space-between"
                                                        >
                                                            <Tag.Author>
                                                                <Tag.AuthorImage>
                                                                    <Avatar sx={{ bgcolor: orange[500] }} alt={recipe?.name} src={user?.photoURL} />
                                                                </Tag.AuthorImage>
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        alignItems:
                                                                            'flex-start',
                                                                        justifyContent:
                                                                            'space-between',
                                                                        flexDirection:
                                                                            'column',
                                                                        height: '100%',
                                                                        fontSize: '13px',
                                                                        color: '#565656',
                                                                    }}
                                                                    id="info"
                                                                >
                                                                    <Typography
                                                                        sx={noWrap}
                                                                        variant="subtitle1"
                                                                    >
                                                                        {user?.displayName}
                                                                    </Typography>
                                                                    <Stack
                                                                        direction="row"
                                                                        spacing={2}
                                                                    >
                                                                        <Stack
                                                                            direction="row"
                                                                            gap={1}
                                                                        >
                                                                            <FavoriteIcon
                                                                                fontSize={
                                                                                    matches
                                                                                        ? 'small'
                                                                                        : 'medium'
                                                                                }
                                                                            />
                                                                            {recipe?.favoritesCounter}
                                                                        </Stack>
                                                                        <Stack
                                                                            spacing={2}
                                                                            gap={1}
                                                                            direction="row"
                                                                        >
                                                                            <ForumIcon
                                                                                fontSize={
                                                                                    matches
                                                                                        ? 'small'
                                                                                        : 'medium'
                                                                                }
                                                                            />
                                                                            {
                                                                                recipe?.commentsCounter
                                                                            }
                                                                        </Stack>
                                                                    </Stack>
                                                                </Box>
                                                            </Tag.Author>
                                                            <Tag.ReviewScore
                                                                variant={
                                                                    matches
                                                                        ? 'subtitle1'
                                                                        : 'h4'
                                                                }
                                                            >
                                                                {recipe?.ranking}
                                                            </Tag.ReviewScore>
                                                        </Stack>
                                                    </Stack>
                                                </Stack>
                                            </Tag.Card>
                                        </>
                                    )
                                })}
                            </Tag.Cards>
                        </TabPanel>
                }

                {top && (
                    <>
                        {' '}
                        {myRecipes.length > itemsPerPage && (
                            <Tag.Pagination
                                spacing={2}
                                sx={{ transition: '.3s', mt: '3' }}
                            >
                                <Pagination
                                    count={Math.ceil(
                                        currentRecipes.length / itemsPerPage
                                    )}
                                    page={currentPage}
                                    onChange={handlePageChange}
                                    renderItem={(item) => (
                                        <PaginationItem {...item} />
                                    )}
                                />
                            </Tag.Pagination>
                        )}
                    </>
                )}



            </>
        } />

    )
}
