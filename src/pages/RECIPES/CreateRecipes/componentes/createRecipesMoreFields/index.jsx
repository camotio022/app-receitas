import { NativeSelect } from "@mui/material"
import { MyTextField } from "../../../../../componentes/textField/textField.jsx"




export const MoreFieldsCreateRecipes = ({
    formData,
    handleInputChangesCreateRecipes,
    handleImageChange
}) => {
    return (
        <>
            <MyTextField
                id="prepTime"
                name="prepTime"
                label="Tempo de preparo em minutos"
                autoComplete="prepTime"
                type="number"
                onChange={handleInputChangesCreateRecipes}
                value={formData?.prepTime}
            />

            <MyTextField
                id="cookTime"
                name="cookTime"
                label="Tempo de cozimento em minutos"
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
            <MyTextField
                id="ranking"
                name="ranking"
                label="Rankig da receita de(1-10)"
                autoComplete="ranking"
                onChange={handleInputChangesCreateRecipes}
                value={formData?.ranking}
            />
        </>
    )
}