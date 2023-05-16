import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
    Menu as MenuIcon,
    MenuOpen as MenuOpenIcon,
    Close as CloseIcon,
    Home as HomeIcon,
    Layers as LayersIcon,
    Book as BookIcon,
    Kitchen as KitchenIcon,
    Beenhere as BeenhereIcon,
    People as PeopleIcon,
    Login as LoginIcon,
    PersonAdd as PersonAddIcon,
    RestaurantMenu as RestaurantMenuIcon,
    PlayCircle as PlayCircleIcon,
    Bookmarks as BookmarksIcon,
    BookmarkAdd as BookmarkAddIcon,
    Info as InfoIcon,
    Star as StarIcon,
    AlternateEmail as AlternateEmailIcon,
    Inbox as InboxIcon,
    Drafts as DraftsIcon,
    Send as SendIcon,
    ExpandLess,
    ExpandMore,
    StarBorder,
} from '@mui/icons-material'

import {
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Box,
    Stack,
    Typography,
    useMediaQuery,
    Button,
    Menu,
    MenuItem,
} from '@mui/material'

import { Link } from 'react-router-dom'

import * as Tag from './styles'
import Logo from '../../images/logo/logo-menu.png'
import './index.css'
import { useState } from 'react'

const links = [
    {
        icon: <HomeIcon />,
        name: 'Home',
        onClick: 'home',
        children: [
            {
                icon: '',
                name: 'Página principal',
                onClick: 'home',
            },

            { icon: '', name: 'Sub página', onClick: 'subPage' },
            { icon: '', name: 'Receitas favoritas', onClick: 'favRecipes' },
            { icon: '', name: 'Rascunho', onClick: 'draft' },
        ],
    },
    {
        icon: <LayersIcon />,
        name: 'Pages',
        onClick: 'pages',
        children: [
            {
                name: 'User Login',
                icon: <LoginIcon />,
            },
            { name: 'User Register', icon: <PersonAddIcon /> },
            { name: 'Single Recipe', icon: <RestaurantMenuIcon /> },
            { name: 'Single Video', icon: <PlayCircleIcon /> },
            { name: 'Single Book', icon: <BookmarksIcon /> },
            { name: 'Create Recipe', icon: <BookmarkAddIcon /> },
            { name: 'About us', icon: <InfoIcon /> },
            { name: 'Top Review', icon: <StarIcon /> },
            { name: 'Contacts', icon: <AlternateEmailIcon /> },
        ],
    },
    { icon: <KitchenIcon />, name: 'Recitas', onClick: 'recipes' },
    { icon: <BookIcon />, name: 'Blog', onClick: 'blog' },
    { icon: <PeopleIcon />, name: 'Comunidade', onClick: 'community' },
]

const Links_b = ({
    name,
    handleClick,
    handleClose,
    anchorEl,
    icon,
    children,
    selectedLink,
}) => {
    const isSelected = selectedLink === name

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={isSelected ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isSelected ? 'true' : undefined}
                onClick={handleClick}
            >
                {name}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={isSelected}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {children?.length > 0 &&
                    children.map((child) => (
                        <MenuItem onClick={handleClick}>
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText>{child.name}</ListItemText>
                        </MenuItem>
                    ))}
            </Menu>
        </>
    )
}

export const Links_a = ({
    name,
    handleClick,
    icon,
    children,
    selectedLink,
}) => {
    const [show, setShow] = useState(true)

    const isSelected = selectedLink === name

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
                {isSelected ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isSelected} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children &&
                        children?.length > 0 &&
                        children.map((child) => (
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>{child.icon}</ListItemIcon>
                                <ListItemText primary={child.name} />
                            </ListItemButton>
                        ))}
                </List>
            </Collapse>
        </>
    )

    // )
}

export const Links = () => {
    const [selectedLink, setSelectedLink] = useState()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleSelectLink = (event, newLink) => {
        if (selectedLink === newLink) {
            setSelectedLink(null)
            return
        }
        setSelectedLink(newLink)
        setAnchorEl(event.target)
    }

    const handleClose = () => {
        setSelectedLink(null)
        setAnchorEl(null)
    }

    const [showLinks, setShowLinks] = useState(false)

    const matches = useMediaQuery('(min-width:700px)')
    const matchesMobileSmall = useMediaQuery('(min-width:550px)')
    if (matches) {
        return (
            <Tag.MenuBar>
                <Stack>
                    <img src={Logo} alt="" />
                </Stack>
                {links.map((li) => (
                    <Links_b
                        key={li.name}
                        {...li}
                        handleClose={handleClose}
                        handleClick={(event) =>
                            handleSelectLink(event, li.name)
                        }
                        selectedLink={selectedLink}
                        anchorEl={anchorEl}
                    />
                ))}
            </Tag.MenuBar>
        )
    }

    return (
        <>
            <Tag.MenuBar>
                <Stack>
                    <img src={Logo} alt="" />
                </Stack>
                <Stack>
                    {!showLinks?<MenuIcon onClick={(e)=>setShowLinks(!showLinks)}/>:
                    <MenuOpenIcon onClick={(e)=>setShowLinks(!showLinks)}/>}
                </Stack>
            </Tag.MenuBar>
            {showLinks && <Tag.MinhaLista sx={{
                width: !matchesMobileSmall? '100%': '60%',
            }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <Tag.ListSub sx={{
                        justifyContent: !matchesMobileSmall? "space-between": 'flex-start'
                    }} component="div" id="nested-list-subheader">
                        <img src={Logo} alt="" />
                        {!matchesMobileSmall&&<CloseIcon onClick={(e)=>setShowLinks(!showLinks)}/>}
                    </Tag.ListSub>
                }
            >
                {links.map((li) => {
                    return (
                        <Links_a
                            key={li.name}
                            {...li}
                            handleClick={(event) =>
                                handleSelectLink(event, li.name)
                            }
                            selectedLink={selectedLink}
                        />
                    )
                })}
            </Tag.MinhaLista>}
        </>
    )

    // )
}
