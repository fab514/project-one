// Goal: 
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const endpoint = 'https://www.boredapi.com/api';
const activityInput = document.querySelector('.input');
const searchButton = document.querySelector('.searchButton');

let answers = [];

// FUNCTIONS

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    const { bored } = fetchActivity();
    console.log(bored);
    const searchBoxInput = e.currentTarget.searchBox.value
    console.log(searchBoxInput);
    const participantInput = e.currentTarget.participants.value
    console.log(participantInput);
    const typeInput = e.currentTarget.type.value
    console.log(typeInput);

}
function handleError(err) {
    console.log('Whats that?');
    console.log(err);
}

async function fetchActivity() {
    const response = await fetch(endpoint);
    const activity = response.json();
    console.log(activity);
}

// EXECUTION

const activityPromise = fetch(endpoint);
activityPromise.then(response => {
        return response.json();
}).then(data => {
        console.log(data);
}).catch(handleError)

activityInput.addEventListener('submit', handleSubmit);

fetchActivity();


// function mirrorToLocalStorage() {
//     console.log('Saving to Local Storage');
//     localStorage.setActivity('input', JSON.stringify(items))
// }

// function addSearch(event) {
//     const searchActivity = event.currentTarget
// }


