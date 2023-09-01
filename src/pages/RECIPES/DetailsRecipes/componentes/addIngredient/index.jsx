import { Add } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { api_recipes } from "../../../../../api/recipes/recipes";

export const AddIngredient = ({ id, condicional, recipe }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [length, setLength] = useState(0);
    useEffect(() => {
        setLength(recipe?.ingredients?.length + 1)
    }, [])
    const handleClick = async (docRef,editedValue) => {
        if (!docRef || !editedValue) {
            setLoading(false);
            return
        }
        setLoading(true);
        try {
            await api_recipes.recipe.AddIngredient(docRef, editedValue)
        } catch (e) {
            alert(e);
            setLoading(false);
        } finally {
            setLoading(false);
            setEditedValue('')
            setIsEditing(false);
        }
    };
    return (
        <>
            {condicional && <>
                {isEditing ? (
                    <Box display="flex" gap={1} sx={{ padding: '10px', transition: 'all .3s', height: "auto" }} alignItems="center">
                        <>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder={`new ingredient ${length}`}
                                value={editedValue}
                                onChange={(e) => setEditedValue(e.target.value)}
                            />
                            <Button variant="outlined" onClick={(e) => setIsEditing(false)}>
                                fechar
                            </Button>
                            <LoadingButton
                                size="small"
                                onClick={() => handleClick(id, editedValue)}
                                loading={loading}
                                loadingIndicator="Loading..."
                                variant="plain"
                            >
                                <span>Editar</span>
                            </LoadingButton>
                        </>
                    </Box>
                ) : (
                    <>
                        <Stack
                            onClick={() => setIsEditing(true)}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: "orange",
                                width: '2rem',
                                borderRadius: '50',
                                padding: '3px',
                                height: 'auto',
                                textAlign: "center",
                                fontWeight: 'bold',
                                color: "white",
                            }}>
                            <Add ></Add>
                        </Stack>
                    </>
                )}
            </>
            }
        </>
    )
}