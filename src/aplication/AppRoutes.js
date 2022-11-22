import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
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

    return (
     
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/app" element={<Starships count={count}  sum={sum} />} />  
            <Route path="/app/:name" element={<Enlace count={count}/>} />        
        </Routes>
    
    );
  }