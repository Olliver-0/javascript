function calcularImc() {
    let nome = document.querySelector("input#txtnome").value
    let altura = parseFloat(document.getElementById("numaltura").value)
    let peso = parseFloat(document.querySelector("input#numpeso").value)
    let res = document.querySelector("footer#analise");
    let imc = peso / (altura * altura)
    let imc2 = imc.toFixed(2).replace(".", ",")

    if (nome === '' || isNaN(altura) || isNaN(peso)) {
        window.alert('Por favor, preencha todos os campos!')
    } else if (imc < 18.5) {
        res.innerHTML = `O IMC de ${nome} é: ${imc2}. Você está abaixo do peso.`
    } else if (imc >= 25) {
        res.innerHTML = `O IMC de ${nome} é: ${imc2}. Você está acima do peso.`
    } else {
        res.innerHTML = `O IMC de ${nome} é: ${imc2}. Você está no peso ideal.`
    }
}