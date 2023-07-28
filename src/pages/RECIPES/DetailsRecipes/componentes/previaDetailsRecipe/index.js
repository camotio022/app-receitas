import { Stack, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

export const DetailsImportant = styled(Stack)(({ theme }) => ({
    border: `1px solid ${orange[900]}`,
    color: orange[700],
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: '100%',
    borderRadius: '10px',
    gap: '1rem',
}))