import {
  Folder as FolderIcon,
  Add,
  DinnerDining as DinnerDiningIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material'

export const links = [
  {
    link: '/yourFavoriteRecipes',
    icon: <FavoriteIcon />,
    title: 'Receitas Favoritas',
  },
  {
    link: '/my-recipes',
    icon: <DinnerDiningIcon />,
    title: 'Minhas Receitas',
  },
  {
    link: '/colletions',
    icon: <FolderIcon />,
    title: 'Folder',
  },
  {
    link: '/createRecipe',
    icon: <Add />,
    title: 'Criar uma receita',
  },
]
