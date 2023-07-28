import *as Tag from '../../index.js'


export const ProgressFavoriteRecipes = () => {
    return (
        <>
            <Tag.Contain sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '16px',
                color: 'black',
                borderRadius: '4px',
                animation: 'floatingAnimation 2s ease-in-out infinite',
                '@keyframes floatingAnimation': {
                    '0%': {
                        transform: 'translate(-50%, -50%)',
                    },
                    '50%': {
                        transform: 'translate(-50%, -40%)',
                    },
                    '100%': {
                        transform: 'translate(-50%, -50%)',
                    },
                },
            }}>Você não tem nenhuma receita por enquando!</Tag.Contain>
        </>
    )
}