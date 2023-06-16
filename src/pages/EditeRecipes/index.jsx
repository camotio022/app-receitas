import React, { useState, useEffect } from 'react';
import { api } from '../../api';

export const EditeRecipe = () => {
    const [myRecipes, setMyRecipes] = useState([]);

    useEffect(() => {
      const authorId = 'nfgTOWtnXyNeXbAZ6sWFmgDC7bk1'; // Substitua pelo seu próprio ID de autor
    
      const fetchData = async () => {
        try {
          const myRecipesList = await api.myRecipes.get(authorId);
          setMyRecipes(myRecipesList);
          console.log('Minhas receitas:', myRecipes);
          // Faça algo com a lista de receitas, como atualizar o estado do componente
        } catch (error) {
          console.error('Erro ao buscar as receitas:', error);
        }
      };
    
      fetchData();
    }, []);
    
    // // Função para editar os campos da receita logada
    // const editarReceita = async (recipeId, camposAtualizados) => {
    //     // Verifica se há um usuário logado
    //     const user = auth.currentUser;
    //     if (!user) {
    //         console.log('Nenhum usuário logado.');
    //         return;
    //     }

    //     // Obtém a referência do documento da receita
    //     const recipeDocRef = doc(firestore, 'recipes', recipeId);

    //     // Atualiza os campos da receita
    //     try {
    //         await updateDoc(recipeDocRef, camposAtualizados);
    //         console.log('Campos da receita atualizados com sucesso.');
    //     } catch (error) {
    //         console.error('Erro ao atualizar os campos da receita:', error);
    //     }
    // };

    // // Exemplo de uso da função editarReceita
    // const handleEditarReceita = async () => {
    //     const recipeId = 'ID_DA_RECEITA'; // Substitua pelo ID da receita a ser editada
    //     const camposAtualizados = {
    //         recipeTitle: 'Novo Título',
    //         recipeDescription: 'Nova Descrição',
    //         ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
    //         // outros campos a serem atualizados
    //     };
    //     await editarReceita(recipeId, camposAtualizados);
    // };
    // const [formData, setFormData] = useState({
    //     recipeTitle: '',
    //     recipeDescription: '',
    //     ingredients: [],
    //     preparationSteps: [],
    //     cookingTime: '',
    //     // outros campos da receita
    // });

    // useEffect(() => {
    //     setFormData({
    //         recipeTitle: recipeData.recipeTitle,
    //         recipeDescription: recipeData.recipeDescription,
    //         ingredients: recipeData.ingredients,
    //         preparationSteps: recipeData.preparationSteps,
    //         cookingTime: recipeData.cookingTime,
    //         // outros campos da receita
    //     });
    // }, [recipeData]);

    // const handleInputChanges = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     });
    // };

    // const handleIngredientsChange = (index, event) => {
    //     const ingredients = [...formData.ingredients];
    //     ingredients[index] = event.target.value;
    //     setFormData({
    //         ...formData,
    //         ingredients
    //     });
    // };

    // const handlePreparationStepsChange = (index, event) => {
    //     const preparationSteps = [...formData.preparationSteps];
    //     preparationSteps[index] = event.target.value;
    //     setFormData({
    //         ...formData,
    //         preparationSteps
    //     });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Lógica para enviar os dados do formulário
    // };

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label>
    //             Título da receita:
    //             <input
    //                 type="text"
    //                 name="recipeTitle"
    //                 value={formData.recipeTitle}
    //                 onChange={handleInputChanges}
    //             />
    //         </label>

    //         <label>
    //             Descrição da receita:
    //             <textarea
    //                 name="recipeDescription"
    //                 value={formData.recipeDescription}
    //                 onChange={handleInputChanges}
    //             />
    //         </label>

    //         <label>
    //             Ingredientes:
    //             {formData.ingredients.map((ingredient, index) => (
    //                 <input
    //                     type="text"
    //                     key={index}
    //                     value={ingredient}
    //                     onChange={(event) => handleIngredientsChange(index, event)}
    //                 />
    //             ))}
    //         </label>

    //         <label>
    //             Passos de preparo:
    //             {formData.preparationSteps.map((step, index) => (
    //                 <input
    //                     type="text"
    //                     key={index}
    //                     value={step}
    //                     onChange={(event) => handlePreparationStepsChange(index, event)}
    //                 />
    //             ))}
    //         </label>

    //         <label>
    //             Tempo de cozimento:
    //             <input
    //                 type="text"
    //                 name="cookingTime"
    //                 value={formData.cookingTime}
    //                 onChange={handleInputChanges}
    //             />
    //         </label>

    //         {/* Outros campos da receita */}

    //         <button type="submit">Salvar</button>
    //     </form>
    // );
};
