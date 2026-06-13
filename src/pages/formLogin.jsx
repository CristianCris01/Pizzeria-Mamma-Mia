import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/authContext";

function FormLogin({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
  

    const handleSubmit  = async(e) => {
        e.preventDefault();

        if (!email || !password || password.length < 6) {
            alert("Por favor rellena todos los campos");
                return;
            }
        else {
            const respuesta = await fetch ("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}),
            })
            let data = await respuesta.json()

            if (data.error){
                alert(data.error)
                return;

            }
            else {
                alert("Sesion iniciada correctamente");
                let usuarioLoged = {
                    email: data.email,
                    token: data.token,
                }
                    
                setUser(usuarioLoged);
                navigate("/");
                login();
               
            }
        }
    };

    

    

    return (
        <form
            className="loginForm"
            onSubmit={handleSubmit}
        >
            <h1>Iniciar sesion</h1>

            <label htmlFor="email">Ingrese su correo electronico</label>

            <input
                className="inputRegister"
                type="email"
                placeholder="ejemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Ingrese su contrasena</label>

            <input
                className="inputRegister"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
            />
            <br />
            <button className="buttonRegister" type="submit">Iniciar sesion</button>
            <br />
            <button className="buttonRegister" type="button" >Cancelar</button>
        </form>
    );
}

export default FormLogin;
