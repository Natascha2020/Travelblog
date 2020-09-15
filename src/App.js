import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Images from "./Components/Images";
import MyProfile from "./Components/MyProfile";
import Rating from "./Components/Rating";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navBar">
            <ul className="navWrapper">
              <li className="navItem">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="navItem">
                <Link className="link" to="/Images">
                  Images
                </Link>
              </li>
              <li className="navItem">
                <Link className="link" to="/MyProfile">
                  My Profile
                </Link>
              </li>
              <li className="navItem">
                <Link className="link" to="/Rating">
                  Rating
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <h1>Travelblog</h1>
        </main>

        <Switch>
          <Route exact path="/images">
            <Images />
          </Route>
          <Route exact path="/MyProfile">
            <MyProfile />
          </Route>
          <Route exact path="/Rating">
            <Rating />
          </Route>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
