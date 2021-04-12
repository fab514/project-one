// Goal: Turn fetched information from the Bored API in an activityPromise
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const endpoint = 'https://www.boredapi.com/api';

// FUNCTIONS

// EXECUTION

const activityPromise = fetch(endpoint);
activityPromise.then(response => {
        return response.json();
}).then(data => {
        console.log(data);
})