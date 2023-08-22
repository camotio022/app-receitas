export function rulesCreateRecipes(formData, setFormData) {
    if (!formData.recipeTitle) {
      alert('Por favor, preencha o título da receita.');
      return false;
    }
    if (!formData.recipeDescription) {
      alert('Por favor, preencha a descrição da receita.');
      return false;
    }
    if (formData.ingredients.length === 0) {
      alert('Por favor, adicione pelo menos um ingrediente.');
      return false;
    }
    if (formData.modPreps.length === 0) {
      alert('Por favor, adicione pelo menos um passo na preparação.');
      return false;
    }
    if (!formData.prepTime || formData.prepTime <= 0) {
      alert('O tempo de preparo deve ser maior que zero.');
      return false;
    }
    if (!formData.cookTime || formData.cookTime <= 0) {
      alert('O tempo de cozimento deve ser maior que zero.');
      return false;
    }
    if (!formData.servingSize || formData.servingSize <= 0) {
      alert('A quantidade de porções deve ser maior que zero.');
      return false;
    }
  
    if (!formData.recipeImage) {
      alert('Por favor, selecione uma imagem para a receita.');
      return false;
    }
    return true;
  }
  