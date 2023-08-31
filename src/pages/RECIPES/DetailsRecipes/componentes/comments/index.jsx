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
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../../../../firebase.config.js';

export const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const timestamp = new Date();
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const seconds = timestamp.getSeconds();
    const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const getComments = async () => {
        try {
            const res = await api_comments.comments.getForRecipe(id)
            setComments(res)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        const q = query(
            collection(db, 'recipesComments'),
            where('commented_recipeId', '==', id)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push({ id: doc.id, ...doc.data() });
            });
            setComments(temp);
        });

        return () => unsubscribe();
    }, [id]);
    useEffect(() => {
        getComments()
    }, [id])
    const postComment = async (id, userId, message, date) => {
        if (!id || !userId || !message) {
            console.error('Parâmetros inválidos para adicionar comentário.');
            return;
        }
        try {
            await api_comments.comments.post(id, userId, message, date)
            setNewComment("")
        } catch (err) {
            console.error(err.message);
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
                                id={comment.id}
                                isReply={false}
                                avaH={'2.2rem'}
                                avaW={'2.2rem'}
                                marginLeft={""}
                                message={comment.message}
                                avatar={comment.avatar}
                                name={comment.name}
                                varinatM={'body2'}
                                date={formattedTimestamp}
                                likesCounter={comment?.likesCounter}
                                defaultComment={true}
                            />
                        </T.StepsContainPrincipal>
                        <T.ContainerComments>
                            {comment?.replys?.map((reply, index) => (
                                <T.StepsContain key={reply.id}>
                                    <Message
                                        isReply={true}
                                        avaH={'1.7rem'}
                                        avaW={'1.7rem'}
                                        marginLeft={"-0.1rem"}
                                        message={reply.message}
                                        avatar={reply.avatar}
                                        name={reply.name}
                                        varinatM={'caption'}
                                        date={formattedTimestamp}
                                        id={reply.id}
                                        defaultComment={false}
                                        index={index}
                                    />
                                </T.StepsContain >
                            ))}
                        </T.ContainerComments >
                    </T.StepsContain >
                ))}
            </List >
            <Grid container alignItems="center" spacing={2} sx={{ width: '90%' }}>
                <Grid item xs={12} md={9}>
                    <TextField
                        size="small"
                        label="Add a comment"
                        variant="outlined"
                        fullWidth
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}
                    md={3} mb={3} >
                    <Button
                        size="medium"
                        onClick={() => postComment(
                            id,
                            user.uid,
                            newComment,
                            formattedTimestamp)}
                        fullWidth variant="contained" color="primary"
                    >
                        Add Comment
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}