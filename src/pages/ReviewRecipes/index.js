import { styled, Stack, Typography } from "@mui/material";
export const Container = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    minHeight: "40%",
}))

export const Title = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));