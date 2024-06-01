// 'use strict'
const questionNumber = document.querySelector('h2#numQuestion')
const askQuestion = document.querySelector('p#theQuestion')
const answers = [...document.querySelectorAll('button.options')]
const mainSection = document.querySelector('section#respond')
// const secretAnswers = [...document.querySelectorAll('button.secret')]

const questionsAnswers = [
    {
        question: 'Qual o resultado da expressão -14+5x(-3²)<span>?</span>',
        options: ['Aproximadamente 32.15', '0', '-59', '-63', 'Inválido']
    },
    {
        question: 'O Brasil é mais adepto a qual religião<span>?</span>',
        options: ['Catolicismo', 'Cristianismo', 'Criacionismo', 'Jesus', 'O Brasil é ateu']
    },
    {
        question: 'Em que década o primeiro humano pisou na lua<span>?</span>',
        options: ['90', '80', '70', '60', '50']
    },
    {
        question: 'Como é chamado quem nasce nos Estados Unidos da América<span>?</span>',
        options: ['Estadunidense', 'Américo', 'Europeu', 'Gringo', 'Americano']
    },
    {
        question: 'O quinto número primo depois de 5 é<span>:</span>',
        options: ['19', '5', '7', '11', '17']
    },
    {
        question: 'Qual o idioma oficial do Peru<span>?</span>',
        options: ['Espanhol', 'Inglês', 'Francês', 'Peruano', 'Português']
    },
    {
        question: 'Como se escreve por extenso a 1276ª posição<span>?</span>',
        options: ['Mil duzentos e setenta e seis', 'Milhonésima ducentésima setegésima sexta', '1276', 'Mil duzentos e setenta e sexto', 'Milésima ducentésima septuagésima sexta']
    },
    {
        question: 'Quais são todos nomes de letras gregas<span>?</span>',
        options: ['Prime, Celta, A', 'Alfa, Beta, Ômega', 'Celta, Delta, Gama', 'A, O', 'Sygma, Lambida, Zetta']
    },
    {
        question: 'Qual destes foi o filme com a maior bilheteria da história<span>?</span>',
        options: ['Avatar', 'Vingadores: Ultimato', 'Vingadores', 'King Kong', 'Matrix']
    },
    {
        question: 'Qual é sinônimo de distante<span>?</span>',
        options: ['Distância', 'Lá', 'Longe', 'Avante', 'Perto']
    },
    {
        question: 'Qual é um líquido vital, incolor e inodoro<span>?</span>',
        options: ['Sangue', 'H2O2', 'Oxigênio', 'Vitamina', 'Água']
    },
    {
        question: 'Qual o número oposto a -15<span>?</span>',
        options: ['0', '--15', '15', '-30', '150']
    },
    {
        question: 'Qual não é energia<span>?</span>',
        options: ['Calor', 'Eletricidade', 'Luz', 'Som', 'Matéria']
    },
    {
        question: 'O que é o que é... Cai em pé, e corre deitado<span>?</span>',
        options: ['Minhoca', 'Chuva', 'Gato', 'Sombra', 'Avião']
    },
    {
        question: 'Qual o feminino de tigre<span>?</span>',
        options: ['Tigresa', 'Tigre', 'Tigrona', 'Tigra', 'Tigrasa']
    },
    {
        question: 'Qual não faz parte do corpo humano<span>?</span>',
        options: ['Bile', 'Cloaca', 'Hemoglobina', 'Pele', 'Saliva']
    },
    {
        question: 'Qual a escrita correta<span>?</span>',
        options: ['Obsessão', 'Obzessão', 'Obcessão', 'Obseção', 'Todas as alternativas estão incorretas']
    },
    {
        question: 'O que significa "translate" em inglês<span>?</span>',
        options: ['Translação', 'Translatar', 'Transformar', 'Tradução', 'Traduzir']
    },
    {
        question: 'Qual URL está correta<span>?</span>',
        options: ['Https://.com.youtube%0&23', 'htps://www.youtube', 'https://www.youtube.com', 'www.com.br', 'www.https://youtube.com//']
    },
    {
        question: 'Qual o próximo número da sequência [11, 21, 32, 43, 55, 68]<span>?</span>',
        options: ['83', '73', '100', '86', 'Impossível de saber']
    },
    {
        question: 'Quem é o ser mitológico egípcio que faz perguntas às pessoas<span>?</span>',
        options: ['Esfinge', 'Faraó', 'Cleópatra', 'Pirâmide de Gizé', 'Hórus']
    },
    {
        question: 'Quem é Loki<span>?</span>',
        options: ['Um gigante de gelo', 'Um deus asgardiano', 'Um trapaceiro', 'Um herói', 'Filho de Thor']
    },
    {
        question: 'Durante quanto tempo durou a Guerra dos Cem Anos<span>?</span>',
        options: ['116 anos', '100 anos', '108 anos', '112 anos', '99 anos']
    }
]

