let colocacao = 3

switch (colocacao) {
    case 1:
        console.log('Primeiro colocado')
        break
    case 2:
        console.log('Segundo colocado')
        break
    case 3:
        console.log('Terceiro colocado')
        break
    case 4: case 5: case 6: case 7: case 8: case 9: case 10:
        console.log('Parabéns! Você ficou entre os 10 colocados')
        break
    default:
        console.log('Prêmio de participação')
}