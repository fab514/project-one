// Goal: Create a button event that when clicked the information will be shown in the console. 
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const activityInput = document.querySelector('.input');
const searchButton = document.querySelector('.searchButton');

// FUNCTIONS

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    const searchBoxInput = e.currentTarget.searchBox.value
    console.log(searchBoxInput);
    const participantInput = e.currentTarget.participants.value
    console.log(participantInput);
    const typeInput = e.currentTarget.type.value
    console.log(typeInput);

}

// Execution
activityInput.addEventListener('submit', handleSubmit);


