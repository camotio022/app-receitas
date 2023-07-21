import { MyTextField } from "../../../../componentes/textField/textField.jsx"



export const CategoryEditRecipe = ({
    formData,
    handleFieldChange
}) => {
    return (
        <>
            <MyTextField
                label="Recipe Category"
                name='recipeCategory'
                value={formData.recipeCategory}
                onChange={(event) => handleFieldChange('recipeCategory', event.target.value)}
            />
            <MyTextField
                label="recipe Difficulty"
                name="recipeDifficulty"
                value={formData.recipeDifficulty}
                onChange={(event) => handleFieldChange('recipeDifficulty', event.target.value)}
            />
        </>
    )
}