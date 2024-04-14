'use strict'
let questionNumber = document.querySelector('h2#numQuestion')
let askQuestion = document.querySelector('p#theQuestion')
// const a1 = document.querySelector('button#a')
// const a2 = document.querySelector('button#b')
// const a3 = document.querySelector('button#c')
// const a4 = document.querySelector('button#d')
// const a5 = document.querySelector('button#e')
let answers = [...document.querySelectorAll('button')]

const questionsAnswers = [
    {
        question: 'Qual o resultado da expressão: (7 x 2 / (2³ - 8)) / 8² - 14',
        options: ['Aproximadamente 1.15', '0', 'Aproximadamente -13.89', '0.14', 'inexistente']
    },
    {
        question: 'O Brasil é mais adepto a qual religião?',
        options: ['Catolicismo', 'Cristianismo', 'Criacionismo', 'Jesus', 'O Brasil é ateu']
    },
    {
        question: 'Em que linguagem de programação este quiz foi desenvolvido?',
        options: ['JavaScript', 'BASIC', 'Python', 'HTML', 'WEB']
    },
    {
        question: 'Quem nasce nos Estados Unidos da América é:',
        options: ['Estadunidense', 'Américo', 'Europeu', 'Gringo', 'Americano']
    },
    {
        question: 'O quinto número primo depois de 5 é:',
        options: ['19', '5', '7', '11', '17']
    },
    {
        question: 'O idioma oficial do Peru?',
        options: ['Espanhol', 'Inglês', 'Frances', 'Peruano', 'Português']
    },
    {
        question: 'Como se escreve por extenso a 1276ª posição?',
        options: ['Mil duzentos e setenta e seis', 'Milhonésima ducentésima setegésima sexta', '1276', 'Mil duzentos e setenta e sexto', 'Milésima ducentésima septuagésima sexta']
    },
    {
        question: 'Quais são todos nomes de letras gregas?',
        options: ['Prime, Celta, A', 'Alfa, Beta, Ômega', 'Celta, Delta, Gama', 'A, O, I', 'Sygma, lambida, zetta']
    },
    {
        question: 'Qual destes foi o filme com a maior bilheteria história?',
        options: ['Avatar', 'Vingadores: Ultimato', 'Vingadores', 'King Kong', 'Matrix']
    },
    {
        question: 'Qual é sinônimo de distante?',
        options: ['Distância', 'Lá', 'longe', 'Avante', 'Perto']
    },
    {
        question: 'Líquido vital, incolor e inodoro:',
        options: ['Sangue', 'H20', 'Oxigênio', 'Vitamina', 'Água']
    },
    {
        question: 'Qual o número oposto a -15?',
        options: ['0', '--15', '15', '-30', '150']
    },
    {
        question: 'Não é energia:',
        options: ['Calor', 'Eletricidade', 'Luz', 'Som', 'Matéria']
    },
    {
        question: 'O que é o que é? Cai em pé, e corre deitado?',
        options: ['Cadeirante', 'Chuva', 'Gato', 'Cobra', 'Carro']
    },
    {
        question: 'Feminino de tigre',
        options: ['Tigresa', 'Tigre', 'Tigrona', 'Tigra', 'Tigrasa']
    },
    {
        question: 'Não faz parte do corpo humano:',
        options: ['Bile', 'Cloaca', 'Hemoglobina', 'Pele', 'Saliva']
    },
    {
        question: 'Qual a escrita correta?',
        options: ['Obsessão', 'Obzessão', 'Obcessão', 'obseção', 'Todas as alternativas estão incorretas']
    },
    {
        question: 'O que significa "translate" em inglês?',
        options: ['Translação', 'Translatar', 'Transformar', 'Tradução', 'Traduzir']
    },
    {
        question: 'Qual URL está correta?',
        options: ['Https://.com.youtube%0&23', 'htps://www.youtube', 'https://www.youtube.com', 'www.com.br', 'www.https://youtube.com//']
    },
    {
        question: 'Qual o próximo número da sequência 11, 21, 32, 43, 55, 68...?',
        options: ['73', '79', '100', '86', 'Impossível de saber']
    },
]

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Escolha um índice aleatório entre 0 e i
      [array[i], array[j]] = [array[j], array[i]]; // Troque os elementos nas posições i e j
    }
    return array;
  }

const doQuestion = () => {
    let randomQuestionIndex = Math.floor(Math.random() * questionsAnswers.length)
    let randomQuestion = questionsAnswers[randomQuestionIndex].question
    let shuffledOptions = shuffleArray(questionsAnswers[randomQuestionIndex].options)

    questionNumber.innerHTML = 'Pergunta 1'
    askQuestion.innerHTML = randomQuestion
    for(let i in shuffledOptions) {
        answers[i].innerHTML = shuffledOptions[i]
    }
}

let values = []

const setValues = () => {
    values.push(button.value)
    console.log(values)
}

window.addEventListener('load', doQuestion())
button.addEventListener('click', setValues)
