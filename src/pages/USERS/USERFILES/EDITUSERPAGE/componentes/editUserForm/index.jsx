import { Button, Card, CardContent, Grid, Stack } from "@mui/material"
import * as Tag from "../../index.js"
import { MyTextField } from "../../../../../../componentes/textField/textField.jsx"
import { Edit } from "@mui/icons-material"
export const ForumEditInfoUser = ({
    isEditing,
    userValues,
    handleChange,
    handleEditClick,
    user,
}) => {
    return (<>
        <Card
            sx={{
                width: '100%',
                fontFamily: 'Arial, sans-serif',
                transition: 'background-color 0.3s ease',
                '&:hover': { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' },
                background: 'linear-gradient(to bottom, #e0e0e0, #f5f5f5)',
                borderRadius: '12px',
            }}
        >
            <CardContent>
                {isEditing ? (
                    <>
                        <Tag.ItemMenu>
                            Editando
                        </Tag.ItemMenu>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="name"
                                    label="Nome"
                                    value={userValues.name || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="birthday"
                                    label="Aniversário"
                                    type="date"
                                    value={userValues.birthday || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="age"
                                    label="Idade"
                                    type="number"
                                    value={userValues.age || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="address"
                                    label="Endereço"
                                    value={userValues.address || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="phoneNumber"
                                    label="Telefone"
                                    type="tel"
                                    value={userValues.phoneNumber || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="occupation"
                                    label="Ocupação"
                                    value={userValues.occupation || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="education"
                                    label="Educação"
                                    value={userValues.education || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="hobbies"
                                    label="Hobbies"
                                    value={userValues.hobbies || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="socialMedia"
                                    label="Mídias Sociais"
                                    value={userValues.socialMedia || ''}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MyTextField
                                    name="bio"
                                    label="Biografia"
                                    multiline
                                    rows={4}
                                    value={userValues.bio || ''}
                                    onChange={handleChange}
                                />
                            </Grid>

                        </Grid>
                        <Button variant="contained" onClick={() => handleSaveClick(id)}>
                            Salvar as informações
                        </Button>
                    </>
                ) : (
                    <>
                        <Tag.ItemMenu>
                            Apresentação
                        </Tag.ItemMenu>
                        <CardContent>
                            <Stack variant="body1" component="div">
                                Name: {userValues.name}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Email: {userValues.email}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Aniversário: {userValues.birthday}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Endereço: {userValues.address}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Telefone: {userValues.phoneNumber}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Ocupação: {userValues.occupation}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Educação: {userValues.education}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Hobbies: {userValues.hobbies}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Mídias Sociais: {userValues.socialMedia}
                            </Stack>
                            <Stack variant="body1" component="div">
                                Biografia: {userValues.bio}
                            </Stack>
                        </CardContent>
                        {user?.uid === userValues?.id &&
                            <Tag.ItemMenu>
                                <Edit onClick={handleEditClick} />
                            </Tag.ItemMenu>}
                    </>
                )}
            </CardContent>
        </Card>
    </>)
}