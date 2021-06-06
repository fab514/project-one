import { randomItemFromArray } from './randomItem.js'
import { quizResults } from './quizResults.js'
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const containerElement = document.querySelector('.container')
const apiKey = 'fM2ZjlMUQUm5t6tgHe3IyQYj9Q5NHDPs';

let resultArray = quizResults
console.log('resultArray', resultArray)

function startQuiz() {
  showTextNode(1)
}

// TODO: put removeChildNodes function into a module
function removeChildNodes(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  removeChildNodes(answerButtonsElement)
  questionElement.innerText = textNode.question
  
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

async function renderResult(resultsId) {
  removeChildNodes(containerElement)
  const whatYouWantToDo = findResult(resultsId)
  const createResults = document.createElement('p')
  createResults.textContent = whatYouWantToDo
  const againButton = document.createElement('button')
  againButton.textContent = "Again?";
  againButton.onclick = function () {
    window.location.reload()
  }
  const viewAllButton = document.createElement('button')
  viewAllButton.textContent = "View All Results"
  viewAllButton.addEventListener('click', () => showAll(quizResults))
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${whatYouWantToDo}&rating=g`;
  await fetchGiphy(path);
  containerElement.appendChild(createResults)
  containerElement.appendChild(againButton)
  containerElement.appendChild(viewAllButton)
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

function showAll(allResults) {
  let hi = allResults.map(result => result.name)
  const listOfResults = document.createElement('ul')
  hi.forEach(resultName => {
    const individualResult = document.createElement('li')
    individualResult.textContent = resultName
    listOfResults.appendChild(individualResult)
    return
  })
  console.log('hi', hi)
  const viewAllResults = document.createElement('section')
  viewAllResults.id = 'res'
  const destroyButton = document.createElement('button')
  destroyButton.textContent = 'Destroy List'
  destroyButton.addEventListener('click', () => destroyResultsList())
  viewAllResults.appendChild(listOfResults)
  viewAllResults.appendChild(destroyButton)
  containerElement.appendChild(viewAllResults)
}

function destroyResultsList() {
  const allId = document.getElementById('res')
  allId.remove()

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
