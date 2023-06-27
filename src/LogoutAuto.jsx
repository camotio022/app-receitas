import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';


export const LogoutAuto = () => {
    
    useEffect(() => {
        const auth = getAuth();

        let timeoutId;

        const resetTimer = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                signOut(auth).then(() => {
                    alert('Usuário desconectado automaticamente');
                }).catch((error) => {
                    console.log('Erro ao desconectar o usuário:', error);
                });
            }, 1000); // 30 minutos em milissegundos
        };

        const user = auth.currentUser;
        if (user) {
            resetTimer();

            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    resetTimer();
                } else {
                    clearTimeout(timeoutId);
                    unsubscribe();
                }
            });
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return null; // ou retorne algum conteúdo se necessário
};

