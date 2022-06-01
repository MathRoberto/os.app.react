import './Principal.css'
import Cabecalho from '../../componentes/Cabecalho/cabecalho'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Ajuda from '../Ajuda/Ajuda'
import Rodape from '../../componentes/Rodape/rodape'
import Cadastro from '../Cadastro/Cadastro.jsx'
import Listagem from '../Listagem/Listagem.jsx'
// import AuthContext from '../componentes/AuthContext/AuthContext'


const Principal = ()=>{

    return(
        <BrowserRouter> 
            <div className="principal_content">
                <Cabecalho titulo ='Web OS' /> 
                <Routes>
                    <Route path = '/' element = {<Home />} />
                    <Route path = '/login' element = {<Login />} />
                    <Route path = '/ajuda' element = {<Ajuda />} />
                    <Route path = '/cadastro' element = {<Cadastro />} />
                    <Route path = '/listagem' element = {<Listagem />} /> 

                </Routes>
                <Rodape nomeRodape = 'Aplicativo OS' />
            </div>
            
        </BrowserRouter>
    )
}

export default Principal