import { MyTextField } from "../../../../componentes/textField/textField.jsx"


export const HeaderEditRecipe = ({
    formData,
    handleFieldChange
}) => {
    return (
        <>
            <MyTextField
                label="Recipe Title"
                name='recipeTitle'
                value={formData.recipeTitle}
                onChange={(event) => handleFieldChange('recipeTitle', event.target.value)}
            />
            <MyTextField
                label="Cook Time"
                name='cookTime'
                value={formData.cookTime}
                onChange={(event) => handleFieldChange('cookTime', event.target.value)}
            />
            <MyTextField
                label="Serving Size"
                name='servingSize'
                value={formData.servingSize}
                onChange={(event) => handleFieldChange('servingSize', event.target.value)}
            />
        </>
    )
}