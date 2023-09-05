import {
    Avatar,
    Box,
    Grid,
    Button,
    IconButton, Stack, TextField, Tooltip, Typography,
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { Reply, Send, ThumbUpAlt } from '@mui/icons-material';
import { api_comments } from '../../../../../api/usersComments';
import { LoadingButton } from '@mui/lab';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthContext';
export const Message = ({
    id,
    likesCounter,
    firstComment,
    index,
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
    border,
    iCanLike,
    iCanRepley
}) => {
    const { user } = useContext(AuthContext);
    const [newComment, setNewComment] = useState('')
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open);
    }
    const postReply = async (id, userId, newComment, date) => {
        if (!id || !userId || !newComment || !date) return;
        setLoading(true)
        if (firstComment) {
            try {
                await api_comments.comments.postReplys(id, userId, newComment, date)
                handleClick()
                setLoading(false)
            } catch (err) {
                console.error(err)
            } finally {
                setNewComment("")
            }
            return
        }
        try {
            console.log(index)
            await api_comments.comments.replys(id, userId, newComment, date, index)
            handleClick()
            setLoading(false)
        } catch (err) {
            console.error(err)
        } finally {
            setNewComment("")
        }
    }
    const postLikesCounter = async (id, userId) => {
        if (!id || !userId) return
        if (firstComment) {
            try {
                await api_comments.comments.postLikesCounter(id, userId)
            } catch (err) {
                console.error(err)
            }
            return
        }
        try {
            await api_comments.comments.postLikesCounter(id, userId, index)
        } catch (err) {
            console.error(err)
        }
    }
    return (<>
        <Stack sx={{
            bgcolor: color, marginLeft: marginLeft,
            transition: "all .3s", width: "100%",
            borderLeft: border && '1px solid', padding:"15px",
            borderRadius:"10px"
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
                {iCanLike&&
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
                </Tooltip>}
               {iCanRepley&& <Tooltip title="Comentar">
                    <Button
                        sx={{ cursor: "pointer", textTransform:'lowercase' }}
                        onClick={handleClick}
                        size='small' variant={"fiels\d"}>
                        Responder
                    </Button>
                </Tooltip>}
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
                        onClick={() => postReply(id, user.uid, newComment, date)}
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