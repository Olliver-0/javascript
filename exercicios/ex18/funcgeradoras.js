function* cores() {
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)