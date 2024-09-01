import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/index.jsx'
import Localização from './pages/Localização'
import Carrinho from './pages/Carrinho'


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/carrinho" element={ <Carrinho /> }></Route>
                <Route path="/localizacao" element={ <Localização /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes