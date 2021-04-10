// Goal: Call the form in HTML 
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const activityInput = document.querySelector('.input');
const searchButton = document.querySelector('.searchButton');

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

// Execution
activityInput.addEventListener('submit', handleSubmit);


