import { HeaderStyled } from "./HeaderStyled"
import logosw from '../../assets/logosw.png';

export const Header = () => {
  return (
  <HeaderStyled div className="container">
    
    <div className="row justify-content-end ">
    <div className="col-4 align-self-center my-3">
        <img src={logosw}  alt="" width="75%"/></div>
    <div className="col-4 align-self-center d-flex justify-content-end">LOGIN // SIGN UP</div>

    </div>
  </HeaderStyled>
  )
}
