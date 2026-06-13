import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/authContext";
import { useState, useEffect } from "react";

function Profile() {
  const { user } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  useEffect(() => {
    const getUserProfile = async () => {

      const respuesta = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      let data = await respuesta.json();
      setUserProfile(data);
      
    }
    getUserProfile();
     }, [user]);
      

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!userProfile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <main className="profile-page">
      <h1>Perfil de usuario</h1>
      <h2>Bienvenido, {userProfile.email}</h2>
      <h3> ID: {userProfile.id}</h3>
      <p>Esta es la pagina de perfil. Aqui puedes mostrar informacion del usuario, pedidos y ajustes.</p>
      <button className="buttonRegister" onClick={handleLogout}>Cerrar sesion</button>
    </main>
  );
}

export default Profile;
