import { Button, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"



export const MyDialog = ({
    userValues,
    editingField,
    handleClose,
    handleCoverImageChange,
    handleSaveCoverImage,
    open
}) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>FOTO CAPA</DialogTitle>
                <CardMedia sx={{ width: "100%", height: 300 }}
                    component="img"
                    image={editingField === 'coverImage' ? userValues?.coverImage : userValues?.photoURL}>

                </CardMedia>
                <DialogContent>
                    <DialogContentText>
                        Escolha uma imagem para usar como foto de capa!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="img"
                        label={editingField === 'coverImage' ? "Image cover" : "Imagem photoURL"}
                        type="file"
                        accept="image/*"
                        fullWidth
                        variant="standard"
                        onChange={handleCoverImageChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>voltar</Button>
                    <Button onClick={handleSaveCoverImage}>Salvar</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}