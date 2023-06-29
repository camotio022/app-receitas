import { Container, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { Button, CircularProgress } from '@mui/material';

const UpdateButton = ({ onClick, loading }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick} disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Atualizar'}
        </Button>
    );
};

export const EditRecipes = () => {
    const { id } = useParams();
    const [docRec, setDocRec] = useState();
    const [formData, setFormData] = useState({
        recipeTitle: '',
        recipeDescription: '',
        ingredients: [],
        modPreps: [],
        prepTime: '',
        cookTime: '',
        servingSize: '',
        recipeCategory: '',
        recipeDifficulty: '',
        recipeImage: null,
        cookingTips: '',
        calories: '',
        carbs: '',
        protein: '',
        fat: '',
        sod: '',
        gord: '',
        author: '',
        ranking: '',
        creationDate: '',
        name: '',
        email: '',
        country: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                try {
                    const res = await api.recipe.get(id);
                    setDocRec(res);
                    setFormData(res); // Preencha os campos editados com os valores existentes
                } catch (error) {
                    console.error('Erro ao buscar detalhes da receita:', error);
                }
            }
        };

        fetchRecipe();
    }, [id]);

    const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleUpdateRecipe = async () => {
        try {
            await api.recipe.update(id, formData);
            console.log('Campos atualizados com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar os campos:', error);
        }
    };

    const handleUpdateClick = async () => {
        setLoading(true);
        try {
            await handleUpdateRecipe();
            const updatedRecipe = await api.recipe.get(id);
            setDocRec(updatedRecipe);
            console.log('Receita atualizada com sucesso:', updatedRecipe);
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
            console.error('Erro ao atualizar a receita:', error);
        }
        setLoading(false);
    };

    return (
        <Container sx={{
            position: 'absolute',
            width: "100%",
            height: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: "5rem",
            gap: 2,
        }}>
            <Paper sx={{
                maxWidth: "auto",
                height: "auto",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: "wrap",
                gap: 2,
                padding: 2
            }}>
                <TextField
                    label="Recipe Title"
                    name='recipeTitle'
                    variant="filled"
                    value={formData.recipeTitle}
                    onChange={(event) => handleFieldChange('recipeTitle', event.target.value)}
                />
                <TextField
                    label="Cook Time"
                    name='cookTime'
                    variant="filled"
                    value={formData.cookTime}
                    onChange={(event) => handleFieldChange('cookTime', event.target.value)}
                />
                <TextField
                    label="Serving Size"
                    name='servingSize'
                    variant="filled"
                    value={formData.servingSize}
                    onChange={(event) => handleFieldChange('servingSize', event.target.value)}
                />
                <TextField
                    label="Recipe Category"
                    name='recipeCategory'
                    variant="filled"
                    value={formData.recipeCategory}
                    onChange={(event) => handleFieldChange('recipeCategory', event.target.value)}
                />
                <TextField
                    label="Recipe Difficulty"
                    name='recipeDifficulty'
                    variant="filled"
                    value={formData.recipeDifficulty}
                    onChange={(event) => handleFieldChange('recipeDifficulty', event.target.value)}
                />
                <TextField
                    label="Recipe Image"
                    name='recipeImage'
                    variant="filled"
                    
                    value={formData.recipeImage}
                    onChange={(event) => handleFieldChange('recipeImage', event.target.value)}
                />

                <TextField
                    label="Cooking Tips"
                    name='cookingTips'
                    variant="filled"
                    type='number'

                    value={formData.cookingTips}
                    onChange={(event) => handleFieldChange('cookingTips', event.target.value)}
                />

                <TextField
                    label="Calories"
                    name='calories'
                    variant="filled"
                    type='number'

                    value={formData.calories}
                    onChange={(event) => handleFieldChange('calories', event.target.value)}
                />

                <TextField
                    label="Carbs"
                    name='carbs'
                    variant="filled"
                    type='number'

                    value={formData.carbs}
                    onChange={(event) => handleFieldChange('carbs', event.target.value)}
                />

                <TextField
                    label="Protein"
                    name='protein'
                    type='number'

                    variant="filled"
                    value={formData.protein}
                    onChange={(event) => handleFieldChange('protein', event.target.value)}
                />

                <TextField
                    label="Fat"
                    name='fat'
                    type='number'

                    variant="filled"
                    value={formData.fat}
                    onChange={(event) => handleFieldChange('fat', event.target.value)}
                />

                <TextField
                    label="Sod"
                    name='sod'
                    type='number'
                    variant="filled"
                    value={formData.sod}
                    onChange={(event) => handleFieldChange('sod', event.target.value)}
                />

                <TextField
                    label="Gord"
                    name='gord'
                    type='number'

                    variant="filled"
                    value={formData.gord}
                    onChange={(event) => handleFieldChange('gord', event.target.value)}
                />

                <TextField
                    label="Author"
                    name='author'
                    type='number'

                    variant="filled"
                    value={formData.author}
                    onChange={(event) => handleFieldChange('author', event.target.value)}
                />

                <TextField
                    label="Ranking"
                    name='ranking'
                    variant="filled"
                    type='number'
                    value={formData.ranking}
                    onChange={(event) => handleFieldChange('ranking', event.target.value)}
                />

                <TextField
                    label="Creation Date"
                    name='creationDate'
                    variant="filled"
                    type='date'
                    value={formData.creationDate}
                    onChange={(event) => handleFieldChange('creationDate', event.target.value)}
                />

                <TextField
                    label="Name"
                    name='name'
                    variant="filled"
                    type='text'
                    value={formData.name}
                    onChange={(event) => handleFieldChange('name', event.target.value)}
                />

                <TextField
                    label="Email"
                    name='email'
                    type='email'
                    variant="filled"
                    value={formData.email}
                    onChange={(event) => handleFieldChange('email', event.target.value)}
                />

                <TextField
                    label="Country"
                    name='country'
                    variant="filled"
                    value={formData.country}
                    onChange={(event) => handleFieldChange('country', event.target.value)}
                />

            </Paper>
            <UpdateButton onClick={handleUpdateClick} loading={loading} />
        </Container>
    );
};
