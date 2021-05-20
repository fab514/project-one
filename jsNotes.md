Buttons 
const searchButton = document.querySelector('.searchButton');
const searchHolder = document.querySelector('.search p');
const luckyButton = document.querySelector('.luckyButton');
const luckyHolder = document.querySelector('.lucky p');

Bored API
- Getting a random event(use with lucky button)
- http://www.boredapi.com/api/activity/

- Getting an activity using a given type(Use type selection)
- http://www.boredapi.com/api/activity?type=:type

- Getting an activity using a minimum/maximum amount of participants. 
- http://www.boredapi.com/api/activity?participants=:participants


## Goals for the index.js

- Goal: Create an input variable to pull in the Bored API.
- Goal: In the HTML put the input entries and the search button into a form so I may have better access to it in Javascript.
- Goal: Create a submit function that will handle a click submit button event. By clicking the button the info in the input should show in the console. 
- Goal: Fetch information from the API when the search button is pressed
- Goal: Store data from the input form into the users localStorage. 
- Goal: Access API activities through the search bar input by using keywords.

## Goals for activity.js
- Grab api result from local storage using getItem
- Fetch the meme api make into a basepoint
- The activity container should have the gif picture, activity name, participants and type
    (possibly put the participant and type in some kind of sentence?)
    <div>
    <h2>Activity Name</h2>
    <p>Participants</p>
    <p>Activity Type</p>

- Handle Click for the Try Again Button
- bring back removeChildNode function to remove the Activity Container when the Try again button has been clicked
## Adjust HTML for activity page
- Create a button that will return you to the homepage