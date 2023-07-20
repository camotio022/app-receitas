## AllProjet [
    {   
        -- Remover o componente INTERFACE.
        -- Remover todos os estilos: {sx na tela principal}.
    },
    {   
        -- O Card das receitas será Componentizado.
        -- Toda página que necessáriamente vai usar o card da receita, Usará o componente das receitas.
    }
]

## CREATE RECIPES {
    -- Remover a função de os scroll, e pegar o scroll do window.

    RecipeForm {
        -- Componentizar o a tag Grid junto com o seu TextField
    }
}

## DetailsRecipes {
    -- AllProjet
    -- Componentizar a tag Typography, está muito repetido em várias partes.
    -- Toda tag que estiver na página com o sx acima de 5 linhas será Componentizado.
}

## EditRecipes {
    -- Componentizar TextField
}

## favoriteRecipes {
    -- AllProjet[0]
}

## INTERFACE {
    -- Renomear a tag INTERFACE para MainLayout.
    -- Dividir para 4 componentes: {
        Header - logo principal, ícone para abrir o menu lateral, menu do usuário
        Sidebar - menu com itens de navegação, tanto desktop como mobile
        Body - apenas um wrapper para o conteúdo de cada página
        Footer - botões que ficam fixos na parte de baixo e outras coisas referentes a um rodapé, se houver
    }
}
## MyRecipes {
    -- AllProjet[0]
    -- Remover o card das receitas.
    -- Usar o componente das receitas.
}
