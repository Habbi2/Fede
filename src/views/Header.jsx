import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import getFakeUser from "../api/auth";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const context = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const loginUser = () => {
    const user = getFakeUser();
    context.toggleAuth(user);
  };
  const logoutUser = () => {
    context.toggleAuth(null);
  };
  return (
    <nav
      className="header"
      style={{ background: theme.theme.ui, color: theme.theme.syntax }}
    >
      <div>
        {context.isAuthenticated ? (
          <h1>{context.user.fullName}</h1>
        ) : (
          <h1>Usuario Desconocido</h1>
        )}
      </div>
      {context.isAuthenticated ? (
        <button onClick={() => logoutUser()}>desloguearse</button>
      ) : (
        <button onClick={() => loginUser()}>loguearse</button>
      )}
    </nav>
  );
};

export default Header;
