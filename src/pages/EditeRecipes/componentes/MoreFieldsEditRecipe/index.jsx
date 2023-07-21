import { MyTextField } from "../../../../componentes/textField/textField.jsx"






export const MoreEditFieldsRecipe = (
    {
        formData,
        handleFieldChange
    }
) => {
    return (
        <>
            <MyTextField
                label="Recipe Image"
                name='recipeImage'
                value={formData.recipeImage}
                onChange={(event) => handleFieldChange('recipeImage', event.target.value)}
            />
            <MyTextField
                label="Cooking Tips"
                name='cookingTips'
                type='number'
                value={formData.cookingTips}
                onChange={(event) => handleFieldChange('cookingTips', event.target.value)}
            />
            <MyTextField
                label="Calories"
                name='calories'
                type='number'

                value={formData.calories}
                onChange={(event) => handleFieldChange('calories', event.target.value)}
            />
            <MyTextField
                label="Carbs"
                name='carbs'
                type='number'

                value={formData.carbs}
                onChange={(event) => handleFieldChange('carbs', event.target.value)}
            />
            <MyTextField
                label="Protein"
                name='protein'
                type='number'
                value={formData.protein}
                onChange={(event) => handleFieldChange('protein', event.target.value)}
            />
            <MyTextField
                label="Fat"
                name='fat'
                type='number'
                value={formData.fat}
                onChange={(event) => handleFieldChange('fat', event.target.value)}
            />
            <MyTextField
                label="Sod"
                name='sod'
                type='number'
                value={formData.sod}
                onChange={(event) => handleFieldChange('sod', event.target.value)}
            />
            <MyTextField
                label="Gord"
                name='gord'
                type='number'
                value={formData.gord}
                onChange={(event) => handleFieldChange('gord', event.target.value)}
            />
        </>
    )
}