import {
  RememberMe as RememberMeIcon,
  Diversity3 as Diversity3Icon,
  Home as HomeIcon,
  Layers as LayersIcon,
  Book as BookIcon,
  Kitchen as KitchenIcon,
  People as PeopleIcon,
  PlayCircle as PlayCircleIcon,
  Bookmarks as BookmarksIcon,
  BookmarkAdd as BookmarkAddIcon,
  Info as InfoIcon,
  Star as StarIcon,
  AlternateEmail as AlternateEmailIcon,
  House as HouseIcon,
  LastPage as LastPageIcon,
  Bookmark as BookmarkIcon,
  EditNote as EditNoteIcon,
  Textsms as TextsmsIcon,
  MarkUnreadChatAlt as MarkUnreadChatAltIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Settings as SettingsIcon,
  Terminal as TerminalIcon,
  TaxiAlert as TaxiAlertIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  DinnerDining as DinnerDiningIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material'
export const links = [
  {
    icon: <HomeIcon />,
    name: 'Home',
    onClick: 'home',
    children: [
      {
        icon: <HouseIcon />,
        name: 'Página principal',
        onClick: 'home',
      },

      { icon: <LastPageIcon />, name: 'Sub página', onClick: 'subPage' },
      {
        icon: <BookmarkIcon />,
        name: 'Receitas favoritas',
        onClick: 'favRecipes',
      },
      { icon: <EditNoteIcon />, name: 'Rascunho', onClick: 'draft' },
    ],
  },
  {
    icon: <LayersIcon />,
    name: 'Pages',
    onClick: 'pages',
    children: [
      { name: 'Top Review', icon: <StarIcon />, link: '/topReview' },
      { name: 'Single Video', icon: <PlayCircleIcon /> },
      { name: 'Single Book', icon: <BookmarksIcon /> },
      { name: 'About us', icon: <InfoIcon /> },
      { name: 'Contacts', icon: <AlternateEmailIcon /> },
    ],
  },
  {
    icon: <KitchenIcon />,
    name: 'Receitas',
    onClick: 'recipes',
    children: [
      {
        name: 'Minhas Receitas',
        icon: <BookIcon />,
        link: '/my-recipes',
      },
      {
        name: 'Receitas Favoritas',
        icon: <FavoriteIcon />,
        link: '/youfavoriteRecipes',
      },

      {
        name: 'Create Recipe',
        icon: <BookmarkAddIcon />,
        link: '/createRecipes',
      },
      { name: 'Gerador de receitas', icon: <DinnerDiningIcon /> },
    ],
  },
  {
    icon: <BookIcon />,
    name: 'Blog',
    onClick: 'blog',
    children: [
      {
        icon: <TextsmsIcon />,
        name: 'Blog 1',
        onClick: 'blog1',
      },

      {
        icon: <MarkUnreadChatAltIcon />,
        name: 'Blog 2',
        onClick: 'blog2',
      },
      {
        icon: <QuestionAnswerIcon />,
        name: 'Blog 3 (Single)',
        onClick: 'blog2',
      },
    ],
  },
  {
    icon: <PeopleIcon />,
    name: 'Comunidade',
    onClick: 'comunidade',
    children: [
      {
        name: 'Comunidade',
        icon: <Diversity3Icon />,
        link: '/comunidade',
        onClick: 'comunidade',
      },
      { name: 'Grupos', icon: <RememberMeIcon /> },
    ],
  },
  {
    icon: <SettingsIcon />,
    name: 'Settings',
    onClick: 'adSettings',
    children: [
      { icon: <TerminalIcon />, name: 'Mode root', onClick: 'root' },
      {
        icon: <AdminPanelSettingsIcon />,
        name: 'Mode admin',
        onClick: 'admin',
      },
      {
        icon: <TaxiAlertIcon />,
        name: 'Red alert mode ',
        onClick: 'Red',
      },
    ],
  },
]
