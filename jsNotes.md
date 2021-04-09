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


Goals for the index.js

- Goal: Create an input variable to pull in the Bored API.
- Goal: In the HTML put the input entries and the search button into a form so I may have better access to it in Javascript.
- Goal: Create a submit function that will handle a click submit button event. By clicking the button the info in the input should show in the console. 
- Goal: Fetch information from the API when the search button is pressed
- Goal: Store data from the input form into the users localStorage. 
- Goal: Handle click event on the Lucky Button to call random events from the API.
- Goal: Access API activities through the search bar input by using keywords.
