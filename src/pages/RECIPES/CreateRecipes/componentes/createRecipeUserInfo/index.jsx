import { MyTextField } from "../../../../../componentes/textField/textField.jsx"

export const UserInfoCreateRecipes = ({
    handleInputChangesCreateRecipes,
    formData,
}) => {
    return (
        <>
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
        </>
    )
}