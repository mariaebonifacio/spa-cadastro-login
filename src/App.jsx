import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import FormularioLogin from './components/FormularioLogin/FormularioLogin';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { useState } from 'react';

function App() {
    const [tela, setTela] = useState('login');

    const mudarTela = (novaTela) => {
        setTela(novaTela)
    }

   
    let conteudoDaTela;

   

    return (
        <div>
            <Header />
            <Menu onMenuClick={mudarTela} />
            {tela === 'login' ? <FormularioLogin/> : <FormularioCadastro />}
            {conteudoDaTela}
        </div>
    );
}

export default App;