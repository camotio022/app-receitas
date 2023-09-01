import { LoadingButton } from "@mui/lab";
import { Box, Button, FormControlLabel, Switch, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { api_recipes } from "../../../../../api/recipes/recipes";

export const EditMore = ({
    id,
    condicional,
    value,
    itemType,
    index,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        setEditedValue(value)
    },[])
    const handleClick = async(docRef, index, newValue) => {
        if(!docRef || !newValue) {
            setLoading(false);
            return
        }
        setLoading(true);
        try{
            await api_recipes.recipe.editIngredient(docRef, index, newValue)
        }catch(e){
            alert(e);
            setLoading(false);
        }finally {
            setLoading(false);
            setEditedValue(value)
            setIsEditing(false);
        }
    };

    return (
        <>
            {condicional &&
                <Box display="flex" gap={1} sx={{ padding: '10px', transition: 'all .3s', height: "auto" }} alignItems="center">
                    {isEditing ? (
                        <>
                            <TextField
                                fullWidth
                                size="small"
                                value={editedValue}
                                onChange={(e) => setEditedValue(e.target.value)}
                            />
                            <Button variant="outlined" onClick={(e) => setIsEditing(false)}>
                                fechar
                            </Button>
                            <LoadingButton
                                size="small"
                                onClick={()=>handleClick(id, value, editedValue)}
                                loading={loading}
                                loadingIndicator="Loading..."
                                variant="plain"
                            >
                                <span>Fetch data</span>
                            </LoadingButton>
                        </>
                    ) : (
                        <>
                            <Button size="small" variant="contained" onClick={() => setIsEditing(true)}>
                                Editar
                            </Button>
                        </>
                    )}
                </Box>}
        </>
    )
}