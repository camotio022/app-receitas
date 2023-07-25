import { AspectRatio, CreateNewFolder, Favorite, LinkedCameraSharp, Visibility } from "@mui/icons-material";
import { CardCover } from "@mui/joy";
import { Avatar, Box, Card, CardMedia, Chip, IconButton, Link, Stack, Typography } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import * as React from 'react';



export const CardRecipes = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: "center",
                width: '100%',
                height: '100%',
                gap: 1,
                bgcolor: 'transparent',
                overflowY: 'scroll',
                "::-webkit-scrollbar-thumb": {
                    overflowY: 'hidden',
                }
            }}>
                {new Array(10).fill(null).map((i, index) => {
                    return (
                        <>
                            <Card
                                key={index}
                                sx={{
                                    height: "30%",
                                    width: 300,
                                    bgcolor: 'initial',
                                    boxShadow: 'none',
                                    '--Card-padding': '0px',
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>

                                    <CardMedia
                                        component="img"
                                        src="https://st2.depositphotos.com/4696193/8271/i/600/depositphotos_82718876-stock-photo-meat-brazilian-barbecue.jpg"
                                        alt="Yosemite by Casey Horner"
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
                                        {/* The first box acts as a container that inherits style from the CardCover */}

                                        <Box>
                                            <Box
                                                sx={{
                                                    p: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1.5,
                                                    flexGrow: 1,
                                                    alignSelf: 'flex-end',
                                                    color: 'white'
                                                }}
                                            >
                                                <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
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
                                                        Yosemite
                                                    </Link>
                                                </Typography>
                                                <IconButton size="sm" color="white" sx={{ ml: 'auto' }}>
                                                    <CreateNewFolder sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton size="sm" color="white">
                                                    <ThumbUpIcon sx={{ color: 'white' }} />
                                                </IconButton>
                                                <IconButton size="sm" color="white">
                                                    <Favorite sx={{ color: 'white' }} />
                                                    <Typography sx={{ color: 'white' }}>10.7K</Typography>
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
        </>
    )
}