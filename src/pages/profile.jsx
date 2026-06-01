import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/authContext";

function Profile() {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main className="profile-page">
      <h1>Perfil de usuario</h1>
      <h2>Bienvenido, UsuariodelaPizza@gmail.com</h2>
      <p>Esta es la pagina de perfil. Aqui puedes mostrar informacion del usuario, pedidos y ajustes.</p>
      <button className="buttonRegister" onClick={handleLogout}>Cerrar sesion</button>
    </main>
  );
}

export default Profile;
