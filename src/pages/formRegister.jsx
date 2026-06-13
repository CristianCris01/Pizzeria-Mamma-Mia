import { useState } from "react";
import {useNavigate} from "react-router-dom";

 

function FormRegister({ onClose }) {
  const [passwordCon, setPasswordCon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        
        if (!email || !password || !passwordCon || passwordCon !== password || password.length < 6 ) {
            alert("Por favor rellena todos los campos, recuerda que la contraseña debe tener al menos 6 caracteres y debe coincidir entre sí");
            return;
        }
        
        else {
        
        
            let user = {email, password};
            let datos = JSON.stringify(user);

            const respuesta = await fetch ("http://localhost:5000/api/auth/register",  {
                method: "POST",
                headers: {"Content-Type": "application/json"
                },
                body: datos,

            });

             let data = await respuesta.json();

            if (data.error){
                alert(data.error)
                return;  
            }
            else {
                alert("Registro exitoso");
                navigate("/login");
               
            }  
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
                onChange={(e) => {setEmail(e.target.value);
                }}  required 
            ></input>

            <br/>
            <label htmlFor="password">Contraseña</label>
            
            <input
                className="inputRegister"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => {setPassword (e.target.value)
                }}  requiered
            ></input>

            <br />
            <label htmlFor="passwordCon">Confirma tu contraseña</label>
            
            <input
                className="inputRegister"
                type="password"
                placeholder="********"
                value={passwordCon}
                onChange={(e) => {setPasswordCon (e.target.value)
                }}  requiered
            ></input>
                
            <br />
            <button className="buttonRegister" type="submit" onClick={handleSubmit}>Registrarse</button>
            <br />
            <button className="buttonRegister" type="button" onClick={onClose}>Cancelar</button>
        </form>
    );
}


export default FormRegister;





           
            

            
        

        
           
