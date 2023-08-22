import {
    Avatar,
    Box,
    Button,
    Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography,
} from '@mui/material'
import *as T from './styles.js'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api_comments } from '../../../../../api/usersComments';
import { Reply } from '@mui/icons-material';

export const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { id } = useParams()
    const getComments = async () => {
        try {
            const res = await api_comments.comments.getForRecipe(id)
            setComments(res)
        } catch (err) {
            console.error(err)
        }
    }
    console.log(comments)
    useEffect(() => {
        getComments()
        console.log(comments.map(comment => comment.replys.map(reply => reply.replys.message)))
    }, [id])
    const handleSubmit = () => {

        if (newComment) {
            setComments([...comments, { author: 'User', content: newComment, replies: [] }]);
            setNewComment('');
        }
    };

    return (
        <>
            <Typography>Comentários dessa receita</Typography>
            <List style={{ width: '90%', margin: 'auto' }}>
                {comments.map((comment, index) => (
                    <Stack elevation={2} style={{ padding: '10px', marginBottom: '10px' }}>
                        <T.ContainerComments key={index}>
                            <IconButton size="small">
                                <Avatar src={comment.avatar} sx={{ width: 30, height: 30 }} />
                                <Typography variant="body1">{comment.name}</Typography>
                            </IconButton>
                            <Typography variant="body1">{comment.message}</Typography>
                        </T.ContainerComments>
                        <T.ContainerComments>
                            {comment.replys.map(reply => (
                                <T.StepsContain key={reply.id}>
                                    <Box display="flex" alignItems="center">
                                        <IconButton size="small">
                                            <Reply />
                                        </IconButton>
                                        <IconButton size="small">
                                            <Avatar src={reply.avatar} sx={{ width: 24, height: 24 }} />
                                        </IconButton>
                                        <Typography variant="caption">{reply?.name}</Typography>
                                    </Box>
                                    <Typography variant="body2">{reply.message}</Typography>
                                    {reply.replys?.name?.length > 0 &&
                                        <T.StepsContain sx={{ borderLeft: 'none' }} >
                                            <Box display="flex" alignItems="center">
                                                <IconButton size="small">
                                                    <Reply />
                                                </IconButton>
                                                <IconButton size="small">
                                                    <Avatar src={reply.replys.avatar} sx={{ width: 24, height: 24 }} />
                                                </IconButton>
                                                <Typography variant="caption">{reply.replys.name}</Typography>

                                            </Box>
                                            <Typography variant="body2">{reply.replys.message}</Typography>

                                        </T.StepsContain>
                                    }

                                </T.StepsContain >

                            ))}
                        </T.ContainerComments >
                    </Stack >
                ))}
            </List >
            <Grid container alignItems="center" spacing={2} sx={{ width: '90%' }}>
                <Grid item xs={12} md={9}>
                    <TextField
                        label="Add a comment"
                        variant="outlined"
                        fullWidth
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}
                    md={3} mb={3} >
                    <Button fullWidth onClick={handleSubmit} variant="contained" color="primary" >
                        Add Comment
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}