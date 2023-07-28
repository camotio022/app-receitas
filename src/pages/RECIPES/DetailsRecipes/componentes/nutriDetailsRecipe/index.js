
import { Stack, styled } from "@mui/material";
import { orange } from "@mui/material/colors";


export const NutInfo = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2rem',
    width: '90%',
    height: 'auto'
}))
export const Info = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '30%',
    height: '5rem',
    paddingLeft: '10px',
    borderLeft: `1px solid ${orange[900]}`
}))
