import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "react-sidebar";
import MyProfile from "./Components/MyProfile";
import Rating from "./Components/Rating";
import SidebarContent from "./Components/SidebarContent";
import ViewList from "./Components/ViewList";
import Home from "./Components/Home";
import "./App.css";

const App = () => {
  // Handling sidebar opening and closing (clicking anywhere as build-in prop)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const sidebarContent = <SidebarContent />;

  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>

        {
          <Sidebar sidebarClassName="travel-sidebar" sidebar={sidebarContent} open={sidebarOpen} onSetOpen={onSetSidebarOpen}>
            <span>
              <button className="menu" onClick={() => onSetSidebarOpen(true)}>
                =
              </button>
            </span>

            <main>
              <h1>Travelblog</h1>
            </main>

            <Switch>
              <Route exact path="/images">
                <ViewList />
              </Route>
              <Route exact path="/MyProfile">
                <MyProfile />
              </Route>
              <Route exact path="/Rating">
                <Rating />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Sidebar>
        }
      </div>
    </Router>
  );
};

export default App;
