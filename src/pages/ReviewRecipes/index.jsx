import {
  Stack,
  Typography,
  Box,
  useMediaQuery,
  Tooltip,
  Link,
  Rating,
  Grid,
  AppBar,
  Tabs,
  Fab,
  Zoom,
  CardMedia,
  Card,
  IconButton,
  Avatar,
} from '@mui/material'
import PropTypes from 'prop-types'
import { green } from '@mui/material/colors'
import Tab from '@mui/material/Tab'
import * as Tag from './index'
import './index.css'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import {
  Forum as ForumIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Image as ImageIcon,
  Folder as FolderIcon,
  NavigateNext as NavigateNextIcon,
  CreateNewFolder,
  Favorite,
  ThumbUp as ThumbUpIcon,
} from '@mui/icons-material'
import { ShowSlider } from '../Home/CAROUSEL'
import { Dashboard } from '../../componentes/BASEBOARD/index.jsx'
import { api } from '../../api'
import { useContext, useEffect, useState } from 'react'
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase.config'
import { AuthContext } from '../../contexts/AuthContext'
import { INTERFACE } from '../INTERFACE/index.jsx'
import { useTheme } from '@emotion/react'
import { CardCover } from '@mui/joy'
import { CircularProgress } from '@mui/material'

function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}
TabPanel.PropTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
}

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
}

