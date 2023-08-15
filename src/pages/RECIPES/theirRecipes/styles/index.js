import { Box, styled } from "@mui/material";

export const MenuItemsLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    padding: '10px',
    width: '100%',
    height: '100%',
    bgcolor: '#f8fafb',
}))