import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)((theme) => ({
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
}));
