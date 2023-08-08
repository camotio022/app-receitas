import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api_users } from "../../../api/users/users"
import *as C from './index.js'
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Link,
} from '@mui/material';
import { Email, Person, Person2Rounded, Person3 } from "@mui/icons-material";


export const OpenNotUser = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const getUser = async () => {
        try {
            const user = await api_users.user.get(id)
            setData(user)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        console.log(data)
        getUser()
    }, [id])
    return (
        <>
            <C.Item component={Paper}>
                <Table aria-label="info user">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Link href={`/edituser/${data?.id}`}>
                                    <Avatar src={data?.photoURL} />
                                </Link>
                            </TableCell>
                            <TableCell>{"Name"}</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Avatar
                            </TableCell>
                            <TableCell sx={{ fontWeight: 900 }}>{data?.name}</TableCell>
                            <TableCell sx={{ fontWeight: 900 }}>{data?.email}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table >
            </C.Item >
        </>
    )
}