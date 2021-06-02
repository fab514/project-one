const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const containerElement = document.querySelector('.container')
const apiKey = 'fM2ZjlMUQUm5t6tgHe3IyQYj9Q5NHDPs';

const atHomeRelaxedResults = [
  'Read a New Book',
  'Work on a Puzzle',
  'Take a nap',
  'Binge Watch Series',
  'Find New Music',
  'Sit on the Outside Deck',
  'Home Spa Night',
  'Create a Photo Album',
  'Play a Video or Computer Game',
  'Watch a Movie',
  'Try Out New Cooking Recipes',
  'Listen to a Podcast',
  'Order Delivery',
  'Video Game Tournament',
  'Board Game Night',
];

const atHomeActiveResults = [
  'Room Makeover',
  'Spring Cleaning',
  'Try New Drink Recipes',
  'Walk around Neighborhood',
  'Plant a Home Garden',
  'Home workout or yoga',
  'Learn a new skill',
  'Cooking/Baking Competition',
  'Throw a Party',
  'Throw a Potluck Dinner',
  'Set traps to get rid of burglers',
]

const indoorPublicResults = [
  'Try Out a New Restaurant',
  'Find an Antique or Thrift Shop',
  'Find a local Coffee Shop or Bakery',
  'I\'ll take you to the Candy Shop',
  'Take up a Photography Hobby',
  'Search a Record Store',
  'Perform at an Open Mic night or Karaoke',
  'Play Games at an Arcade',
  'See a Movie at the Theatre',
  'Go see a Comedian',
  'Go on a Dinner cruize',
  'Join a Trivia Night',
  'Community Volunteer',
  'Grocery Shopping',
  'Shopping Scavenger Hunt',
  'Join a Dance Class',
  'Play Pool or go Bowling',
  'Visit an Aquarium or Museum',
  'Go to a Live Concert',
  'Throw a Photo Shoot',
  'Go to the Gym'
]

const natureResults = [
  'Watch the Sunrise/ or Sunset',
  'Go on a Picnic',
  'Take a Hike',
  'Go Camping',
  'Relaxing by a Bonfire',
  'Walk around a Botanical Garden or Arboretum',
  'Train for 5k',
  'Gone Fishing',
  'Ride a Bike',
  'Explore a New City',
  'Take up a Photography Hobby',
  'Take your dog to the Park',
  'Fly a Kite',
  'Have a Photo Shoot',
  'Go to a Zoo',
  'Go Berry or Apple Picking(anything in season)',
  'Horseback Riding',
]

const outdoorActivityResults = [
  'Take a Day Trip out of town or state',
  'Find a GoKart Track',
  'Watch Live Sports',
  'Go shopping at a Street or Art Fair',
  'Geocaching around your town',
  'Explore a New City',
  'Take up a Photography Hobby',
  'Go to the Beach',
  'If winter go Skiing or sledding',
  'If summer, rent a Boat or Jetski',
  'Have a photo shoot',
  'Go Kayaking, canoeing or paddle boating at a lake or river',
  'Find a Frisbee Golf Course',
  'Have fun at a Water Park or Pool',
  'Find Drive-in Movie(Yes there are still some out there)',
  'Play Tag or Hide and Seek',
  'Find a group of friends to play Kickball, Basketball or Softball',
]


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

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('Ahh we used that one last time, look again');
    return randomItemFromArray(arr, not);
  }
  return item;
}

function renderResult(resultsId) {
  console.log('resultsId', resultsId);
  console.log('renderResult', findResult(resultsId))
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
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${whatYouWantToDo}`;
  containerElement.appendChild(createResults)
  containerElement.appendChild(againButton)
  fetchGiphy(path);
}

function selectAnswer(answerObject) {
  const nextTextNodeId = answerObject.nextText
  if (typeof answerObject.nextText === 'number') {
    showTextNode(nextTextNodeId)
  } else {
    renderResult(nextTextNodeId)
  }
}

function findResult(array) {
  return randomItemFromArray(array);
}

async function fetchGiphy(url) {
  const res = await fetch(url)
  const data = await res.json();
  generateMemeHtml(data);
}

function generateMemeHtml(giphyResponse) {
  const gif = document.querySelector('.container')
  const gifImage = document.createElement('img');
  gifImage.src = giphyResponse.data[1].images.original.url;
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
        nextText: 4,
      },
      {
        answer: 'Outdoor',
        nextText: 5
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
      },
      {
        answer: 'Spend the night on the Town!',
        nextText: indoorPublicResults
      },
    ]
  },

  {
    id: 5,
    question: 'Out in Nature or an Outdoor Activity?',
    answers: [
      {
        answer: 'Spending time with nature!',
        nextText: natureResults
      },
      {
        answer: 'Active outdoor activity please!',
        nextText: outdoorActivityResults
      },
    ]
  },

  {
    id: 6,
    question: 'An Active or Relaxing Activity?',
    answers: [
      {
        answer: 'I like being Active Indoors!',
        nextText: atHomeActiveResults
      },
      {
        answer: 'I need a Relaxing Day!',
        nextText: atHomeRelaxedResults,
      },
    ]
  }
]

startQuiz();

let returnActivity = randomItemFromArray(atHomeRelaxedResults);