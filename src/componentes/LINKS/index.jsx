


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import BookIcon from '@mui/icons-material/Book';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PeopleIcon from '@mui/icons-material/People';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from "@mui/material";
import * as Tag from "./styles";
import './index.css'
import { useState } from 'react';

const links = [
    {
        icon: <HomeIcon />,
        name: 'Home',
        onClick: 'home',
        elements: {
            HomePage1: 'Página principal',
            HomePage2: 'Sub página',
            HomePage3: 'Receitas favoritas',
            HomePage4: 'Rascunho',
        },
    },
    {
        icon: <LayersIcon />,
        name: 'Pages',
        onClick: 'pages',
        elementsPages: {
            Page1: {
                name: 'User Login',
                icon: <LoginIcon />
            },
            Page2: { name: 'User Register', icon: <PersonAddIcon /> },
            Page3: { name: 'Single Recipe', icon: <RestaurantMenuIcon /> },
            Page4: { name: 'Single Video', icon: <PlayCircleIcon /> },
            Page5: { name: 'Single Book', icon: <BookmarksIcon /> },
            Page6: { name: 'Create Recipe', icon: <BookmarkAddIcon /> },
            Page7: { name: 'About us', icon: <InfoIcon /> },
            Page8: { name: 'Top Review', icon: <StarIcon /> },
            Page9: { name: 'Contacts', icon: <AlternateEmailIcon /> },
        }
    },
    { icon: <KitchenIcon />, name: 'Recitas', onClick: 'recipes' },
    { icon: <BookIcon />, name: 'Blog', onClick: 'blog' },
    { icon: <PeopleIcon />, name: 'Comunidade', onClick: 'community' },
]
export const Links_a = ({
    name, onClick, icon, elements, elementsPages,
}) => {
    const [show, setShow] = useState(true)
    const [home, setHome] = useState(false)
    const [pages, setPages] = useState(false)
    const showSubMenu = () => {
        setShow(!show)
        if (name === 'Home') {
            setHome(!home)
        }
        if (name === 'Pages') {
            setPages(!pages)
        }

    }
    return (
        <>
            <Tag.ContainLinks onClick={showSubMenu} sx={!show ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                textTransform: "uppercase",
                color: 'white',
                textDecoration: 'none',
                fontWeight: '700',
                borderLeft: '10px solid gray',
                '.iconLnk': {
                    display: 'none'
                },
            } : {}}>
                <Tag.Link
                >
                    <Tag.IconLink className='iconLnk'>
                        {icon}
                    </Tag.IconLink>
                    <Tag.Aa to={onClick}>
                        <Box>
                            {name}
                        </Box>
                    </Tag.Aa>
                    <Tag.ShowlinkIcon >
                        {show ? <ArrowDropDownIcon fontSize='large' sx={{
                            color: 'text.secondary'
                        }} /> : <ArrowDropUpIcon sx={{
                            color: 'text.secondary'
                        }} fontSize='large' />}
                    </Tag.ShowlinkIcon>
                </Tag.Link>
                {home &&
                    <Tag.SubMenus sx={{
                        color: 'text.secondary',
                        textTransform: 'lowercase'
                    }}>
                        <Tag.Branch>{elements?.HomePage1}</Tag.Branch>
                        <Tag.Branch>{elements?.HomePage2}</Tag.Branch>
                        <Tag.Branch>{elements?.HomePage3}</Tag.Branch>
                        <Tag.Branch>{elements?.HomePage4}</Tag.Branch>
                    </Tag.SubMenus>
                }
                {pages &&
                    <Tag.SubMenus sx={{
                        color: 'text.secondary',
                        textTransform: 'lowercase'
                    }}>

                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page1?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page1?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page2?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page2?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page3?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page3?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page4?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page4?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page5?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page5?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page6?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page6?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page7?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page7?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page8?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page8?.name}
                            </Box>
                        </Tag.Branch>
                        <Tag.Branch>
                            <Box>
                                {elementsPages?.Page9?.icon}
                            </Box>
                            <Box>
                                {elementsPages?.Page9?.name}
                            </Box>
                        </Tag.Branch>

                    </Tag.SubMenus>
                }
            </Tag.ContainLinks>
        </>
    )
}



export const Links = () => {
    const ShowLinks = () => {

    }
    const openMenu = () => {

    }
    return (
        <>
            <Tag.Menu_links>
                <Tag.Logo variant='h4'>20MinutesOk</Tag.Logo>
                <Tag.ShowlinkIcon >
                    <MenuIcon fontSize='large' onClick={ShowLinks} />
                </Tag.ShowlinkIcon>

                <Tag.Links>
                    <Stack
                        direction='row'
                        display="flex"
                        justifyContent='space-between'
                        alignItems='center'
                        width="100%"
                    >
                        <Tag.IconMenu sx={{
                            color: 'text.secondary'
                        }} variant='h4'>
                            20MinutesOk
                        </Tag.IconMenu>
                        <Tag.IconMenu sx={{
                            color: 'text.secondary',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "flex-end",
                            padding: "0 0.5em"
                        }}>
                            <CloseIcon onClick={ShowLinks} fontSize='large' />
                        </Tag.IconMenu>
                    </Stack>
                    {
                        links.map((li) => {
                            return (

                                <Links_a onClick={openMenu} key={li.name} {...li} />
                            )
                        })
                    }
                </Tag.Links>

            </Tag.Menu_links>
        </>
    )
}