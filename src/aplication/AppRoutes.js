import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Enlace } from "../components/StarShips/Enlace";
import { Starships } from "../components/StarShips/Starships.jsx";


export default function AppRoutes() {



    return (
     
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/app" element={<Starships />} />  
            <Route path="/app/:name" element={<Enlace />} />        
        </Routes>
    
    );
  }