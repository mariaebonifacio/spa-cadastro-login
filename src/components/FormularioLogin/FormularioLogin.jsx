import Button from '../Button/Button';
import './FormularioLogin.css'

function FormularioLogin(){
    //Função para simular o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); //Impede o recarregamento da página
        alert('Dados de cadastro enviados!')
        //Aqui iria a lógica para enviar os dados para um servidor
    };

    return(
        <form className='form-container' onSubmit={handleSubmit}>
            <h2>Acessar Conta</h2>
            <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" placeholder="seuemail@exemplo.com" required />
            </div>
            <div className="form-group">
                <label htmlFor="login-senha">Senha</label>
            <input id="login-senha" type="password" placeholder="Sua senha" required />
            </div>
            <div className="form-actions">
                {/* O botão principal do formulário deve ter type="submit" */}
                <Button type="submit">Entrar</Button>
                <Button type="reset">Limpar</Button>
            </div>
        </form>
    );
}

export default FormularioLogin;