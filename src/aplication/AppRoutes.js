import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Sign } from "../components/Sign/Sign";
import { Enlace } from "../components/StarShips/Enlace";
import { Starships } from "../components/StarShips/Starships.jsx";


export default function AppRoutes() {

    const [count, setCount] = useState(1);

    const sum = () =>{
        if(count<4){
            setCount(count+1)
        }else{
              setCount(1)
        }       
    };

    const [users, setUsers] = useState(() =>{
        const users = localStorage.getItem('users')
        return JSON.parse(users) || []
    } );
    
    useEffect(() => {
    localStorage.setItem('users',JSON.stringify(users))
    
    }, [users])

    return (
     
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/app" element={<Starships count={count}  sum={sum} />} />  
            <Route path="/app/:name" element={<Enlace count={count}/>} />       
            <Route path="/login" element={<Login users={users}/>} />   
            <Route path="/sign" element={<Sign users={users} setUsers={setUsers}/>} />  
        </Routes>
    
    );
  }