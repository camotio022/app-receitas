export const CounterComment = (props) => {
    const { comment, recipe } = props;
    const totalComments = comment.reduce((total, c) => {
        if (c.commented_recipeId === recipe?.id) {
            let commentCount = 1; // Conta o comentário principal

            // Função para contar as respostas recursivamente
            const countReplies = (replies) => {
                for (const reply of replies) {
                    commentCount++; // Incrementa para cada resposta
                    if (reply.replys && reply.replys.length > 0) {
                        countReplies(reply.replys); // Chama recursivamente para respostas aninhadas
                    }
                }
            };
            // Verifique se há respostas e chame a função de contagem
            if (c.replys && c.replys.length > 0) {
                countReplies(c.replys);
            }
            return total + commentCount;
        }
        return total;
    }, 0);
    return (
        <div>
            {totalComments}
        </div>
    );
}