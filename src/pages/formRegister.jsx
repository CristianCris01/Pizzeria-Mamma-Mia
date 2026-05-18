import { useState } from "react";

 

function FormRegister({ onClose }) {
  const [passwordCon, setPasswordCon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar que todos los campos estén rellenados
        if (!email || !password || !passwordCon) {
            alert("Por favor rellena todos los campos");
            return;
        }
        
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }
        else if (password !== passwordCon) {
            alert("Las contraseñas no coinciden");
            return;
        }
        else {
            alert("Registro exitoso");
            setEmail("");
            setPassword("");
            setPasswordCon("");
            onClose();
        }
    };

  return (
        <form 
            className="loginForm"
            onSubmit={ (e) => {handleSubmit(e)}}
            >

                <h1>Crea tu cuenta</h1>
            <br/>    
            
            <label htmlFor="email">Correo electrónico</label>
            
            <input
                className="inputRegister"
                type="email"
                placeholder="ejemplo@email.com" 
                value={email} 
                value={email}
                onChange={(e) => {setEmail(e.target.value);
                }}   
            ></input>

            <br/>
            <label htmlFor="password">Contraseña</label>
            
            <input
                className="inputRegister"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => {setPassword (e.target.value)
                }}
            ></input>

            <br />
            <label htmlFor="passwordCon">Confirma tu contraseña</label>
            
            <input
                className="inputRegister"
                type="password"
                placeholder="********"
                value={passwordCon}
                onChange={(e) => {setPasswordCon (e.target.value)
                }}
            ></input>
                
            <br />
            <button className="buttonRegister" type="submit">Registrarse</button>
            <br />
            <button className="buttonRegister" type="button" onClick={onClose}>Cancelar</button>
        </form>
    );
}


export default FormRegister;
