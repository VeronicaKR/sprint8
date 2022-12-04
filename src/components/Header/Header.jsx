import { HeaderStyled } from "./HeaderStyled"
import logosw from '../../assets/logosw.png';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
  <HeaderStyled div className="container">
    
    <div className="row justify-content-end ">
    <div className="col-4 align-self-center my-3">
        <img src={logosw}  alt="" width="75%"/></div>
    <div className="col-4 align-self-center d-flex justify-content-end"><Link to="/login">LOGIN </Link> // <Link to="/sign">SIGN UP</Link></div>

    </div>
  </HeaderStyled>
  )
}
