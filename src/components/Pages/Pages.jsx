import { PagesStyled } from "./PagesStyled";
import { Link } from "react-router-dom";


export const Pages = () => {
  return (
    <PagesStyled div className="container border-top border-bottom">
    
    
        <Link style={{color: "#949191"}} to="/">Home </Link>
        <Link style={{color: "#949191"}} to="/app">StarShips</Link>
    

    
   
     </PagesStyled>
  )
}
