import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/authContext";

function FormLogin({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Por favor rellena todos los campos");
            return;
        }

        if (password.length < 6) {
            alert("La contrasena debe tener al menos 6 caracteres");
            return;
        }

        alert("Sesion iniciada correctamente");
        login();
        setEmail("");
        setPassword("");

        if (onClose) {
            onClose();
            return;
        }

        navigate("/");
    };

    const handleCancel = () => {
        if (onClose) {
            onClose();
            return;
        }

        navigate("/");
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
            <button className="buttonRegister" type="button" onClick={handleCancel}>Cancelar</button>
        </form>
    );
}

export default FormLogin;
