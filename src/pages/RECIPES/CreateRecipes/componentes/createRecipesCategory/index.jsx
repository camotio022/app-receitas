import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material"


export const CategoryCreateRecipes = ({
    formData,
    handleInputChangesCreateRecipes
}) => {
    return (
        <>
            <Grid item xs={12} lg={6}>
                <FormControl fullWidth>
                    <InputLabel sx={{ zIndex: 0 }} id="demo-simple-select-label">
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
                        <MenuItem value="De preferência">De preferência</MenuItem>
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
        </>
    )
}