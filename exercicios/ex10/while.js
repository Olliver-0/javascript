/*let n = 0

while (n <= 10) {
    console.log(n)
    n++
}*/

//5! = 5 * 4 * 3 * 2 * 1 = 120
//Exemplo de fatorial

let n = 5
let fat = 1

while (n >= 1) {
    fat *= n
    n--
}

console.log(fat)