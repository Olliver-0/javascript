const num = [2, 13, 24, 35, 100, 98, 0.39021, 1.88, 5925, 3.14, 900]

function random() {
    const numRandom = Math.floor(Math.random() * num.length)
    console.log(num[numRandom])
}

random()