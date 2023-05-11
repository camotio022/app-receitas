


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
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from "@mui/material";
import * as Tag from "./styles";
import './index.css'
import { useState } from 'react';

const links = [
    { icon: <HomeIcon />, name: 'Home', href: '' },
    { icon: <LayersIcon />, name: 'Pages', href: '' },
    { icon: <KitchenIcon />, name: 'Recitas', href: '' },
    { icon: <BookIcon />, name: 'Blog', href: '' },
    { icon: <PeopleIcon />, name: 'Comunidade', href: '' },
]
export const Links_a = ({
    name, href, icon
}) => {
    const[show, setShow] = useState(true)
    const showIcon =()=> {
        setShow(!show)
    }
    return (
        <Tag.Link onClick={showIcon}>
            <Tag.IconLink className='iconLnk'>
                {icon}
            </Tag.IconLink>
            <Tag.Aa to={href}>
                <Box>
                    {name}
                </Box>
            </Tag.Aa>
            <Tag.ShowlinkIcon >
                {show?<ArrowDropDownIcon fontSize='large' sx={{
                    color: 'text.secondary'
                }} />: <ArrowDropUpIcon fontSize='large' sx={{
                    color: 'green'
                }}/>}
            </Tag.ShowlinkIcon>
        </Tag.Link>
    )
}



export const Links = () => {
    const ShowLinks = () => {

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

                                    <Links_a key={li.name} {...li} />
                                )
                            })
                        }
                </Tag.Links>

            </Tag.Menu_links>
        </>
    )
}