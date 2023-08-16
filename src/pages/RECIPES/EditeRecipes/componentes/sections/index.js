export const sections = [
  {
    title: 'Cabeçalho',
    fields: [
      { label: 'Recipe Title', name: 'recipeTitle' },
      { label: 'Cook Time', name: 'cookTime' },
      { label: 'Serving Size', name: 'servingSize' },
    ],
  },
  {
    title: 'Categoria',
    fields: [
      { label: 'Recipe Category', name: 'recipeCategory' },
      { label: 'Recipe Difficulty', name: 'recipeDifficulty' },
    ],
  },
  {
    title: 'Mais detalhes',
    fields: [
      {
        label: "Recipe Image",
        name: 'recipeImage'
      },
      {
        label: "Cooking Tips",
        name: 'cookingTips'
      },
      {
        label: "Calories",
        name: 'calories'
      },
      {
        label: "Carbs",
        name: 'carbs'
      },
      {
        label: "Protein",
        name: 'protein'
      },
      {
        label: "Fat",
        name: 'fat'
      }, {
        label: "Sod",
        name: 'sod'
      }, {
        label: "Gord",
        name: 'gord'
      }
    ],
  },
  {
    title: 'informações do usuário',
    fields: [
      {
        label: "Name",
        name: 'name'
      },
      {
        label: "Email",
        name: 'email'
      },
      {
        label: "Creation Date",
        name: 'creationDate'
      }, {
        label: "Ranking",
        name: 'ranking'
      }, {
        label: "Country",
        name: 'country'
      }
    ],
  },
]
