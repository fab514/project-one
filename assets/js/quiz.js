const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

function startQuiz() {
  showTextNode(1)
}


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  questionElement.innerText = textNode.question
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }

  
  textNode.answers.forEach(answerObject => {
    if (showAnswer(answerObject)) {
      const button = document.createElement('button')
      button.innerText = answerObject.answer
      button.classList.add('btn')
      button.addEventListener('click', () => selectAnswer(answerObject))
      answerButtonsElement.appendChild(button)
    }
  })
}
 
function showAnswer(answerObject) {
  return answerObject 
}

function selectAnswer(answerObject) {
  const nextTextNodeId = answerObject.nextText
  showTextNode(nextTextNodeId)
}

const textNodes = [ 
  {
    id: 1,
    question: 'How many people will be doing this Activity?',
    answers: [
    {
      answer: 'One',
      nextText: 3,
    },
    {
      answer: 'Two',
      nextText: 2,
    },
    {
      answer: 'Three or More',
      nextText: 3
    },
    ]
  }, 
  
  { 
    id: 2,
    question: 'Is this a date or hanging out with you bff?',
    answers: [
    {
        answer: 'Going on a date and loving it!',
        nextText: 3,
    },
    {
      answer: 'Spending time with my awesome bestie!',
      nextText: 3,
    },
    ]
  },

  {
    id: 3,
    question: 'Would you like the activity to be indoor or outdoor?',
    answers: [
    {
        answer: 'Indoor',
        nextText: 5,
    },
    {
      answer: 'Outdoor',
      nextText: 4
    },
    ]  
  },

  {
    id: 4,
    question: 'Out in Nature or an Outdoor Activity?',
    answers: [
    {
        answer: 'Spending time with nature!',
    },
    {
      answer: 'Active outdoor activity please!',
    },
    ]  
  },

  {
    id: 5,
    question: 'An Active or Relaxing Activity?',
    answers: [
    {
      answer: 'I like being Active Indoors!',
    },
    {
      answer: 'I need a Relaxing Day!',
    }, 
    ]
  }
]
console.log('textNodes', textNodes);

startQuiz();