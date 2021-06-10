import { randomItemFromArray } from './randomItem.js'
const apiKey = 'fM2ZjlMUQUm5t6tgHe3IyQYj9Q5NHDPs';
const getStorage = localStorage.getItem('bored');
const storageObject = JSON.parse(getStorage);
const query = storageObject.activity;
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&rating=g`;
const activityDisplay = document.createElement('div');
const html = `
    <div class="container">
        <h2 class="createResult">${capitalizeWords(storageObject.activity)}</h2>
        <a href="./index.html">Try Again?</a>
    </div>
`;

activityDisplay.innerHTML = html
// activityDisplay.className = 'container'
document.body.appendChild(activityDisplay);

function capitalizeWords(words) {
    const wordsArray = words.split(" ");
    return wordsArray.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
}

async function fetchGiphy() {
    const res = await fetch(path)
    const data = await res.json();
    const randomGif = randomItemFromArray(data.data)
    generateMemeHtml(randomGif);
}

function generateMemeHtml(randomGif) {
    const gif = document.querySelector('.container')
    const gifImage = document.createElement('img');
    gifImage.src = randomGif.images.original.url;
    gifImage.alt = 'gif'
    gifImage.className = 'gif'
    const gifFigure = document.createElement('figure');
    const gifFigCaption = document.createElement('figcaption');
    gifFigCaption.textContent = 'Powered By Giphy';
    gifFigCaption.style.fontSize = '8px';
    gifFigure.appendChild(gifImage);
    gifFigure.appendChild(gifFigCaption);
    gif.appendChild(gifFigure);
}

fetchGiphy();
