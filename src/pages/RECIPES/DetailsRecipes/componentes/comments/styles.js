import { Stack, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
export const ContainerComments = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderLeft: '1px solid grey',
    borderRadius: '4px',
}))
export const StepsContainPrincipal = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    padding: '8px 8px 8px 25px',
    borderRadius: '4px',
    borderLeft: '5px solid green',
    backgroundColor: grey[500],
    color: 'white',
}))
export const StepsContain = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: '8px 8px 8px 25px',
    borderRadius: '4px',
    marginBottom: '8px',
}))

