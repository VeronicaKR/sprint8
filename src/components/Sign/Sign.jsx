import React, { useState } from 'react'
import { SignStyled } from './SignStyled'

export const Sign = ({users,setUsers}) => {

const [email, setEmail] = useState('');
const [pasword, setPasword] = useState('');



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

const existEmail = users.find(element => element.email === email) 
if (existEmail){
    alert('USER ALREADY REGISTER')
    return
} 


 setUsers([...users,{email,pasword}])  
 setEmail('') 
 setPasword('')

}
console.log(users)



  return (
    <SignStyled>
    <h1>SIGN IN</h1>
    <br />  
    <form onSubmit={onSubmit}>
    <p>EMAIL</p>
    <input type="text" value={email} onChange={ (event) => setEmail(event.target.value)} />
    <p>PASSWORD</p>
    <input type="text" value={pasword} onChange={ (event) => setPasword(event.target.value)}/>
   
    <button type="submit">SEND</button>
     </form>
    
    </SignStyled>
    
  )
}
