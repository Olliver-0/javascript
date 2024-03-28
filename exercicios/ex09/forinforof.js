const num = [10, 20, 30, 40, 50]

/*for (let i= 0; i < num.length; i++) {
    console.log(num[i])
}*/

/*for (n in num) {
    console.log(num[n])
}*/

for (n of num) {
    console.log(n)
}

//for in itera sobre o índice e for of itera diretamente sobre o valor