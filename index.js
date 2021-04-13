
// Goal: Attach the fetchActivity function to the handleClick so bored api will be activated on button click
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const endpoint = 'https://www.boredapi.com/api';
const activityInput = document.querySelector('.input');
const searchButton = document.querySelector('.searchButton');

// FUNCTIONS

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    const bored = await fetchActivity();
    console.log('bored', bored);
    const searchBoxInput = e.currentTarget.searchBox.value
    console.log(searchBoxInput);
    const participantInput = e.currentTarget.participants.value
    console.log(participantInput);
    const typeInput = e.currentTarget.type.value
    console.log(typeInput);
    fetchActivity();
}

async function fetchActivity() {
    const response = await fetch(endpoint);
    const activity = response.data;
    console.log(activity);
}
// Execution
activityInput.addEventListener('submit', handleSubmit);
