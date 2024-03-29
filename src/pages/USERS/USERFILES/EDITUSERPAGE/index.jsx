import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material"
import * as Tag from './index.js'
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../../../../contexts/AuthContext.jsx"
import { CardMediaUser } from "./componentes/cardMedia/index.jsx"
import { ForumEditInfoUser } from "./componentes/editUserForm/index.jsx"
import { MyDialog } from "./componentes/dialog/index.jsx"
import { api_users } from "../../../../api/users/users.js"
export const PerfilUser = () => {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [editingField, setEditingField] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [userValues, setUserValues] = useState({});
  const [open, setOpen] = useState(false);
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleClickOpen = (value) => {
    setEditingField("");
    setOpen(!open);
    if (value === "coverImage") {
      setEditingField("coverImage");
    }
    if (value === "photoURL") {
      setEditingField("photoURL");
    }
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const handleSaveClick = async (id) => {
    try {
      const updatedData = {
        name: userValues.name,
        email: userValues.email,
        birthday: userValues.birthday,
        age: userValues.age,
        address: userValues.address,
        phoneNumber: userValues.phoneNumber,
        occupation: userValues.occupation,
        education: userValues.education,
        hobbies: userValues.hobbies,
        socialMedia: userValues.socialMedia,
        bio: userValues.bio
      };
      await api_users.user.update(id, userValues);
      setIsEditing(!isEditing);
    } catch (error) {
      console.error('Erro ao atualizar dados do usuário:', error);
    }
  };


  const [isFollowing, setIsFollowing] = useState(false);
  const handleSaveCoverImage = async () => {
    if (!userValues.coverImage) {
      console.log('Nenhuma imagem de capa selecionada.');
      return;
    }
    try {
      if (editingField === "coverImage") {
        await api_users.user.updateCover(id, { coverImage: userValues.coverImage });
        console.log('Imagem de capa atualizada com sucesso!');
      }
      if (editingField === "photoURL") {
        await api_users.user.update(id, { photoURL: userValues.photoURL });
        console.log('PhotoURL atualizado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao atualizar a imagem:', error);
    }
    handleClose();
  };
  const handleChange = (event) => {
    setUserValues({ ...userValues, [event.target.name]: event.target.value });
  };
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      let updatedData = {};

      if (editingField === 'coverImage') {
        updatedData = { ...updatedData, coverImage: base64Image };
      } else {
        updatedData = { ...updatedData, photoURL: base64Image };
      }

      setUserValues({ ...userValues, ...updatedData });
    };
    reader.readAsDataURL(file);
  };

  const iSfollowed = async (id) => {
    try {
      const result = await api_users.user.get(id);
      if (result && result.followers.includes(user.uid)) {
        setIsFollowing(true);
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const data = await api_users.user.get(id);
        iSfollowed(data.id)
        setUserValues(data)

      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);
  if (!id) {
    return (
      <>
        <Dialog open={true} onClose={handleClose}>
          <DialogTitle>INFORMAÇÕES DO ESTADO</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ITEM NÃO SELECIONDO POR FAVOR SELECIONE
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link href="/topReview">Voltar</Link>
          </DialogActions>
        </Dialog>
      </>
    )
  }
  if (id) {
    return (
      <>
        <Stack
        >
          <CardMediaUser
            isFollowing={isFollowing}
            setIsFollowing={setIsFollowing}
            handleClickOpen={handleClickOpen}
            userValues={userValues}
            user={user}
            id={id}
          />
          <Tag.ItemMenu >
            EDITAR O PERFIL
          </Tag.ItemMenu>
          <Stack sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: "15px",
            flexWrap: 'wrap',
            width: '100%',
            marginBottom: '5rem',
            padding: "1rem"
          }}>

            <ForumEditInfoUser
              isEditing={isEditing}
              userValues={userValues}
              handleChange={handleChange}
              handleEditClick={handleEditClick}
              user={user}
              handleSaveClick={handleSaveClick}
            />

          </Stack>
        </Stack>
        <MyDialog
          open={open}
          editingField={editingField}
          handleClose={handleClose}
          handleCoverImageChange={handleCoverImageChange}
          handleSaveCoverImage={handleSaveCoverImage}
        />
      </>
    )
  }
}