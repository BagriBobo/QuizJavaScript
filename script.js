const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const video = document.getElementById('qVideo')
const img = document.getElementById('qFoto')
const finalScore = document.getElementById('score');

let total = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  finalScore.classList.remove('hide')
  setNextQuestion()
  total = 0
  finalScore.innerHTML = `Pontuação: ${total}`
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      finalScore.innerHTML = `Pontuação: ${total}`
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Recomeçar'
    startButton.classList.remove('hide')
  }
  if (correct) {
    total++
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Qual o nome da cidade onde se passa a maior parte da série?',
    answers: [
      { text: 'Nova Jersey', wrong: false },
      { text: 'Texas', wrong: false },
      { text: 'Hawkins', correct: true },
      { text: 'São Paulo', wrong: false }
    ],
    tipo: 'img',
    src: 'https://static.wikia.nocookie.net/strangerthings8338/images/2/2a/Hawkins.png/revision/latest?cb=20160811153440'
  },
  {
    question: 'A música Every Breath you take, de The Police tocou no final de qual temporada da série?',
    answers: [
      { text: '1', wrong: false },
      { text: '2', correct: true },
      { text: '3', wrong: false },
      { text: '4', wrong: false }
    ],
  },
  {
    question:'De onde é a inspiração para os principais monstros da série?',
    answers:[
      {text: 'Dungeons and Dragons', correct: true},
      {text:'Star Wars', wrong:false},
      {text:'Call of cthulhu', wrong:false},
      {text:'Ordem Paranormal', wrong:false}
    ],
  },
  {
    question:'Qual o nome da personagem que desaparece na 1ª Temporada?',
    answers:[
      {text:'Will Byers', correct : true},
      {text:'Mike Mazowski', wrong : false},
      {text:'Steve Harrington', wrong : false},
      {text:'James Hopper', wrong : false}
    ]
  },
  {
    question:'Qual a comida favorita de Eleven?',
    answers:[
      {text:'Strogonnoff', wrong : false},
      {text:'Macarrão', wrong : false},
      {text:'Waffles', correct : true},
      {text:'Pizza', wrong : false}
    ]
  },
  {
    question:'Qual o nomem do clube de RPG na 4ª temporada?',
    answers:[
      {text:'Frostfire Club', wrong : false},
      {text:'Clube do bolinha', wrong : false},
      {text:"Hell's kitchen", wrong : false},
      {text:'Hellfire Club', correct : true}
    ]
  },
  {
    question:'Onde foi aberto o primeiro portal para o Mundo Invertido?',
    answers:[
      {text:'Lago dos Amantes', wrong : false},
      {text:'Laboratório de Hawkins', correct : true},
      {text:'Colégio de Hawkins', wrong : false},
      {text:'Base Russa', wrong : false}
    ]
  },
  {
    question:'Qual é o triângulo amoroso na série',
    answers:[
      {text:'Max, Lucas e Dustin', wrong : false},
      {text:'Mike, Eleven e Lucas', wrong : false},
      {text:'Steve, Nancy e Jonathan', correct : true},
      {text:'Dustin, Mike e Will', wrong : false}
    ]
  },
  {
    question:'Quais são os poderes da Eleven?',
    answers:[
      {text:'Telecinese', correct : true},
      {text:'Soltar Hadouken', wrong : false},
      {text:'Parar o tempo', wrong : false},
      {text:'Teletransporte', wrong : false}
    ]
  },
  {
    question:'Quem tinha a melhor Pontuação no Fliperama',
    answers:[
      {text:'Max', correct : true},
      {text:'Billy', wrong : false},
      {text:'Eleven', wrong : false},
      {text:'Dustin', wrong : false}
    ]
  }
]