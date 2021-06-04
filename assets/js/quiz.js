import { randomItemFromArray } from './randomItem.js'
import { quizResults } from './quizResults.js'
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const containerElement = document.querySelector('.container')
const apiKey = 'fM2ZjlMUQUm5t6tgHe3IyQYj9Q5NHDPs';

let resultArray = quizResults

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
    if (answerObject) {
      const button = document.createElement('button')
      button.innerText = answerObject.answer
      button.classList.add('btn')
      button.addEventListener('click', () => selectAnswer(answerObject))
      answerButtonsElement.appendChild(button)
    }
  })
}

function renderResult(resultsId) {
  while (containerElement.firstChild) {
    containerElement.removeChild(containerElement.firstChild)
  }
  const whatYouWantToDo = findResult(resultsId)
  const createResults = document.createElement('p')
  createResults.innerText = whatYouWantToDo
  const againButton = document.createElement('button')
  againButton.innerHTML = "Again?";
  againButton.onclick = function () {
    window.location.reload()
  }
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${whatYouWantToDo}&rating=g`;
  containerElement.appendChild(createResults)
  containerElement.appendChild(againButton)
  fetchGiphy(path);
}

function selectAnswer(answerObject) {
  const nextTextNodeId = answerObject.nextText
  resultArray = resultArray.filter(result => result.categories.includes(answerObject.filter))
  console.log('resultArray', resultArray)
  if (typeof answerObject.nextText === 'number') {
    showTextNode(nextTextNodeId)
  } else {
    renderResult(resultArray.map(remainingItems => remainingItems.name))
  }
}

function findResult(array) {
  return randomItemFromArray(array);
}

async function fetchGiphy(url) {
  const res = await fetch(url)
  const data = await res.json();
  const randomGif = randomItemFromArray(data.data)
  generateMemeHtml(randomGif);
}

function generateMemeHtml(randomGif) {
  const gif = document.querySelector('.container')
  const gifImage = document.createElement('img');
  gifImage.src = randomGif.images.original.url;
  gifImage.alt = 'gif'
  const gifFigure = document.createElement('figure');
  const gifFigCaption = document.createElement('figcaption');
  gifFigCaption.textContent = 'Powered By Giphy';
  gifFigure.appendChild(gifImage);
  gifFigure.appendChild(gifFigCaption);
  gif.appendChild(gifFigure);
}

const textNodes = [
  {
    id: 1,
    question: 'How many people will be doing this Activity?',
    answers: [
      {
        answer: 'One',
        nextText: 3,
        filter: 'Solo'
      },
      {
        answer: 'Two',
        nextText: 2,
        filter: 'Duo'
      },
      {
        answer: 'Three or More',
        nextText: 3,
        filter: 'Group'
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
        filter: 'Date'
      },
      {
        answer: 'Spending time with my awesome bestie!',
        nextText: 3,
        filter: 'BFF'
      },
    ]
  },

  {
    id: 3,
    question: 'Would you like the activity to be indoor or outdoor?',
    answers: [
      {
        answer: 'Indoor',
        nextText: 4,
        filter: 'Indoor'
      },
      {
        answer: 'Outdoor',
        nextText: 5,
        filter: 'Outdoor'
      },
    ]
  },

  {
    id: 4,
    question: 'Would you like to stay at home or go out?',
    answers: [
      {
        answer: 'I want to stay at home!',
        nextText: 6,
        filter: 'Home'
      },
      {
        answer: 'Spend the night on the Town!',
        nextText: 'result',
        filter: 'Public'
      },
    ]
  },

  {
    id: 5,
    question: 'Out in Nature or a Recreational Activity?',
    answers: [
      {
        answer: 'Spending time with nature!',
        nextText: 'result',
        filter: 'Nature'
      },
      {
        answer: 'I\'m having Parks and Rec Vibes',
        nextText: 'result',
        filter: 'Recreation'
      },
    ]
  },

  {
    id: 6,
    question: 'An Active or Relaxing Activity?',
    answers: [
      {
        answer: 'I like being Active Indoors!',
        nextText: 'result', 
        filter: 'Active'
      },
      {
        answer: 'I need a Relaxing Day!',
        nextText: 'result',
        filter: 'Relaxing'
      },
    ]
  }
]

console.log('textNodes', textNodes)

startQuiz();
