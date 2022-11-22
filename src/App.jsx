import { BrowserRouter} from "react-router-dom";
import AppRoutes from "./aplication/AppRoutes";
import { Header } from "./components/Header/Header";
import { Pages } from "./components/Pages/Pages";
import { PageStyled } from "./components/PageStyled";




function App() {

  

  return (
    <BrowserRouter>
   <PageStyled>

    <div className="container " style={{minHeight:'100vh'}}>
      <Header/>
      <Pages/> 
      <AppRoutes/>
 


      </div>
    
   </PageStyled> 
   
   </BrowserRouter>);
}

export default App;
