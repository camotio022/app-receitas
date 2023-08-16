import styled from "@emotion/styled";
import { Box, Paper, Typography, makeStyles } from "@mui/material";

export const ItemsLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: 'auto',
}))

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
}));

export const ItemMenu = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: "10px",
    padding: "1rem",
    varian: "body1",
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: "16px",
    color: "primary"
}));
