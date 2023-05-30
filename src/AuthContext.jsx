import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        // Lógica de autenticação bem-sucedida
        // Define isAuthenticated como true e armazena o token de autenticação
        setIsAuthenticated(true);
        // Outras lógicas de armazenamento de token de autenticação, como cookies ou localStorage
    };

    const logout = () => {
        // Lógica de logout
        // Define isAuthenticated como false e remove o token de autenticação
        setIsAuthenticated(false);
        // Outras lógicas de remoção do token de autenticação, como cookies ou localStorage
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };