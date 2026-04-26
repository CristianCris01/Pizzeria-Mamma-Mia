import { useState } from "react";

function FormLogin({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Por favor rellena todos los campos");
            return;
        }
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        alert("Sesión iniciada correctamente");
        setEmail("");
        setPassword("");
        onClose();
    };

    return(
        <form 
        className="loginForm" 
        onSubmit={(e)=>{ handleSubmit(e) }}>
            
            <h1>Iniciar sesión</h1>

            <label htmlFor="email">Ingrese su correo electrónico</label>
            
            <input 
                className="inputRegister"
                type="email" 
                placeholder="ejemplo@email.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Ingrese su contraseña</label>
            
            <input 
                className="inputRegister"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="********"
            />
            <br />
            <button className="buttonRegister" type="submit">Iniciar sesión</button>
            <br />
            <button className="buttonRegister" type="button" onClick={onClose}>Cancelar</button>
        </form>
    );
}

export default FormLogin;