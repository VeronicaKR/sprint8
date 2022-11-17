import { PagesStyled } from "./PagesStyled";
import { Link } from "react-router-dom";


export const Pages = () => {
  return (
    <PagesStyled div className="container border-top border-bottom">
    
    <ul>
        <Link style={{color: 'white'}} to="/">Home</Link>
        <Link style={{color: 'white'}} to="/app">StarShips</Link>
    </ul>

    
   
     </PagesStyled>
  )
}
