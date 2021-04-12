// Goal: Fetch information from the Bored API 
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const endpoint = 'https://www.boredapi.com/api';

// FUNCTIONS

async function fetchActivity() {
    const response = await fetch(endpoint);
    const activity = response.json();
    console.log(activity);
}


fetchActivity();