export const TopReview = (props) => {
  const { user } = useContext(AuthContext)
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const matches = useMediaQuery('(min-width:700px)')
  const [recipes, setRecipes] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [top, setTop] = useState(false)
  const [itemsPerPage] = useState(10)
  const indexOfLastRecipe = currentPage * itemsPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const obterrecipes = async () => {
    setIsLoading(true)
    try {
      const recipesData = await api.recipe.get()
      setRecipes(recipesData)
    } catch (error) {
      // Lida com erros, se necessário
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {

    obterrecipes()
  }, [])
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
    const fetchImages = async () => {
      const imagesRef = collection(db, 'recipes')
      const imagesSnapshot = await getDocs(imagesRef)
      const imagesData = imagesSnapshot.docs.map((doc) => {
        return {
          url: doc.data().recipeImage,
          title: doc.data().recipeTitle,
        }
      })
      setImageUrls(imagesData)
    }
    fetchImages()
  }, [])
  const fevoritingRecipe = async (recipeId, userId) => {
    if (!recipeId || !userId) return

    try {
      const recipeData = await api.favoriteRecipes.get(recipeId)

      if (!recipeData) {
        console.log('Receita não encontrada')
        return
      }

      const likesCounter = recipeData.likesCounter || []

      if (!likesCounter.includes(userId)) {
        await api.favoriteRecipes.post(recipeId, userId)
        alert('Receita favoritada com sucesso!')
      } else {
        alert('Usuário já favoritou a receita.')
      }
    } catch (error) {
      alert('Erro ao favoritar a receita:', error)
      // Trate o erro de acordo com suas necessidades, por exemplo, exibindo uma mensagem de erro ao usuário.
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
  ]
  return (
    <INTERFACE>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ail: 'center',
          justifyContent: 'center',
  
          width: '100%',
          position: 'relative',
          color: 'red',
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FolderIcon style={{ marginRight: '0.5rem' }} />
                  Folder cards
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ImageIcon style={{ marginRight: '0.5rem' }} />
                  Image cards
                </div>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
        {isLoading ? (
          <Tag.Cards
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress
              variant="indeterminate"
              value={progress}
              size={80}
            />
            <Typography variant="h6" sx={{ marginLeft: '10px' }}>
              {`${progress}%`}
            </Typography>
          </Tag.Cards>
        ) : (
          <Stack
            sx={{ width: '100%' }}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel fullWidth value={value} index={0} dir={theme.direction}>
              <Tag.Cards>
                {currentRecipes.map((recipe) => {
                  return (
                    <Tag.Card key={recipe?.id}>
                      <Stack width={'100%'}>
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
                          <Typography color={'gray'} variant="h6" sx={noWrap}>
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
                            <Stack direction="row" spacing={2}>
                              {
                                <Box color={'#ffa505'}>
                                  <Rating
                                    name={
                                      matches ? 'size-medium' : 'size-large'
                                    }
                                    disabled={recipe.authorId === user.uid}
                                    defaultValue={1}
                                  />
                                </Box>
                              }
                              <Typography variant="p">
                                {recipe?.starsLikedCounter}
                              </Typography>
                            </Stack>

                            <Tag.FavoritingRecipe
                              onClick={() =>
                                fevoritingRecipe(recipe?.id, user?.uid)
                              }
                              title={`Favoritar está receita ${recipe?.recipeTitle}`}
                              followCursor
                            >
                              <FavoriteIcon />
                            </Tag.FavoritingRecipe>
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
                                  style={{
                                    borderRadius: '10px',
                                  }}
                                  src={
                                    recipe?.authorId === user.uid
                                      ? user.photoURL
                                      : recipe?.avatar
                                  }
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
                                {recipe?.authorId === user.uid ? (
                                  <>
                                    <Typography sx={noWrap} variant="subtitle1">
                                      {user.displayName}
                                    </Typography>
                                  </>
                                ) : (
                                  <>
                                    <Typography sx={noWrap} variant="subtitle1">
                                      {recipe?.name}
                                    </Typography>
                                  </>
                                )}

                                <Stack direction="row" spacing={2}>
                                  <Stack direction="row" gap={1}>
                                    <FavoriteIcon
                                      fontSize={matches ? 'small' : 'medium'}
                                    />
                                    233
                                  </Stack>
                                  <Stack spacing={2} gap={1} direction="row">
                                    <ForumIcon
                                      fontSize={matches ? 'small' : 'medium'}
                                    />
                                    {recipe?.commentsCounter}
                                  </Stack>
                                </Stack>
                              </Box>
                            </Tag.Author>
                            <Tag.ReviewScore
                              variant={matches ? 'subtitle1' : 'h4'}
                            >
                              {recipe?.ranking}
                            </Tag.ReviewScore>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Tag.Card>
                  )
                })}
              </Tag.Cards>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  gap: 5,
                  marginBlock: '5rem',
                }}
              >
                {currentRecipes?.map((recipe, index) => {
                  return (
                    <>
                      <Card
                        key={index}
                        sx={{
                          height: '30%',
                          width: 250,
                          bgcolor: 'initial',
                          boxShadow: 'none',
                          '--Card-padding': '0px',
                        }}
                      >
                        <Box sx={{ position: 'relative' }}>
                          <Avatar
                            src={recipe?.recipeImage}
                            sx={{
                              border: '3px solid green',
                              position: 'absolute',
                              mt: 1,
                              ml: 1,
                            }}
                          ></Avatar>
                          <CardMedia
                            component="img"
                            src={
                              recipe?.recipeImage !== null
                                ? recipe?.recipeImage
                                : 'https://cdn.panelinha.com.br/post/1416189600000-Medidores-os-curingas-de-qualquer-cozinha.jpg'
                            }
                            alt={recipe?.recipeTitle}
                          />
                          <CardCover
                            className="gradient-cover"
                            sx={{
                              '&:hover, &:focus-within': {
                                opacity: 1,
                              },
                              opacity: 0,
                              transition: '0.1s ease-in',
                              background:
                                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                            }}
                          >
                            <Box>
                              <Box
                                sx={{
                                  p: 2,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexGrow: 1,
                                  alignSelf: 'flex-end',
                                  color: 'white',
                                }}
                              >
                                <Typography
                                  level="h2"
                                  noWrap
                                  sx={{ fontSize: 'lg' }}
                                >
                                  <Link
                                    href="#dribbble-shot"
                                    overlay
                                    underline="none"
                                    sx={{
                                      color: '#fff',
                                      textOverflow: 'ellipsis',
                                      overflow: 'hidden',
                                      display: 'block',
                                    }}
                                  >
                                    {recipe?.recipeTitle?.split(' ')[0]}
                                  </Link>
                                </Typography>
                                <IconButton
                                  size="sm"
                                  color="white"
                                  sx={{ ml: 'auto' }}
                                >
                                  <CreateNewFolder sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton size="sm" color="white">
                                  <ThumbUpIcon sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton size="sm" color="white">
                                  <Favorite sx={{ color: 'white' }} />
                                  <Typography sx={{ color: 'white' }}>
                                    10.7K
                                  </Typography>
                                </IconButton>
                              </Box>
                            </Box>
                          </CardCover>
                        </Box>
                      </Card>
                    </>
                  )
                })}
              </Box>
            </TabPanel>
          </Stack>
        )}
      </Box>
      <>
        {top && (
          <>
            {recipes.length > itemsPerPage && (
              <Tag.Pagination
                spacing={2}
                sx={{
                  position: 'relative',
                  transition: '.3s',
                  mt: '3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <Pagination
                  count={Math.ceil(recipes.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  renderItem={(item) => <PaginationItem {...item} />}
                />
              </Tag.Pagination>
            )}
          </>
        )}
      </>
    </INTERFACE>
  )
}
