



import { KeyboardArrowDown } from '@mui/icons-material';
import { Option, selectClasses, Textarea } from '@mui/joy';
import { Button, Grid, Input, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import * as Tag from './index'





export const CreateRecipes = () => {
    const [formData, setFormData] = useState({
        recipeTitle: "",
        recipeDescription: "",
        ingredient1: "",
        ingredient2: "",
        step1: "",
        step2: "",
        prepTime: "",
        cookTime: "",
        servingSize: "",
        recipeCategory: "",
        recipeDifficulty: "",
        recipeImage: null,
        cookingTips: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
        tags: "",
        author: "",
        creationDate: "",
        rating: "",
        comments: "",
        name: "",
        email: "",
        country: ""
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, recipeImage: file });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar os dados do formulário
        console.log(formData);
    };

    return (
        <Tag.Container>
            <form onSubmit={handleSubmit}>
                <Typography variant='h5'>
                    Criação de receita
                </Typography>
                <Stack>
                    <Input
                        type="text"
                        name="recipeTitle"
                        value={formData.recipeTitle}
                        onChange={handleInputChange}
                        placeholder="Título da Receita"
                    />
                    <Input
                        name="recipeDescription"
                        value={formData.recipeDescription}
                        onChange={handleInputChange}
                        placeholder="Descrição da Receita"
                    />
                    <Input
                        type="text"
                        name="ingredient1"
                        value={formData.ingredient1}
                        onChange={handleInputChange}
                        placeholder="Ingrediente 1"
                    />
                    <Input
                        type="text"
                        name="ingredient2"
                        value={formData.ingredient2}
                        onChange={handleInputChange}
                        placeholder="Ingrediente 2"
                    />
                    <Input
                        type="text"
                        name="step1"
                        value={formData.step1}
                        onChange={handleInputChange}
                        placeholder="Passo 1"
                    />
                    <Input
                        type="text"
                        name="step2"
                        value={formData.step2}
                        onChange={handleInputChange}
                        placeholder="Passo 2"
                    />
                    <Input
                        type="text"
                        name="prepTime"
                        value={formData.prepTime}
                        onChange={handleInputChange}
                        placeholder="Tempo de Preparo"
                    />
                    <Input
                        type="text"
                        name="cookTime"
                        value={formData.cookTime}
                        onChange={handleInputChange}
                        placeholder="Tempo de Cozimento"
                    />
                    <Input
                        type="text"
                        name="servingSize"
                        value={formData.servingSize}
                        onChange={handleInputChange}
                        placeholder="Número de Porções"
                    />
                    <select
                        name="recipeCategory"
                        value={formData.recipeCategory}
                        onChange={handleInputChange}
                        placeholder="Select a pet…"
                        indicator={<KeyboardArrowDown />}
                        style={{
                            width: 240,
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <option value="">Selecione a Categoria</option>
                        <option value="breakfast">Café da manhã</option>
                        <option value="lunch">Almoço</option>
                        <option value="dinner">Jantar</option>
                    </select>
                    <div>
                        <span>Dificuldade da Receita:</span>
                        <label>
                            <Input
                                type="radio"
                                name="recipeDifficulty"
                                value="easy"
                                checked={formData.recipeDifficulty === "easy"}
                                onChange={handleInputChange}
                            />
                            Fácil
                        </label>
                        <label>
                            <Input
                                type="radio"
                                name="recipeDifficulty"
                                value="medium"
                                checked={formData.recipeDifficulty === "medium"}
                                onChange={handleInputChange}
                            />
                            Médio
                        </label>
                        <label>
                            <Input
                                type="radio"
                                name="recipeDifficulty"
                                value="hard"
                                checked={formData.recipeDifficulty === "hard"}
                                onChange={handleInputChange}
                            />
                            Difícil
                        </label>
                    </div>
                    <Input
                        type="file"
                        name="recipeImage"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <textarea
                        name="cookingTips"
                        value={formData.cookingTips}
                        onChange={handleInputChange}
                        placeholder="Dicas de Cozinha"
                    />
                    <Input
                        type="text"
                        name="calories"
                        value={formData.calories}
                        onChange={handleInputChange}
                        placeholder="Calorias"
                    />
                    <Input
                        type="text"
                        name="protein"
                        value={formData.protein}
                        onChange={handleInputChange}
                        placeholder="Proteína"
                    />
                    <Input
                        type="text"
                        name="carbs"
                        value={formData.carbs}
                        onChange={handleInputChange}
                        placeholder="Carboidratos"
                    />
                    <Input
                        type="text"
                        name="fat"
                        value={formData.fat}
                        onChange={handleInputChange}
                        placeholder="Gordura"
                    />
                    <Input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="Tags/Tags Relacionadas"
                    />
                    <Input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        placeholder="Autor da Receita"
                    />
                    <Input
                        type="date"
                        name="creationDate"
                        value={formData.creationDate}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleInputChange}
                        placeholder="Avaliação da Receita (1-5)"
                    />
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        placeholder="Comentários"
                    />
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nome"
                    />
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    <Input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="País"
                    />
                    <Button type="submit">Enviar</Button>
                </Stack>

            </form>
        </Tag.Container>
    );
}