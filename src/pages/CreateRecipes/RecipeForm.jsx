import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Button, TextField } from '@mui/material'
import * as Tag from './index.js'
import FormControlLabel from '@mui/material/FormControlLabel'

import DeleteIcon from '@mui/icons-material/Delete'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { FormLabel, RadioGroup, Radio } from '@mui/material'
import { MyTypography } from '../../componentes/TYPOGRAPHY'
import { MyTextField } from '../../componentes/textField/textField.jsx'

export const RecipeForm = ({
    handleInputIngre,
    formData,
    adicionarIngre,
    removerIngre,
    handleInputModPreps,
    adicionarModPreps,
    removerModPreps,
    handleInputChangesCreateRecipes,
    handleSubmit,
    handleImageChange,
}) => {
    return (
        <>
            <MyTypography title={"Criação de receiatas"} variant="h6" />

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
                    {formData.ingredients && formData.ingredients.map((valor, index) => (
                        <>
                            <Grid item xs={12} key={index} sx={{ display: 'flex', mt: 2 }}>
                                <MyTextField
                                    label={`Ingrediente ${index + 1}`}
            
                                    type="text"
                                    value={valor}
                                    onChange={(e) => handleInputIngre(e, index)}
                                />

                            </Grid>
                            <Grid item xs={12} key={index} sx={{ display: 'flex', }}>
                                <Button color="error" onClick={() => removerIngre(index)} variant='outlined' startIcon={<DeleteIcon />}>
                                    Delete Ingrediente
                                </Button>
                            </Grid>
                        </>
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
            <MyTypography title={"Etapas de preparo"} variant="h6" gutterBottom mt={3} mb={1} />
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{
                    mt: '1rem',
                    height: formData?.modPreps?.length > 0 ? 'auto' : 0, transition: '.3s',
                }}>
                    {formData.modPreps && formData.modPreps.map((valor, index) => (
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
                                <Button color="error" onClick={() => removerModPreps(index)} variant='outlined' startIcon={<DeleteIcon />}>
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
                <MyTextField
                    id="prepTime"
                    name="prepTime"
                    label="Tempo de preparo"
                    autoComplete="prepTime"
                    type="number"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.prepTime}
                />

                <MyTextField
                    id="cookTime"
                    name="cookTime"
                    label="Tempo de cozimento"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.cookTime}
                    type={'number'}
                    autoComplete="cc-csc"
                />
                <MyTextField
                    id="servingSize"
                    name="servingSize"
                    label="Rendimento da receita/porções"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.servingSize}
                    autoComplete="cc-csc"
                />

            </Grid>
            <MyTypography title={"Categorias e Nutrição"} variant="h6" gutterBottom mt={3} />
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Categoria
                        </InputLabel>
                        <Select
                            id="demo-simple-select"
                            labelId="demo-simple-select-label"
                            name="recipeCategory"
                            value={formData?.recipeCategory}
                            onChange={handleInputChangesCreateRecipes}
                            placeholder="Selecione a Categoria"
                        >
                            <MenuItem value="">Selecione a Categoria</MenuItem>
                            <MenuItem value="breakfast">Café da manhã</MenuItem>
                            <MenuItem value="lunch">Almoço</MenuItem>
                            <MenuItem value="dinner">Jantar</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} gap={1}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            Dificuldade da Receita:
                        </FormLabel>
                        <RadioGroup
                            name="recipeDifficulty"
                            value={formData?.recipeDifficulty}
                            onChange={handleInputChangesCreateRecipes}
                        >
                            <FormControlLabel
                                value="easy"
                                control={<Radio />}
                                label="Fácil"
                            />
                            <FormControlLabel
                                value="medium"
                                control={<Radio />}
                                label="Médio"
                            />
                            <FormControlLabel
                                value="hard"
                                control={<Radio />}
                                label="Difícil"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <MyTextField
                    type="file"
                    name="recipeImage"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <MyTextField
                    id="calories"
                    name="calories"
                    label="Calorias"
                    autoComplete="calories"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.calories}
                    type="number"
                />
                <MyTextField
                    name="carbs"
                    id="carbs"
                    label="Carboidratos"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.carbs}
                    autoComplete="carboidratos"
                    type="number"
                />
                <MyTextField
                    name="protein"
                    id="proteinas"
                    label="Proteínas"
                    autoComplete="proteinas"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.protein}
                    type="number"
                />
                <MyTextField
                    id="fibras"
                    name="fat"
                    label="Fibras"
                    autoComplete="fibras"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.fat}
                    type="number"
                />
                <MyTextField
                    id="sodio"
                    name="sod"
                    label="Sódio"
                    autoComplete="sodio"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.sod}
                    type="number"
                />


                <MyTextField
                    name="gord"
                    id="gorduras"
                    label="Gorduras"
                    autoComplete="gorduras"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.gord}
                    type="number"
                />

            </Grid>
            <Typography title={"Dados do criador"} variant="h6" gutterBottom mt={3} />

            <Grid container spacing={3}>

                <MyTextField
                    id="author"
                    label="Nome do criador"
                    name="author"
                    autoComplete="authotName"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.author}
                />


                <MyTextField
                    id="creationDate"
                    name="creationDate"
                    label="Data de criação"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.creationDate}
                    autoComplete="creationDate"
                    type="date"
                />
                <MyTextField
                    id="ranking"
                    name="ranking"
                    label="Rankig da receita de(1-10)"
                    autoComplete="ranking"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.ranking}
                />
                <MyTextField
                    id="UserEmail"
                    name="email"
                    label="Email do criador"
                    autoComplete="UserEmail"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.email}
                />

                <MyTextField
                    id="country"
                    name="country"
                    label="O pais do criador"
                    autoComplete="country"
                    onChange={handleInputChangesCreateRecipes}
                    value={formData?.country}
                />

                <Tag.StepFinish
                    item
                    xs={12}

                >
                    <Button onClick={handleSubmit} variant="contained">
                        Terminar a receita
                    </Button>
                </Tag.StepFinish>
            </Grid>
        </>
    )
}
