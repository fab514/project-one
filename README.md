# Project One
## INDEX.HTML
### Header
- Title above the input text. Shows the name of the activity search engine. 
#### Nav Element
- Used a unordered list in navigation because there is no link order required.
- HTML file source links to navigate to the activity.html and quiz.html files.
- Putting the source links into a nav element will give better accessibility to the site. 
### Main
#### Input Text
- Activity search is put inside a label element
- Activity search input is a text type.
- For accessibilty users a name="activity" is added to the Activity Search input. 
- A placeholder of a starter activity 'i.e. Go for a walk' is displayed on page load until the user inputs different data. 
#### Participants Number Select
- Participants is put inside a label element
- User can input number of participants for activity search.
- The future functionality in the number select minimum number of 1. 

#### Type Select
- Activity type is put inside a label element
- There is a drop down menu with different activity type choices that the user can select. 
- This menu includes "cooking, education, social, recreational, busywork, charity, relaxation, diy and music" types for generating activities. 
- This drop menu of a default option of "any"

#### Buttons
- Two buttons on this page. 
- When there is at least one set of criteria in the input box or the drop menus, the search button can be selected. 
- The lucky button can be selected at any time to generate one random activity not using any search criteria. 

## API Descisions
### Bored API
- Bored API - https://www.boredapi.com/api/activity
- This API was chosen for its random activity generator. 
- This API provides number of people and type data that can be call upon to generate certain activities. If the user puts in a data of 1 person may come up with the activity "Work on a puzzle". A user can call a certain type of activity such as music it would come up with activities such as "Learn to play an instrument"

### Imgflip API
Imgflip API - https://api.imgflip.com/get_memes
- This API was chosen to provide pictures of memes on the project-one site. 
- This API provide id, title and url data that can be called upon when attaching a meme to a generated activity type. 
