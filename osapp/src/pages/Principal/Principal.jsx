import './Principal.css'
import Cabecalho from '../../componentes/Cabecalho/cabecalho'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Ajuda from '../Ajuda/Ajuda'
const Principal = ()=>{

    return(
        <BrowserRouter> 
            <div className="principal_content">
                <Cabecalho titulo ='Web OS' /> 
                <Routes>
                    <Route path = '/' element = {<Home />} />
                    <Route path = '/' element = {<Login />} />
                    <Route path = '/' element = {<Ajuda />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Principal