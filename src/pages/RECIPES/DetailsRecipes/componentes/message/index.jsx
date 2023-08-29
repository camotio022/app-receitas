import {
    Avatar,
    Box,
    IconButton, Stack, Tooltip, Typography,
} from '@mui/material'
import React from 'react'
import { Reply, ThumbUpAlt } from '@mui/icons-material';
export const Message = ({ avatar, message, name, avaH, avaW, marginLeft, color, varinatM, date }) => {
    return (<>
        <Stack sx={{
            bgcolor: color, marginLeft: marginLeft
        }}>
            <Box display="flex" alignItems="center" >
                <IconButton size="small">
                    <Reply />
                </IconButton>
                <IconButton size="small">
                    <Avatar src={avatar} sx={{ width: avaW, height: avaH }} />
                </IconButton>
                <Typography variant={"caption"}>{name}</Typography>
            </Box >
            <Typography variant={varinatM}>{message}</Typography>
            <Box className={'option'} sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "centeer",
                gap: '1rem',
                height: "2rem",
            }} alignItems="center" >
                <Typography variant={"caption"}>{date}</Typography>
                <Tooltip title="Curtir">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton size="small">
                            <ThumbUpAlt />
                        </IconButton>
                        <Typography variant="caption">0 curtidas</Typography>
                    </Stack>
                </Tooltip>
                <Typography variant={"caption"}>Responder</Typography>
            </Box >
        </Stack >
    </>)
}