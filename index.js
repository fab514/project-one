// Goal: Attach the fetchActivity function to the handleClick so bored api will be activated on button click
//  We are going to sort this file by variables, functions and execution

// VARIABLES
const baseEndpoint = 'https://www.boredapi.com/api/activity';
const activityInput = document.querySelector('.input');
const searchButton = document.querySelector('.searchButton');

// FUNCTIONS
function inputQuery (inputArray) {
    return inputArray
        .filter((input) => input !== "")
        .map((input, index) => (index === 0 ? `?${input}` : `&${input}`)) 
        .join("");
}

async function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    const participantInput = e.currentTarget.participants.value
    console.log(participantInput);
    const typeInput = e.currentTarget.type.value
    console.log(typeInput);
    
    const participantQuery = participantInput !== '' ? `participants=${participantInput}` : '';
    console.log('participantQuery:', participantQuery);
    const typeQuery = typeInput !== '' ? `type=${typeInput}` : '';
    console.log('typeQuery:', typeQuery);

    let constructedQuery = '';
    switch (true) {
        case Boolean(participantQuery && !typeQuery):
            constructedQuery = `?${participantQuery}`
            break;
        case Boolean(participantQuery && typeQuery):
            constructedQuery = `?${participantQuery}&${typeQuery}`;
            break;
        case Boolean(!participantQuery && typeQuery):
            constructedQuery = `?${typeQuery}`;
            break
        case Boolean(!participantQuery && !typeQuery):
            console.log('No queries were filled out');
            constructedQuery = '';
            break
        default: 
            console.log('None of the cases in the switch statement matched. Running with a empty query')
            constructedQuery='';
            break
    }
    
    const queryEndpoint = `${baseEndpoint}${constructedQuery}`;
    
    const bored = await fetchActivity(queryEndpoint);
    console.log('bored', bored);
}

async function fetchActivity(fetchQueryEndpoint) {
    let response;
    let activity;
    try {
      response = await fetch(fetchQueryEndpoint, {
        headers: {
            Accept: 'application/json',
        }
    }); 
      activity = await response.json(); 
      console.log('activity', activity);
    } catch(error) {
      console.error('error', error);
    }
    return activity;
    
}
// Execution
activityInput.addEventListener('submit', handleSubmit);

