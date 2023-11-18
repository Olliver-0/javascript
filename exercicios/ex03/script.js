function responder() {
    var dinheiro = window.document.querySelector('input#salario')
    var res = window.document.querySelector('div#res')
    var sal = Number(dinheiro.value)
    res.innerHTML = `<p>Seu salário é de <strong>${sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong></p>`
    if (sal <= 1000) {
        res.innerHTML += 'Tá passando fome, hein? Quer um <strong>pão</strong>?'
    } else if (sal < 5000) {
        res.innerHTML += '<p>Seu <strong>POBRE</strong></p>'
    } else if (sal < 10000) {
        res.innerHTML += '<p><strong>Parabéns!</strong> Continue usufruindo do capitalismo</p>'
    } else {
        res.innerHTML += '<p><strong>Eita</strong>. Deve ter agiotismo envolvido nisso</p>'
    }
}