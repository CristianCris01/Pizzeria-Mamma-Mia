import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <main className="profile-page">
      <h1>Perfil de usuario</h1>
      <h2>Bienvenido, UsuariodelaPizza@gmail.com</h2>
      <p>Esta es la página de perfil. Aquí puedes mostrar información del usuario, pedidos y ajustes.</p>
      <button className="buttonRegister" onClick={() => navigate('/')}>Cerrar sesión</button>
    </main>
  );
}

export default Profile;
