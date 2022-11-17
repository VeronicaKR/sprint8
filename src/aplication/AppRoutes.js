import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Starships } from "../components/StarShips/Starships.jsx";

export default function AppRoutes() {
    return (
     
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/app" element={<Starships />} />        
        </Routes>
    
    );
  }