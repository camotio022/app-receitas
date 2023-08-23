import {
    Button,
    Grid, List, TextField, Typography,
} from '@mui/material'
import *as T from './styles.js'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api_comments } from '../../../../../api/usersComments';
import { Message } from '../message/index.jsx';
import { AuthContext } from '../../../../../contexts/AuthContext.jsx'

export const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const getComments = async () => {
        try {
            const res = await api_comments.comments.getForRecipe(id)
            setComments(res)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getComments()
        console.log(comments.map(comment => comment.replys.map(reply => reply.replys.message)))
    }, [id])
    const postComment = async (id, message) => {
        const data = {
            userId: user.uid,
            name: user.displayName,
            avatar: user.avatarUrl,
            commented_recipeId: id,
            message: newComment,
        }
    }

    return (
        <>
            <Typography>Comentários dessa receita</Typography>
            <List style={{ width: '90%', margin: 'auto' }}>
                {comments.map((comment, index) => (
                    <T.StepsContain elevation={2} style={{ padding: '10px', marginBottom: '10px', borderLeft: 'none' }}>
                        <T.StepsContainPrincipal key={index}>
                            <Message
                                avaH={'2.2rem'}
                                avaW={'2.2rem'}
                                marginLeft={""}
                                message={comment.message}
                                avatar={comment.avatar}
                                name={comment.name}
                                varinatM={'body2'}
                            />
                        </T.StepsContainPrincipal>
                        <T.ContainerComments>
                            {comment?.replys?.map(reply => (
                                <T.StepsContain key={reply.id}>
                                    <Message
                                        avaH={'1.7rem'}
                                        avaW={'1.7rem'}
                                        marginLeft={"-0.1rem"}
                                        message={reply.message}
                                        avatar={reply.avatar}
                                        name={reply.name}
                                        varinatM={'caption'}
                                    />
                                    {reply.replys?.name?.length > 0 &&
                                        <Message
                                            avaH={'1.7rem'}
                                            avaW={'1.7rem'}
                                            marginLeft={"1rem"}
                                            message={reply.replys.message}
                                            avatar={reply.replys.avatar}
                                            name={reply.replys.name}
                                            varinatM={'caption'}
                                        />
                                    }
                                </T.StepsContain >
                            ))}
                        </T.ContainerComments >
                    </T.StepsContain >
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
                    <Button fullWidth variant="contained" color="primary" >
                        Add Comment
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}