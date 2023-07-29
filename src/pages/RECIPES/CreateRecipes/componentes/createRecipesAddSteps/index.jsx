import { Button, Grid } from "@mui/material"
import { MyTextField } from "../../../../../componentes/textField/textField.jsx"
import { Delete } from "@mui/icons-material"

export const StepsCreateRecipes = ({
    formData,
    handleInputModPreps,
    adicionarModPreps
}) => {
    return (
        <>
            <Grid item xs={12} sx={{
                mt: '1rem',
                height: formData?.modPreps?.length > 0 ? 'auto' : 0, transition: '.3s',
            }}>
                {formData?.modPreps && formData?.modPreps.map((valor, index) => (
                    <>
                        <Grid item xs={12} key={index} sx={{ display: 'flex', mt: 2 }}>
                            <MyTextField
                                label={`Etapa ${index + 1}`}
                                type="text"
                                value={valor}
                                onChange={(e) => handleInputModPreps(e, index)}
                            />

                        </Grid>
                        <Grid item xs={12} key={index} sx={{ display: 'flex', }}>
                            <Button color="error" onClick={() => removerModPreps(index)} variant='outlined' startIcon={<Delete />}>
                                Delete step
                            </Button>
                        </Grid>
                    </>
                ))}
            </Grid>
            <Grid item xs={12}>
                <Button
                    size="small"
                    sx={{ mr: 2 }}
                    onClick={adicionarModPreps}
                    variant="contained"
                >
                    + Adicionar etapa
                </Button>
            </Grid>
        </>
    )
}