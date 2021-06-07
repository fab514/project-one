//  We are going to sort this file by variables, functions and execution

// VARIABLES
const baseEndpoint = 'https://www.boredapi.com/api/activity';
const activityInput = document.querySelector('.input');
const searchButton = document.querySelector('.searchButton');

// FUNCTIONS


function inputQuery(inputArray) {
  return inputArray
    .filter((input) => input !== "")
    .map((input, index) => (index === 0 ? `?${input}` : `&${input}`))
    .join("");
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

async function handleSubmit(e) {
  e.preventDefault();
  const participantInput = e.currentTarget.participants.value
  const typeInput = e.currentTarget.type.value

  const participantQuery = participantInput !== '' ? `participants=${participantInput}` : '';
  const typeQuery = typeInput !== '' ? `type=${typeInput}` : '';

  const constructedQuery = inputQuery([participantQuery, typeQuery]);

  const queryEndpoint = `${baseEndpoint}${constructedQuery}`;

  const bored = await fetchActivity(queryEndpoint);

  if (bored && bored.error) {

    const myError = document.querySelector('.wrapper');
    myError.setAttribute("style", "padding-top:7px");
    removeChildNodes(myError);

    const myHTML = document.createElement('h2');
    myHTML.textContent = 'Oops! No Activity Found!';
    myHTML.style.textAlign = "center";
    myError.appendChild(myHTML);

    const img = document.createElement('img');
    img.src = "https://cdn.pixabay.com/photo/2017/01/09/12/49/mistake-1966448_1280.jpg"
    img.setAttribute("style", "padding-top:10px");
    img.height = 250;
    img.alt = 'question kid!';
    img.class = 'errorImg';
    img.style.boxSizing = 'content-box';
    img.style.width = 100 %
      myError.appendChild(img);

  } else {
    localStorage.setItem('bored', JSON.stringify(bored));
    window.location = './activity.html';
  }



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
  } catch (error) {
    console.error('error', error);
  }
  return activity;
}
// Execution
activityInput.addEventListener('submit', handleSubmit);
