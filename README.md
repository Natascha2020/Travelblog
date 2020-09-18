# WBS Coding School Groupwork
## Travelblog

## Group Members
Natascha, Davide, J

# Stack
* [Node.js](https://nodejs.org/)
* [REACT.JS](https://reactjs.org/) (User Interface) using functional components 
* JS/JSX (blog logic)
* CSS (external styling)
* GIT/GITHUB (branches per team member)
* [Codesandbox.io](https://codesandbox.io) (testing, collaborative coding, bound to Github)
* [Contentful](https://www.contentful.com/) (content management)

# How to run locally
* System requirements: [Node.js](https://nodejs.org/)
* Fork the repository
* Clone it to your local repo
* Run "npm install" to install dependencies
* Run "npm start" to run local server

# Features
* List view of posts (different travel destinations with description)
* Search for names or part of names or continents
* Detail view of best-rated must-visit-destinations from traveler (user)
* About me information page of the traveler (user)
* Displayed number of saved posts by traveler on profile page
* Side navigation menu (open on button, closed by clicking anywhere on the page)
* Modular, reusable component structure
________________________________________________
# Structure

<!-- <img src="./src/assets/structure-v2.png" width="800"> -->

File  | Description
------------- | -------------
index.js      | React.JS base file
App.js  | Base App implementing sidebar navigation and routing
Description  | ...
Home  | List of the travel destinations (shows Continent, Country, Location, Image, Description and Rating)
LocationCard  | Detail component for one card element (shows Continent, Country, Location, Image and Rating)
MyProfile  | Shows the User profile page and display the number of saved Items
Rating  | Component to list the 5 travel cards with the highest rating
Settings  | Global settings for the Contentful API
SidebarContent | Component for the menu entries
Stars  | Component to show the rating stars
Viewlist  | List of all the 20 travel cards including search functionality

# Credits

Pictures are copyright free, taken from;

https://pixabay.com/
https://pexels.com/

# Have fun!

Best,
Natascha, Davide, J
