const MyComponent = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
  
    const handleLogin = () => {
      login();
    };
  
    const handleLogout = () => {
      logout();
    };
  
    return (
      <div>
        {isAuthenticated ? (
          <div>
            <p>Usuário logado!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Usuário não logado</p>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  };