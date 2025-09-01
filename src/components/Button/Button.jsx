import '.Button.css';

// Componente reutilizavel que recebe 'children' (o texto do botão) 
// e 'onClick' (a função a ser executada ao clicar).
// O 'type' é importante para formulários ('submit' ou 'button)

function Button({children, onClick, tyoe = 'button'}) {
    return (
        <button type={type} className='custom-button' onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;