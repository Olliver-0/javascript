const p_array = document.querySelector('#array');
const btnReduzir = document.querySelector('#btnReduzir');
const resultado = document.querySelector('#resultado');

const elementos_array = [1, 2, 3, 4, 5];
let ant = [];
let atu = [];

p_array.innerHTML = '[' + elementos_array + ']';
btnReduzir.addEventListener('click', evt => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
        ant.push(anterior);
        atu.push(atual);
        return atual + anterior;
    });
    resultado.innerHTML += '<br>V. anterior: ' + ant + '<br>V. atual: ' + atu;
});
