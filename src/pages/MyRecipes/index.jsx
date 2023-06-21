import React, { useState, useEffect, useContext } from 'react';
import { api } from '../../api';
import './index.css';
import * as Tag from './index.js'
import { Stack, Typography, Box, useMediaQuery, Tooltip, Link, Rating, Paper, MenuList, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
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
  ContentCut,
  ContentPaste,
  Cloud,
  ContentCopy,
  MoreVert
} from '@mui/icons-material'


import { green, red } from '@mui/material/colors';
import { AuthContext } from '../../contexts/AuthContext';
export const MyRecipes = () => {
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);

  const matches = useMediaQuery('(min-width:700px)')
  const [myRecipes, setMyRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastRecipe = currentPage * itemsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
  const currentRecipes = myRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const [floatingMenu, setFloatingMenu] = useState(null);

  const [handleOptions, setHandleOptions] = useState([]);

  const handleOptionsOP = (index) => {
    const updatedOptions = {};
    for (let i = 0; i < myRecipes.length; i++) {
      updatedOptions[i] = i === index ? !handleOptions[index] : false;
    }
    setHandleOptions(updatedOptions);
  };
  const handleClickOutsideMenu = (index) => {
    setHandleOptions(!handleOptions[index]);
  };
  const deleteRecipe = async (recipeId, recipeName) => {
    if (recipeId) {
      const response = window.prompt(`Tem certeza que deseja apagar permanentemente esta receita? ${recipeName}? Sim ou Não`);
      if (response === 'sim') {
        try {
          await api.myRecipes.delete(recipeId);
          alert('Receita apagada com sucesso!');

        } catch (error) {
          console.error('Erro ao apagar a receita:', error);
          alert('Ocorreu um erro ao apagar a receita. Por favor, tente novamente.');
        }
      } else {
        alert('Ainda bem que não confirmou!');
      }
    }
  };


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const noWrap = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop + windowHeight >= documentHeight) {
      setTop(true)
    } else {
      setTop(false)
    }
  };
  window.addEventListener('scroll', handleScroll);


  useEffect(() => {
    const authorId = user?.uid

    const fetchData = async () => {
      try {
        const myRecipesList = await api.myRecipes.get(authorId);
        setMyRecipes(myRecipesList);
        // Faça algo com a lista de receitas, como atualizar o estado do componente
      } catch (error) {
        console.error('Erro ao buscar as receitas:', error);
      }
    };

    fetchData();
  }, []);
  if (currentRecipes.length === 0) {
    return (
      <Tag.Wrapper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant='h3'>
          Carregando...
        </Typography>
      </Tag.Wrapper>
    )
  }
  return (
    <Tag.Wrapper >
      <Typography>
      </Typography>
      <Tag.Container id="scrollHeithg">
        <Tag.HeaderView textAlign={'center'} width={'100%'}>
          <Tag.Title sx={{
            letterSpacing: "-1px",
            fontWeight: 700,
            marginBottom: 0,
            color: 'text-primary',
          }} variant="h5">Minhas receitas</Tag.Title>
          <Typography variant="p">
            Aqui estão todas a receitas que você criou
          </Typography>
        </Tag.HeaderView>
        <Tag.Cards>
          {currentRecipes.map((recipe, index) => {
            return (
              <>
                <Tag.Card key={index}>

                  <Stack width={'100%'}>
                    <Stack
                      sx={{ position: 'absolute', width: '3rem', height: "3rem", color: red[900], bgcolor: "white", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MoreVert
                        onClick={() => handleOptionsOP(index)}
                      />
                    </Stack>
                    <Tooltip
                      sx={{ cursor: 'pointer' }}
                      title={`Ir para os detalhes  ${recipe?.recipeTitle}`}
                      followCursor
                    >
                      <img className="img" src={recipe?.recipeImage} alt="" />
                    </Tooltip>
                    <Stack padding={2} spacing={2}>
                      <Typography color={'gray'} variant="h6" sx={noWrap}>
                        <Link href={`/detailsRecipes/${recipe?.id}`} color='inherit' underline="hover">
                          {recipe?.recipeTitle}
                        </Link>
                      </Typography>
                      <Stack direction="row" justifyContent={'space-between'}>
                        <Stack direction="row" spacing={2}>
                          <Box color={'#ffa505'}>
                            <Rating
                              name={matches ? 'size-medium' : 'size-large'} defaultValue={1} />

                          </Box>
                          <Typography variant="p">
                            {recipe?.starsLikedCounter}
                          </Typography>
                          <Box>
                            {handleOptions[index] &&
                              <Tag.Options>
                                <Tag.PaperOptions className={`floating-menu ${floatingMenu === index ? 'open' : ''}`}>
                                  <MenuList>
                                    <MenuItem>
                                      <ListItemIcon>
                                        <DetailsIcon fontSize="small" />
                                      </ListItemIcon>
                                      <ListItemText>Detalhar</ListItemText>
                                      <Typography variant="body2" color="text.secondary">
                                        Control + V
                                      </Typography>
                                    </MenuItem>
                                    <MenuItem>
                                      <ListItemIcon>
                                        <EditIcon fontSize="small" />
                                      </ListItemIcon>
                                      <ListItemText>Editar minha receita</ListItemText>
                                      <Typography variant="body2" color="text.secondary">
                                        Control + E
                                      </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => deleteRecipe(recipe?.id, recipe?.recipeTitle)} sx={{ color: red[500] }}>
                                      <ListItemIcon>
                                        <DeleteIcon sx={{ color: red[500] }} fontSize="small" />
                                      </ListItemIcon>
                                      <ListItemText>Deletar a receita</ListItemText>
                                      <Typography variant="body2" color="text.secondary">
                                        Control + D
                                      </Typography>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={() => handleClickOutsideMenu(index)}>
                                      <ListItemIcon>
                                        <CloseIcon fontSize="small" />
                                      </ListItemIcon>
                                      <ListItemText>Fechar o menu</ListItemText>
                                    </MenuItem>
                                  </MenuList>
                                </Tag.PaperOptions>
                              </Tag.Options>
                            }
                          </Box>
                        </Stack>
                      </Stack>
                      <Stack
                        spacing={1}
                        borderTop={'0.1rem solid #f5f5f5f5'}
                        direction="row"
                        width={'100%'}
                        justifyContent="space-between"
                      >
                        <Tag.Author>
                          <Tag.AuthorImage>
                            <img
                              style={{ borderRadius: '10px' }}
                              src={user?.photoURL}
                              alt=""
                            />
                          </Tag.AuthorImage>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              flexDirection: 'column',
                              height: '100%',
                              fontSize: '13px',
                              color: '#565656',
                            }}
                            id="info"
                          >
                            <Typography sx={noWrap} variant="subtitle1">
                              {user?.displayName}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                              <Stack direction="row" gap={1}>
                                <FavoriteIcon
                                  fontSize={
                                    matches ? 'small' : 'medium'
                                  }
                                />
                                233
                              </Stack>
                              <Stack
                                spacing={2}
                                gap={1}
                                direction="row"
                              >
                                <ForumIcon
                                  fontSize={
                                    matches ? 'small' : 'medium'
                                  }
                                />
                                {recipe?.commentsCounter}
                              </Stack>
                            </Stack>
                          </Box>
                        </Tag.Author>
                        <Tag.ReviewScore
                          variant={matches ? 'subtitle1' : 'h4'}
                        >
                          {recipe?.reviewScore}
                        </Tag.ReviewScore>
                      </Stack>
                    </Stack>
                  </Stack >
                </Tag.Card>

              </>
            )
          })}
        </Tag.Cards>
        {/* Paginação */}
        {/* <Dashboard /> */}
      </Tag.Container >
      {top && <> {
        myRecipes.length > itemsPerPage && (
          <Tag.Pagination spacing={2} sx={{ transition: '.3s', mt: "3" }}>
            <Pagination
              count={Math.ceil(currentRecipes.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                />
              )}
            />
          </Tag.Pagination>
        )
      }</>}
    </Tag.Wrapper >
  )

}