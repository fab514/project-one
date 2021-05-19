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

const activityDisplay = document.createElement('div');
const html = `
    <div class="cards">
        <h2>${capitalizeWords(storageObject.activity)}</h2>
        <p>Type: ${capitalizeWords(storageObject.type)}</p>
        <p>Participants: ${storageObject.participants}</p>
    </div>
`;
console.log('html', html);
activityDisplay.innerHTML =html
document.body.appendChild(activityDisplay);
tryButton.insertAdjacentElement('beforebegin', activityDisplay);