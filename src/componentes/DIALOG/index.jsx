import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
export const MyDialogComponent = ({
    tittle,
    content,
    open,
    message,
    setMessage
}) => {
    return (
        <>
            <Dialog open={open} onClose={false}>
                <DialogTitle>{tittle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                {content}
                <DialogActions>
                    <Button onClick={() => setMessage("")}>voltar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}