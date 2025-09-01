import Button from '../Button/Button';
import './Menu.css';

// Recebe a função 'onMenuClick' via props para...
function Menu({ onMenuClick}) {
    return (

        <nav className="app-menu">
            {/* Ao clicar, chama a função recebida, passando o nome da tela desejada */}
            <Button onClick={() => onMenuClick('login')}>Login</Button>
            <Button onClick={() => onMenuClick('cadastro')}>Cadastro</Button>
        </nav>
    );
}

export default Menu;