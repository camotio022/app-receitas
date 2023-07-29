import { Button, Grid } from "@mui/material"
import { MyTextField } from "../../../../../componentes/textField/textField.jsx"


export const HeaderCreateRecipes = ({
    handleInputIngre,
    adicionarIngre,
    removerIngre,
    formData,
    handleInputChangesCreateRecipes
}) => {
    return (
        <>
            <Grid container spacing={2} sx={{ transition: '300ms' }}>
                <MyTextField
                    id="recipeTitle"
                    name="recipeTitle"
                    onChange={handleInputChangesCreateRecipes}
                    label="Insirá o titulo da receita"
                    value={formData?.recipeTitle}
                />
                <MyTextField
                    id="recipeDescription"
                    name="recipeDescription"
                    label="Faça uma breve descrição"
                    autoComplete="description"
                    size="lg"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.recipeDescription}
                />
                <Grid item xs={12} sx={{
                    mt: '1rem',
                    height: formData?.ingredients?.length > 0 ? 'auto' : 0, transition: '.3s'
                }}>
                    {formData?.ingredients && formData?.ingredients?.map((valor, index) => (
                        <React.Fragment key={index}>
                            <Grid item xs={12} sx={{ display: 'flex', mt: 2 }}>
                                <MyTextField
                                    label={`Ingrediente ${index + 1}`}
                                    type="text"
                                    value={valor}
                                    onChange={(e) => handleInputIngre(e, index)}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex' }}>
                                <Button
                                    color="error"
                                    onClick={() => removerIngre(index)}
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete Ingrediente
                                </Button>
                            </Grid>
                        </React.Fragment>
                    ))}

                </Grid>
                <Grid item xs={12}>
                    <Button
                        size="small"
                        sx={{ mr: 2 }}
                        onClick={adicionarIngre}
                        variant="contained"
                    >
                        + Add ingredient
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}