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
    Logout as LogoutIcon,
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
    Link,
    Fade,
} from '@mui/material'

import * as Tag from './styles'
import Logo from '../../images/logo/logo-menu.png'
import './index.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../App'
import { useContext } from 'react';

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
                link: '/signin'
            },
            { name: 'User Register', icon: <PersonAddIcon /> },
            { name: 'Single Recipe', icon: <RestaurantMenuIcon /> },
            { name: 'Single Video', icon: <PlayCircleIcon /> },
            { name: 'Single Book', icon: <BookmarksIcon /> },
            { name: 'Create Recipe', icon: <BookmarkAddIcon />, link: '/createRecipes' },
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
            { icon: <LogoutIcon />, name: 'Log out', onClick: 'logout' },
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
    icon,
    handleClick,
    handleClose,
    anchorEl,
    children,
    selectedLink,
}) => {
    const { logout } = useContext(AuthContext);
    const isSelected = selectedLink === name
    const handleLinkClick = (link) => {
        if (link.onClick === 'logout') {
            logout(); // Chame a função logout aqui
        } else {
            // Lógica para lidar com outros links
        }
    };
    return (
        <>
            <Stack
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0rem',
                }}
                id="basic-button"
                aria-controls={isSelected ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isSelected ? 'true' : undefined}
                onClick={handleClick}
            >
                <Stack>
                    {icon}
                </Stack>
                <Stack>
                    {name}
                </Stack>
            </Stack>
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
                    children.map((child, index) => (
                        <MenuItem key={index} onClick={() => handleLinkClick(child)}>
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText><Link href={child.link}>{child.name}</Link></ListItemText>
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
    const { logout } = useContext(AuthContext);
    const handleLinkClick = (link) => {
        if (link.onClick === 'logout') {
            logout(); // Chame a função logout aqui
        } else {
            // Lógica para lidar com outros links
        }
    };
    const isSelected = selectedLink === name

    return (
        <>
            <ListItemButton sx={{ color: 'white' }} onClick={handleClick}>
                <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
                <ListItemText primary={name} />
                {isSelected ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isSelected} timeout="auto" unmountOnExit>
                <List sx={{ color: 'white' }} component="div" disablePadding>
                    {children &&
                        children?.length > 0 &&
                        children.map((child) => (
                            <ListItemButton key={child?.name} onClick={() => handleLinkClick(child)} sx={{ pl: 4, borderLeft: '20px solid white' }}>
                                <ListItemIcon>{child.icon}</ListItemIcon>
                                <Link href={child?.link}>
                                    <ListItemText primary={child.name} />
                                </Link>
                            </ListItemButton>
                        ))}
                </List>
            </Collapse>
        </>
    )

    // )
}

export const Links = () => {
    const { logout } = useContext(AuthContext);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [selectedLink, setSelectedLink] = useState()
    const [anchorEl, setAnchorEl] = useState(null)
    useEffect(() => {
        const handleScroll = () => {
            const height = window.scrollY || 0;
            setScrollHeight(height);
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);

            // Limpe o evento de scroll quando o componente for desmontado
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    const handleSelectLink = (event, newLink) => {
        if (selectedLink === newLink) {
            setSelectedLink(null)
            return
        }

        console.log(selectedLink, newLink.onClick);
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
                <Tag.MenuBar sx={scrollHeight > 50 ? {} : { height: '6rem' }}>
                    <Fade in={scrollHeight}>
                        <Box
                            onClick={scrollToTop}
                            role="presentation"
                            sx={{ position: 'fixed', bottom: 16, right: 16 }}
                        >
                            <Fab size="small" aria-label="scroll back to top">
                                <KeyboardArrowUpIcon />
                            </Fab>
                        </Box>
                    </Fade>
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
            <Tag.MenuBar sx={scrollHeight > 50 ? {} : { height: '8rem' }}>
                <Fade in={scrollHeight}>
                    <Box
                        onClick={scrollToTop}
                        role="presentation"
                        sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    >
                        <Fab size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </Box>
                </Fade>
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
}
