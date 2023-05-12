import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import LayersIcon from '@mui/icons-material/Layers'
import BookIcon from '@mui/icons-material/Book'
import KitchenIcon from '@mui/icons-material/Kitchen'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import PeopleIcon from '@mui/icons-material/People'
import LoginIcon from '@mui/icons-material/Login'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import InfoIcon from '@mui/icons-material/Info'
import StarIcon from '@mui/icons-material/Star'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
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
        <Tag.ContainLinks
            onClick={handleClick}
            sx={
                !show
                    ? {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          textTransform: 'uppercase',
                          color: 'white',
                          textDecoration: 'none',
                          fontWeight: '700',
                          borderLeft: '10px solid gray',
                          '.iconLnk': {
                              display: 'none',
                          },
                      }
                    : {}
            }
        >
            <Tag.Link>
                <Tag.IconLink className="iconLnk">{icon}</Tag.IconLink>
                <Tag.Aa>
                    <Box>{name}</Box>
                </Tag.Aa>
                <Tag.ShowlinkIcon>
                    {show ? (
                        <ArrowDropDownIcon
                            fontSize="large"
                            sx={{
                                color: 'text.secondary',
                            }}
                        />
                    ) : (
                        <ArrowDropUpIcon
                            sx={{
                                color: 'text.secondary',
                            }}
                            fontSize="large"
                        />
                    )}
                </Tag.ShowlinkIcon>
            </Tag.Link>

            {isSelected && (
                <Tag.SubMenus
                    sx={{
                        color: 'text.secondary',
                        textTransform: 'lowercase',
                    }}
                >
                    {children &&
                        children?.length > 0 &&
                        children.map((child) => (
                            <Tag.Branch>
                                {child.icon} {child.name}
                            </Tag.Branch>
                        ))}
                </Tag.SubMenus>
            )}
        </Tag.ContainLinks>
    )
}

export const Links = () => {
    const ShowLinks = () => {}

    const [selectedLink, setSelectedLink] = useState()

    const handleSelectLink = (newLink) => {
        console.log(newLink)
        setSelectedLink(newLink)
    }

    return (
        <>
            <Tag.Menu_links className="display-block">
                <Tag.Logo variant="h4">
                    <img src={Logo} alt="" />
                </Tag.Logo>
                <Tag.ShowlinkIcon>
                    <MenuIcon fontSize="large" />
                </Tag.ShowlinkIcon>

                <Tag.Links>
                    <Tag.LogoIconMobile
                        direction="row"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                    >
                        <Tag.IconMenu
                            sx={{
                                color: 'text.secondary',
                            }}
                            variant="h4"
                        >
                            <img src={Logo} alt="" />
                        </Tag.IconMenu>
                        <Tag.Div
                            className="none display"
                            sx={{
                                color: 'text.secondary',
                                cursor: 'pointer',
                            }}
                        >
                            <CloseIcon
                                className="closeMenu"
                                onClick={ShowLinks}
                                fontSize="large"
                            />
                        </Tag.Div>
                    </Tag.LogoIconMobile>
                    {links.map((li) => {
                        return (
                            <Links_a
                                key={li.name}
                                {...li}
                                handleClick={() => handleSelectLink(li.name)}
                                selectedLink={selectedLink}
                            />
                        )
                    })}
                </Tag.Links>
            </Tag.Menu_links>
        </>
    )
}
