import { useState,useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Logout } from "../components/Logout/Logout";
import { Sign } from "../components/Sign/Sign";
import { Enlace } from "../components/StarShips/Enlace";
import { Starships } from "../components/StarShips/Starships.jsx";



export default function AppRoutes() {

    const [isLoged, setIsLoged] = useState(false)

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
            { (isLoged) ?
                <> 
                <Route path="/" element={< Home/>} />
                <Route path="/app" element={<Starships count={count}  sum={sum} />} />  
                <Route path="/app/:name" element={<Enlace count={count}/>} /> 
                <Route path="/*" element={<Navigate to={"/"}/>}/> 
                <Route path="/logout" element={<Logout  setIsLoged={setIsLoged}/>} />
                </>
            :
                <>
                <Route path="/login" element={<Login users={users} setIsLoged={setIsLoged}/>} />   
                <Route path="/sign" element={<Sign users={users} setUsers={setUsers}/>} />
                <Route path="/*" element={<Navigate to={"/login"}/>}/> 
                </>
            }
            
  

        </Routes>
    
    );
  }