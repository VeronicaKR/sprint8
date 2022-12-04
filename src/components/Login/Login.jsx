import { useState } from "react";
import { LoginStyled } from "./LoginStyled";
import { useNavigate } from 'react-router-dom'

export const Login = ({users}) => {
  const [email, setEmail] = useState('');
  const [pasword, setPasword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    
    if (!email ) {
        alert('EMAIL REQUIRED')
        return
    }
    
    if (!pasword ){
        alert('PASWORD REQUIRED')
        return
    }
    
    const exist = users.find(element => element.email === email && element.pasword === pasword)
 

    if (exist){
      alert('EXISTE')
      console.log('usuario registrado')
      return
    }alert('NOT FOUND THIS CREDENTIALS')
    console.log('usuario no registrado')
    navigate("/sign")


  }
    

  return (
    <LoginStyled>
    <h1>LOGIN</h1>
    <br />  
    <form onSubmit={onSubmit}>
    <p>EMAIL</p>
    <input type="text" value={email} onChange={ (event) => setEmail(event.target.value)} />
    <p>PASSWORD</p>
    <input type="text" value={pasword} onChange={ (event) => setPasword(event.target.value)}/>
   
    <button type="submit">ENTER</button>
     </form>
    </LoginStyled> 
  )
}