//GABARITO??
//MAIS PERGUNTAS

// const secretQuestion = {
//     question: 'Qual o nome do código que você acabou de digitar<span>?</span>',
//     options: ['Código KONAMI', 'The Game Secret Code', 'Código Nintendo', 'Código SEGA', 'Easter Egg'] 
// }

const correctAnswers = [
    // 'Código KONAMI',
    '-59',
    'Cristianismo',
    '60',
    'Americano',
    '19',
    'Espanhol',
    'Milésima ducentésima septuagésima sexta',
    'Alfa, Beta, Ômega',
    'Avatar',
    'Longe',
    'Água',
    '15',
    'Matéria',
    'Chuva',
    'Tigresa',
    'Cloaca',
    'Obsessão',
    'Traduzir',
    'https://www.youtube.com',
    '83',
    'Esfinge',
    'Um gigante de gelo',
    '116 anos'
]

const shuffleArray = array => {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

let numQ = 1
let did = []
let randomQuestionIndex;
let randomQuestion;
let shuffledOptions;

// if(questionNumber.innerHTML === 'Pergunta <span>11</span>') {
//     answers.forEach((button) => {
//         button.classList.remove('options');
//         button.classList.add('secret');
//     });
// } else {
//     answers.forEach(button => {
//         button.classList.remove('secret');
//         button.classList.add('options');
//     });
// }

const doQuestion = () => {
    if(numQ > 10) {
        questionNumber.innerHTML = 'Parabéns<span>!</span> Você completou o Qui<span>z!</span> <span></span>'
        switch(score.length) {
            case 0:
                askQuestion.innerHTML = 'Você acertou <span>0</span> de <span>10</span> perguntas. Tente de novo, você vai conseguir<span>!</span>'
                break;
            case 1:
                askQuestion.innerHTML = 'Você acertou apenas <span>1</span> de <span>10</span> perguntas. Tente de novo, você vai conseguir<span>!</span>'
                break;
            case 2:
                askQuestion.innerHTML = 'Você acertou <span>2</span> de <span>10</span> perguntas. Não quer tentar mais uma vez<span>?</span>'
                break;
            case 3:
                askQuestion.innerHTML = 'Você acertou <span>3</span> de <span>10</span> perguntas. Pode fazer melhor<span>!</span>'
                break;
            case 4:
                askQuestion.innerHTML = 'Você acertou <span>4</span> de <span>10</span> perguntas. Você foi bem<span>!</span>'
                break;
            case 5:
                askQuestion.innerHTML = 'Você acertou <span>5</span> de <span>10</span> perguntas. Você foi bem<span>!</span>'
                break;
            case 6:
                askQuestion.innerHTML = 'Você acertou <span>6</span> de <span>10</span> perguntas. Isso foi ótimo<span>!</span>'
                break;
            case 7:
                askQuestion.innerHTML = 'Você acertou <span>7</span> de <span>10</span> perguntas. É uma boa pontuação<span>!</span>'
                break;
            case 8:
                askQuestion.innerHTML = 'Você acertou <span>8</span> de <span>10</span> perguntas. Isso foi ótimo<span>!</span>'
                break;
            case 9:
                askQuestion.innerHTML = 'Você acertou <span>9</span> de <span>10</span> perguntas. Que incrível<span>!</span>'
                break;
            case 10:
                askQuestion.innerHTML = 'Você acertou <span>10</span> de <span>10</span> perguntas. Parabéns! Você é um gênio<span>!</span>'
                break;
            default: 
                askQuestion.innerHTML = 'ERRO. REINICIE O SITE'/* 'Você acertou <span>11</span> de <span>10</span> perguntas. Insano! Então você encontrou a Pergunta <span>11</span>... Bem esperto<span>!</span>' */
        }
        
        answers.forEach(button => {
            button.style.display = 'none'
        })

        document.querySelector('button#resetButton').style.display = 'inline-block'
        document.querySelector('button#feedback').style.display = 'inline-block'
        return
    }

    do {
        randomQuestionIndex = Math.floor(Math.random() * questionsAnswers.length);
        randomQuestion = questionsAnswers[randomQuestionIndex].question;
    } while (did.includes(randomQuestion));

    shuffledOptions = shuffleArray([...questionsAnswers[randomQuestionIndex].options])

    //

    askQuestion.innerHTML = randomQuestion;
    for (let i in shuffledOptions) {
        answers[i].innerHTML = shuffledOptions[i];
    }

    // if(askQuestion.innerHTML == 'Qual o nome do código que você acabou de digitar<span>?</span>') {
    //     secretAnswers.forEach(button => {
    //         button.classList.add('secret')
    //         button.classList.remove('options')
    //     })
    // }
    
    // secretAnswers.forEach(button => {
    //     button.addEventListener('click', () => {
    //         if(correctAnswers.includes(button.innerHTML)) {
    //             score.push(button.innerHTML)
    //         }
    //         doQuestion()
    //         secretAnswers.forEach(button => {
    //             button.classList.remove('secret')
    //             button.classList.add('options')
    //         })
    //     })
    // })

    

    questionNumber.innerHTML = `Pergunta <span>${numQ++}</span>`
}

window.addEventListener('load', doQuestion())

let score = []
const totalQuestions = 10

const progress = () => {
    const newWidth = (did.length / totalQuestions) * 100;
    document.querySelector('div#inProgressBar').style.width = `${newWidth}%`
    
}

answers.forEach(button => {
    button.addEventListener('click', () => {
        if(correctAnswers.includes(button.innerHTML)) { 
            score.push(button.innerHTML)
        }
        did.push(randomQuestion)
        doQuestion()
        progress()
    })
})

const reset = () => {
    numQ = 1
    did = []
    score = []
    answers.forEach(button => {
        button.style.display = 'inline-block'
    })
    document.querySelector('button#resetButton').style.display = 'none'
    document.querySelector('button#feedback').style.display = 'none'
    doQuestion()
    progress()
}

document.querySelector('button#resetButton').addEventListener('mouseup', reset)

const feedback = () => {
    questionNumber.innerHTML = 'Gabarito'
    askQuestion.innerHTML = 'Estes foram seus acertos e erros<span>:</span>'
    document.querySelector('button#feedback').style.display = 'none'
    const fdbck = document.createElement('p')
    fdbck.innerHTML = 'teste'
    // const rightAndWrong 
    mainSection.prepend(fdbck)
}

document.querySelector('button#feedback').addEventListener('mouseup', feedback)

// const teclas = [];
// const sequencia = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

// let didSecret = []

// window.addEventListener('keydown', (e) => {
//     if(didSecret.includes(secretQuestion.question)){
//         return
//     } else {
//         teclas.push(e.key);

//         if (teclas.length > sequencia.length) {
//             teclas.shift();
//         }

//         if (JSON.stringify(teclas) === JSON.stringify(sequencia)) {
//             questionNumber.innerHTML = 'Pergunta <span>11</span>'
//             askQuestion.innerHTML = secretQuestion.question
//             let shuffledSecretOptions =  shuffleArray([...secretQuestion.options])
            
//             didSecret.push(secretQuestion.question)
//             for (let i in shuffledSecretOptions) {
//                 answers[i].innerHTML = shuffledSecretOptions[i]
//             }
//             numQ--
//         }
//     }
// })