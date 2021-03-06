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

# See it live:
* On [Codesandbox.io Fullscreen](https://rfnpn.csb.app/)
* On [Codesandbox.io Code View](https://codesandbox.io/s/heuristic-wozniak-rfnpn?file=/src/App.js)
* currently showing our "codesandbox" branch

# Features
* List view of posts (different travel destinations with description)
* Search for names or part of names or continents
* Filter results by continent
* Linking to prefiltered results (e.g. /Images/Africa)
* Detail view of best-rated must-visit-destinations from traveler (user)
* About me information page of the traveler (user)
* Displayed number of saved posts by traveler on profile page
* Side navigation menu (open on button, closed by clicking anywhere on the page)
* Modular, reusable component structure
________________________________________________
# Structure

<img src="./src/Assets/readme/node-structure.png" title="Node structure of app component hierarchy" alt="Node structure of app component hierarchy" width="800">

File          | Description
------------- | -------------
index.js      | React.JS base file
App.js        | Base app implementing sidebar navigation and routing
Description   | Component to update modal content
ErrorHandler  | Basic error handling
Home          | List of the travel destinations (shows Continent, Country, Location, Image, Description and Rating)
LocationCard  | Detail component for one card element (shows Continent, Country, Location, Image and Rating)
ModalSetup    | Component to provide modal functionality
MyProfile     | Shows the User profile page and display the number of saved Items
ParallaxCard  | Shows 3 elements, a parallax image, an info text on top of it and a description box
Rating        | Component to list the 5 travel cards with the highest rating
Settings      | Global settings for the Contentful API
SidebarContent| Component for the menu entries
Stars         | Component to show the rating stars
Viewlist      | List of all the 20 travel cards including search functionality

# Credits

* Pictures are CC0 Creative Commons, attribution free, taken from:
   * [Pixabay](https://pixabay.com/)
   * [Pexels](https://pexels.com/)
* Node-graph is created with the free online tool by [yworks](https://live.yworks.com/demos/layout/layoutstyles/index.html)
* For our slide-out menu we are using [react-sidebar by balloob](https://github.com/balloob/react-sidebar)

# Have fun!

Best,
Natascha, Davide, J
