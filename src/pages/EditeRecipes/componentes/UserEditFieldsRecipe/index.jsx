import { MyTextField } from "../../../../componentes/textField/textField.jsx"



export const UserEditFieldsRecipe = ({
    formData,
    handleFieldChange
}) => {
    return (
        <>
            <MyTextField
                label="Author"
                name='author'
                type='number'
                value={formData.author}
                onChange={(event) => handleFieldChange('author', event.target.value)}
            />
            <MyTextField
                label="Ranking"
                name='ranking'
                type='number'
                value={formData.ranking}
                onChange={(event) => handleFieldChange('ranking', event.target.value)}
            />
            <MyTextField
                label="Creation Date"
                name='creationDate'
                type='date'
                value={formData.creationDate}
                onChange={(event) => handleFieldChange('creationDate', event.target.value)}
            />
            <MyTextField
                label="Name"
                name='name'
                type='text'
                value={formData.name}
                onChange={(event) => handleFieldChange('name', event.target.value)}
            />

            <MyTextField
                label="Email"
                name='email'
                type='email'
                value={formData.email}
                onChange={(event) => handleFieldChange('email', event.target.value)}
            />
            <MyTextField
                label="Country"
                name='country'
                value={formData.country}
                onChange={(event) => handleFieldChange('country', event.target.value)}
            />
        </>
    )
}