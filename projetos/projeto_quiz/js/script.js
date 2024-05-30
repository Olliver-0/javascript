'use strict'
const questionNumber = document.querySelector('h2#numQuestion')
const askQuestion = document.querySelector('p#theQuestion')
const answers = [...document.querySelectorAll('button')]

const questionsAnswers = [
    {
        question: 'Qual o resultado da expressão (7 x 2 / (2³ - 8)) / 8² - 14<span>?</span>',
        options: ['Aproximadamente 1.15', '0', 'Aproximadamente -13.89', '0.14', 'Inexistente']
    },
    {
        question: 'O Brasil é mais adepto a qual religião<span>?</span>',
        options: ['Catolicismo', 'Cristianismo', 'Criacionismo', 'Jesus', 'O Brasil é ateu']
    },
    {
        question: 'Em que linguagem de programação este quiz foi desenvolvido<span>?</span>',
        options: ['JavaScript', 'BASIC', 'Python', 'HTML', 'WEB']
    },
    {
        question: 'Quem nasce nos Estados Unidos da América é<span>:</span>',
        options: ['Estadunidense', 'Américo', 'Europeu', 'Gringo', 'Americano']
    },
    {
        question: 'O quinto número primo depois de 5 é<span>:</span>',
        options: ['19', '5', '7', '11', '17']
    },
    {
        question: 'O idioma oficial do Peru<span>?</span>',
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
        question: 'Líquido vital<span>,</span> incolor e inodoro<span>:</span>',
        options: ['Sangue', 'H2o', 'Oxigênio', 'Vitamina', 'Água']
    },
    {
        question: 'Qual o número oposto a -15<span>?</span>',
        options: ['0', '--15', '15', '-30', '150']
    },
    {
        question: 'Não é energia<span>:</span>',
        options: ['Calor', 'Eletricidade', 'Luz', 'Som', 'Matéria']
    },
    {
        question: 'O que é o que é<span>...</span> Cai em pé<span>,</span> e corre deitado<span>?</span>',
        options: ['Cadeirante', 'Chuva', 'Gato', 'Cobra', 'Carro']
    },
    {
        question: 'Qual o feminino de tigre<span>?</span>',
        options: ['Tigresa', 'Tigre', 'Tigrona', 'Tigra', 'Tigrasa']
    },
    {
        question: 'Não faz parte do corpo humano<span>:</span>',
        options: ['Bile', 'Cloaca', 'Hemoglobina', 'Pele', 'Saliva']
    },
    {
        question: 'Qual a escrita correta<span>?</span>',
        options: ['Obsessão', 'Obzessão', 'Obcessão', 'Obseção', 'Todas as alternativas estão incorretas']
    },
    {
        question: 'O que significa <span>"</span>translate<span>"</span> em inglês<span>?</span>',
        options: ['Translação', 'Translatar', 'Transformar', 'Tradução', 'Traduzir']
    },
    {
        question: 'Qual URL está correta<span>?</span>',
        options: ['Https://.com.youtube%0&23', 'htps://www.youtube', 'https://www.youtube.com', 'www.com.br', 'www.https://youtube.com//']
    },
    {
        question: 'Qual o próximo número da sequência 11<span>,</span> 21<span>,</span> 32<span>,</span> 43<span>,</span> 55<span>,</span> 68<span>.</span>..<span>?</span>',
        options: ['83', '73', '100', '86', 'Impossível de saber']
    },
]

