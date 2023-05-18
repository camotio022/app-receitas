import {
    KeyboardArrowUp as KeyboardArrowUpIcon,
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
    House as HouseIcon,
    LastPage as LastPageIcon,
    Bookmark as BookmarkIcon,
    EditNote as EditNoteIcon,
    Textsms as TextsmsIcon,
    MarkUnreadChatAlt as MarkUnreadChatAltIcon,
    QuestionAnswer as QuestionAnswerIcon,
    Settings as SettingsIcon,
    Block as BlockIcon,
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
    useScrollTrigger,
    Slide,
    Fab,
    Fade,
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
                icon: <HouseIcon />,
                name: 'Página principal',
                onClick: 'home',
            },

            { icon: <LastPageIcon />, name: 'Sub página', onClick: 'subPage' },
            { icon: <BookmarkIcon />, name: 'Receitas favoritas', onClick: 'favRecipes' },
            { icon: <EditNoteIcon />, name: 'Rascunho', onClick: 'draft' },
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

            { icon: <MarkUnreadChatAltIcon />, name: 'Blog 2', onClick: 'blog2' },
            { icon: <QuestionAnswerIcon />, name: 'Blog 3 (Single)', onClick: 'blog2' },
        ],
    },
    { icon: <PeopleIcon />, name: 'Comunidade', onClick: 'community' },
    {
        icon: <SettingsIcon />, name: 'Advanced settings', onClick: 'adSettings',
        children: [

            { icon: '', name: 'Mode root', onClick: 'root' },
            { icon: '', name: 'Mode admin', onClick: 'admin' },
            { icon: '', name: 'Red alert mode ', onClick: 'Red' },
            {
                icon: <BlockIcon sx={{ color: '#CD5C5C' }} />,
                name: 'Delete account',
                onClick: 'deleaccont',
            },
        ],
    }
]

const Links_b = ({
    name,
    handleClick,
    handleClose,
    anchorEl,
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
                        <MenuItem key={child.name} onClick={handleClick}>
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

document.querySelector('#wrapper')?.addEventListener('scroll', (scroll) => {
    console.log('Scroll bar', scroll)
})
function ScrollTop({ children, window }) {

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    )
}
const handleClick = (event) => {

};
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
            <>
                <ScrollTop>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
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
            </>
        )
    }

    return (
        <Box>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <Tag.MenuBar>
                <Stack>
                    <img src={Logo} alt="" />
                </Stack>
                <Stack>
                    {!showLinks ? (
                        <MenuIcon
                            onClick={(e) => setShowLinks(!showLinks)}
                        />
                    ) : (
                        <MenuOpenIcon
                            onClick={(e) => setShowLinks(!showLinks)}
                        />
                    )}
                </Stack>
            </Tag.MenuBar>
            {showLinks && (
                <Tag.MinhaLista
                    sx={{
                        width: !matchesMobileSmall ? '100%' : '60%',
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <Tag.ListSub
                            sx={{
                                justifyContent: !matchesMobileSmall
                                    ? 'space-between'
                                    : 'flex-start',
                            }}
                            component="div"
                            id="nested-list-subheader"
                        >
                            <img src={Logo} alt="" />
                            {!matchesMobileSmall && (
                                <CloseIcon
                                    onClick={(e) =>
                                        setShowLinks(!showLinks)
                                    }
                                />
                            )}
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
                </Tag.MinhaLista>
            )}
        </Box>

    )

    // )
}
