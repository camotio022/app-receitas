import {
    Avatar,
    Box,
    Grid,
    IconButton, Stack, TextField, Tooltip, Typography,
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { Reply, Send, ThumbUpAlt } from '@mui/icons-material';
import { api_comments } from '../../../../../api/usersComments';
import { LoadingButton } from '@mui/lab';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthContext';
export const Message = ({
    isReply,
    avatar,
    message,
    name,
    avaH,
    avaW,
    marginLeft,
    color,
    varinatM,
    date,
    id,
    likesCounter,
    defaultComment,
    index
}) => {
    const { user } = useContext(AuthContext);
    const [newComment, setNewComment] = useState('')
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open);
    }
    const postReply = async (id, userId, newComment, date, index) => {
        if (!id, !userId, !newComment, !date) return
        setLoading(true)
        if (defaultComment) {
            try {
                await api_comments.comments.postReplys(id, userId, newComment, date)
                handleClick()
                setLoading(false)
            } catch (err) {
                console.error(err)
            }
        } else {
            alert(index)
            setLoading(false)
        }
    }
    const postLikesCounter = async (id, userId) => {
        if (!id, !userId) return
        try {
            await api_comments.comments.postLikesCounter(id, userId)
        } catch (err) {
            console.error(err)
        }
    }
    return (<>
        <Stack sx={{
            bgcolor: color, marginLeft: marginLeft,
            transition: "all .3s",
        }}>
            <Box display="flex" alignItems="center" >
                {isReply && <IconButton size="small">
                    <Reply />
                </IconButton>}
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
                <Tooltip title="Curtir">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton size="small">
                            <ThumbUpAlt />
                        </IconButton>
                        <Typography
                            onClick={() => postLikesCounter(id, user?.uid)}
                            sx={{ cursor: "pointer" }}
                            variant="caption">
                            {likesCounter?.length} {likesCounter?.length >
                                1 ? "curtidas" : "curtida"
                            }</Typography>
                    </Stack>
                </Tooltip>
                <Tooltip title="Comentar">
                    <Typography
                        sx={{ cursor: "pointer" }}
                        onClick={handleClick} variant={"caption"}>
                        Responder
                    </Typography>
                </Tooltip>
                {open && <Tooltip title="fechar">
                    <Typography
                        sx={{ cursor: "pointer" }}
                        onClick={handleClick} variant={"caption"}>
                        fechar
                    </Typography>
                </Tooltip>}
            </Box >
            {open && <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={7}>
                    <TextField
                        size="small"
                        fullWidth
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <LoadingButton
                        fullWidth={true}
                        size="auto"
                        onClick={() => postReply(id, user.uid, newComment, date, index)}
                        endIcon={<Send />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        <span>Comment</span>
                    </LoadingButton>
                </Grid>
            </Grid>}
        </Stack >
    </>)
}