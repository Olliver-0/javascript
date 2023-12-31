function adicionar(n=0) {
    var numero = document.querySelector('input#txtn')
    var n = Number(numero.value)
    if (n < 1 || n > 100) {
        alert('Número inválido, ou você não digitou um número!')
    } else if () {
        var lista = []
        lista.push(n)
        let item = document.createElement('option')
            item.text = `O número ${n} foi adicionado!`
            box.appendChild(item)
    }
}


