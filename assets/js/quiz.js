const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const containerElement = document.querySelector('.container')
const apiKey = 'fM2ZjlMUQUm5t6tgHe3IyQYj9Q5NHDPs';

let resultArray = [
  {
    name: 'Read a New Book',
    categories: [
      'Solo',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Work on a Puzzle',
    categories: [
      'Solo',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Take a nap',
    categories: [
      'Solo',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Binge Watch Series',
    categories: [
      'Solo',
      'Duo',
      'BFF', 
      'Date',
      'Group',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Find New Music',
    categories: [
      'Solo',
      'Duo',
      'BFF', 
      'Date',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Sit on the Outside Deck',
    categories: [
      'Solo',
      'Duo',
      'BFF', 
      'Group',
      'Date',
      'Outdoor',
      'Relaxing'
    ]
  },
  {
    name: 'Home Spa Night',
    categories: [
      'Solo',
      'Duo',
      'BFF', 
      'Date',
      'Group',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Create a Photo Album',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Play a Video or Computer Game',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Watch a Movie',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF',
      'Group',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Try Out New Cooking Recipes',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Listen to a Podcast',
    categories: [
      'Solo',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Order Delivery',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF',
      'Group',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Video Game Tournament',
    categories: [
      'Group',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Board Game Night',
    categories: [
      'Group',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Home Alone? Set traps to get rid of burglers',
    categories: [
      'Solo',
      'Indoor', 
      'Home',
      'Active'
    ]
  },
  {
    name: 'Room Makeover',
    categories: [
      'Solo',
      'Duo', 
      'Date', 
      'BFF',
      'Indoor', 
      'Home',
      'Active'
    ]
  },
  {
    name: 'Spring Cleaning',
    categories: [
      'Solo',
      'Duo', 
      'Date', 
      'Indoor', 
      'Home',
      'Active'
    ]
  },
  {
    name: 'Try New Drink Recipes',
    categories: [
      'Solo',
      'Duo', 
      'Date',
      'BFF',
      'Indoor', 
      'Home',
      'Relaxing'
    ]
  },
  {
    name: 'Learn a new skill',
    categories: [
      'Solo',
      'Duo', 
      'Date', 
      'BFF',
      'Group',
      'Indoor', 
      'Outdoor',
      'Home',
      'Active',
      'Recreation', 
    ]
  },
  {
    name: 'Plant a Home Garden',
    categories: [
      'Solo',
      'Duo', 
      'Date', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Home workout or yoga',
    categories: [
      'Solo',
      'Duo', 
      'Date', 
      'BFF',
      'Indoor', 
      'Home',
      'Active',
    ]
  },
  {
    name: 'Cooking/Baking Competition',
    categories: [
      'Duo', 
      'Date', 
      'BFF',
      'Indoor', 
      'Home',
      'Active',
    ]
  },
  {
    name: 'Throw a Party',
    categories: [
      'Group',
      'Indoor',
      'Home',
      'Active',
    ]
  },
  {
    name: 'Throw a Potluck Dinner',
    categories: [
      'Group',
      'Indoor',
      'Home',
      'Active',
    ]
  },
  {
    name: 'Try Out a New Restaurant',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor', 
      'Public',
    ]
  },
  {
    name: 'Find an Antique or Thrift Shop',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Indoor', 
      'Public',
    ]
  },
  {
    name: 'Find a local Coffee Shop or Bakery',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Indoor', 
      'Public',
    ]
  },
  {
    name: 'I\'ll take you to the Candy Shop',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Indoor', 
      'Public',
    ]
  },
  {
    name: 'Take up a Photography Hobby',
    categories: [
      'Solo',
      'Indoor', 
      'Public',
      'Outdoor', 
      'Nature'
    ]
  },
  {
    name: 'Search a Record Store',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'Indoor', 
      'Public',
    ]
  },
  {
    name: 'Perform at an Open Mic night or Karaoke',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor', 
      'Public',
    ]
  },
  {
    name: 'Play Games at an Arcade',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'See a Movie at the Theatre',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Go see a Comedian',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Go on a Dinner cruize',
    categories: [
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Dancing Lessons',
    categories: [
      'Duo',
      'Date',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Find a way out of an Escape Room',
    categories: [
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Become a Detective at a Murder Mystery Party',
    categories: [
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Join a Trivia Night',
    categories: [
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Community Volunteer',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Shopping Scavenger Hunt',
    categories: [
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Play Billiards or go Bowling',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Visit an Aquarium or Museum',
    categories: [
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Go to a Live Concert',
    categories: [
      'Duo',
      'Date', 
      'BFF',
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Go to the Gym',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Find a Board Game Cafe',
    categories: [
      'Group',
      'Indoor',
      'Public',
    ]
  },
  {
    name: 'Watch the Sunrise/ or Sunset',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Go on a Picnic',
    categories: [
      'Solo',
      'Duo',
      'Date', 
      'BFF',
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Take a Hike',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Go Camping',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Relaxing by a Bonfire',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Walk around a Botanical Garden or Arboretum',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Train for 5k',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Gone Fishing',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Ride a Bike',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Explore a New City',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Indoor',
      'Public',
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Take your dog to the Park',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Fly a Kite',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Go to a Zoo',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Go Berry or Apple Picking(anything in season)',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Horseback Riding',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Nature',
    ]
  },
  {
    name: 'Take a Day Trip out of town or state',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Find a GoKart Track',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Watch Live Sports',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Go shopping at a Street or Art Fair',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Geocaching around your town',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Go to the Beach',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'If winter go Skiing or sledding',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'If summer, rent a Boat or Jetski',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Go Kayaking, canoeing or paddle boating at a lake or river',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Find a Frisbee Golf Course',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Have fun at a Water Park or Pool',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Find Drive-in Movie(Yes there are still some out there)',
    categories: [
      'Solo',
      'Duo',
      'Date',
      'BFF', 
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Play Tag or Hide and Seek',
    categories: [
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },
  {
    name: 'Find a group of friends to play Kickball, Basketball or Softball',
    categories: [
      'Group', 
      'Outdoor',
      'Recreation',
    ]
  },

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
