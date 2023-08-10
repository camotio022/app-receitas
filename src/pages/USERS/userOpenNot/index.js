import { TableContainer, styled } from "@mui/material";

export const Item = styled(TableContainer)(({ theme }) => ({
    backgroundColor:'transparent',
    width: '100%',
    height: '100%',
    padding: '2%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));