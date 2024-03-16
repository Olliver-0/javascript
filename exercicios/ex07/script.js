let bcgd = window.document.body.style.backgroundColor;

function changeColor() {
    switch (bcgd) {
        case 'rgb(61, 61, 61)': // Representação RGB de 'gray'
            bcgd = 'rgb(255, 0, 0)'; // Vermelho
            break;
        case 'rgb(255, 0, 0)': // Representação RGB de 'red'
            bcgd = 'rgb(0, 255, 0)'; // Verde
            break;
        case 'rgb(0, 255, 0)':
            bcgd = 'rgb(0, 0, 255)';
            break;
        default:
            bcgd = 'rgb(61, 61, 61)'; // Cinza
    }
    document.body.style.backgroundColor = bcgd; // Atualiza a cor de fundo
}

document.addEventListener('keydown', changeColor);