const secretQuestion = {
    question: 'Qual o nome do código que você acabou de digitar<span>?</span>',
    options: ['Código KONAMI', 'The Game Secret Code', 'Código Nintendo', 'Código SEGA', 'Easter Egg'] 
}
//BARRA DE PROGRESSO??
//GABARITO??
//MAIS PERGUNTAS
const correctAnswers = [
    'Código KONAMI',
    'Aproximadamente -13.89',
    'Cristianismo',
    'JavaScript',
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
    '83'
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

const doQuestion = () => {
    if(numQ > 10) {
        questionNumber.innerHTML = 'Parabéns<span>!</span> Você completou o Qui<span>z!</span> <span></span>'
        switch(score.length) {
            case 0:
                askQuestion.innerHTML = 'Você acertou <span>0</span> de <span>10</span> perguntas<span>.</span> Tente de novo, você vai conseguir<span>!</span>'
                break;
            case 1:
                askQuestion.innerHTML = 'Você acertou apenas <span>1</span> de <span>10</span> perguntas<span>.</span> Tente de novo, você vai conseguir<span>!</span>'
                break;
            case 2:
                askQuestion.innerHTML = 'Você acertou <span>2</span> de <span>10</span> perguntas<span>.</span> Não quer tentar mais uma vez<span>?</span>'
                break;
            case 3:
                askQuestion.innerHTML = 'Você acertou <span>3</span> de <span>10</span> perguntas<span>.</span> Pode fazer melhor<span>!</span>'
                break;
            case 4:
                askQuestion.innerHTML = 'Você acertou <span>4</span> de <span>10</span> perguntas<span>.</span> Você foi bem<span>!</span>'
                break;
            case 5:
                askQuestion.innerHTML = 'Você acertou <span>5</span> de <span>10</span> perguntas<span>.</span> Você foi bem<span>!</span>'
                break;
            case 6:
                askQuestion.innerHTML = 'Você acertou <span>6</span> de <span>10</span> perguntas<span>.</span> Isso foi ótimo<span>!</span>'
                break;
            case 7:
                askQuestion.innerHTML = 'Você acertou <span>7</span> de <span>10</span> perguntas<span>.</span> É uma boa pontuação<span>!</span>'
                break;
            case 8:
                askQuestion.innerHTML = 'Você acertou <span>8</span> de <span>10</span> perguntas<span>.</span> Isso foi ótimo<span>!</span>'
                break;
            case 9:
                askQuestion.innerHTML = 'Você acertou <span>9</span> de <span>10</span> perguntas<span>.</span> Que incrível<span>!</span>'
                break;
            case 10:
                askQuestion.innerHTML = 'Você acertou <span>10</span> de <span>10</span> perguntas<span>.</span> Parabéns! Você é um gênio<span>!</span>'
                break;
            default: 
                askQuestion.innerHTML = 'Então você encontrou a <span>11ª</span> pergunta<span>,</span> huh<span>?</span> Bem esperto<span>.</span>'
        }
        
        answers.forEach(button => {
            button.style.display = 'none'
        })

        document.querySelector('button#resetButton').style.display = 'inline-block'
        return
    }

    let randomQuestionIndex;
    let randomQuestion;
    let shuffledOptions;

    do {
        randomQuestionIndex = Math.floor(Math.random() * questionsAnswers.length);
        randomQuestion = questionsAnswers[randomQuestionIndex].question;
    } while (did.includes(randomQuestion));

    shuffledOptions = shuffleArray([...questionsAnswers[randomQuestionIndex].options])

    did.push(randomQuestion)

    askQuestion.innerHTML = randomQuestion;
    for (let i in shuffledOptions) {
        answers[i].innerHTML = shuffledOptions[i];
    }

    questionNumber.innerHTML = `Pergunta <span>${numQ++}</span>`
    
}

let score = []

answers.forEach(button => {
    button.addEventListener('click', () => {
        if(correctAnswers.includes(button.innerHTML)) { 
            score.push(button.innerHTML)
        }
        doQuestion()
    });
});

const reset = () => {
    numQ = 1
    did = []
    score = []
    answers.forEach(button => {
        button.style.display = 'inline-block'
    })
    document.querySelector('button#resetButton').style.display = 'none'
}

document.querySelector('button#resetButton').addEventListener('mouseup', reset)

window.addEventListener('load', doQuestion())

const teclas = [];
const sequencia = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

window.addEventListener('keydown', (e) => {
    if(did.includes(secretQuestion.question)){
        return
    } else {
        teclas.push(e.key);

        if (teclas.length > sequencia.length) {
            teclas.shift();
        }
    
        if (JSON.stringify(teclas) === JSON.stringify(sequencia)) {
            questionNumber.innerHTML = 'Pergunta <span>11</span>'
            askQuestion.innerHTML = secretQuestion.question
            let shuffledSecretOptions =  shuffleArray([...secretQuestion.options])
            did.push(secretQuestion.question)
            for (let i in shuffledSecretOptions) {
                answers[i].innerHTML = shuffledSecretOptions[i]
            }
            numQ--
        }
    }
})