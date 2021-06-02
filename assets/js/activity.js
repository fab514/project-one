const apiKey = 'fM2ZjlMUQUm5t6tgHe3IyQYj9Q5NHDPs';

function capitalizeWords(words) {
    const wordsArray = words.split(" ");
    console.log('wordsArray', wordsArray);

    return wordsArray.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}

const getStorage = localStorage.getItem('bored');
const tryButton = document.querySelector('button');

const storageObject = JSON.parse(getStorage);
console.log('storageObject', storageObject);

const query = storageObject.activity;
console.log('query', query);

const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`;

async function fetchGiphy() {
    const res = await fetch(path)
    const data = await res.json();
    generateMemeHtml(data);
}

function generateMemeHtml(giphyResponse) {
    const gif = document.querySelector('.activityCards')
    const gifImage = document.createElement('img');
    gifImage.src = giphyResponse.data[0].images.original.url; 
    gifImage.alt = 'gif'
    const gifFigure = document.createElement('figure');
    const gifFigCaption = document.createElement('figcaption');
    gifFigCaption.textContent = 'Powered By Giphy';
    gifFigure.appendChild(gifImage);
    gifFigure.appendChild(gifFigCaption);
    gif.appendChild(gifFigure);
}

fetchGiphy();

const activityDisplay = document.createElement('div');
const html = `
    <div class="cards">
        <h2>${capitalizeWords(storageObject.activity)}</h2>
        <p>Type: ${capitalizeWords(storageObject.type)}</p>
        <p>Participants: ${storageObject.participants}</p>
        <a href="./index.html">Try Again</a>
    </div>
`;
console.log('html', html);
activityDisplay.innerHTML =html
document.body.appendChild(activityDisplay);
