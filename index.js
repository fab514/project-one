
// Goal: Attach the fetchActivity function to the handleClick so bored api will be activated on button click
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const endpoint = 'https://www.boredapi.com/api';
const activityInput = document.querySelector('.input');
const searchButton = document.querySelector('.searchButton');

// FUNCTIONS

async function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    const searchBoxInput = e.currentTarget.searchBox.value
    console.log(searchBoxInput);
    const participantInput = e.currentTarget.participants.value
    console.log(participantInput);
    const typeInput = e.currentTarget.type.value
    console.log(typeInput);
    const bored = await fetchActivity();
    console.log('bored', bored);
}


async function fetchActivity() {
    let response;
    let activity;
    try {
      response = await fetch(endpoint); 
      activity = await response.json(); 
      console.log('activity', activity);
    } catch(error) {
        console.error('error', error);
    }
    return activity;
}
// Execution
activityInput.addEventListener('submit', handleSubmit);
