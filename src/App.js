import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyProfile from "./Components/MyProfile";
import Rating from "./Components/Rating";
import Sidebar from "react-sidebar";
import SidebarContent from "./Components/SidebarContent";
import ViewList from "./Components/ViewList";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  /* const onSetOpen = (open) => setOpen(true); */

  const sidebarContent = <SidebarContent />;

  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>

<<<<<<< HEAD
<<<<<<< HEAD
        <Sidebar sidebar={sidebarContent} open={sidebarOpen} onSetOpen={onSetSidebarOpen} shadow={shadow}>
=======
        { <Sidebar sidebarClassName="travel-sidebar" sidebar={sidebarContent} open={sidebarOpen} onSetOpen={onSetSidebarOpen}>
>>>>>>> 4f7ae71c151cac4aad3de52bb1559e6d7666b8fe
=======
        { <Sidebar sidebarClassName="travel-sidebar" sidebar={sidebarContent} open={sidebarOpen} onSetOpen={onSetSidebarOpen}>
>>>>>>> 4f7ae71c151cac4aad3de52bb1559e6d7666b8fe
          {/* <span className="menu">
            <a onClick={() => onSetSidebarOpen(true)} href="#">
              =
            </a>
          </span> */}
          <span>
            <button className="menu" onClick={() => onSetSidebarOpen(true)}>
              =
            </button>
          </span>
<<<<<<< HEAD
<<<<<<< HEAD

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
            <Route exact path="/"></Route>
          </Switch>
        </Sidebar>
=======
=======
>>>>>>> 4f7ae71c151cac4aad3de52bb1559e6d7666b8fe
        

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
          <Route exact path="/"></Route>
        </Switch>
        </Sidebar> }
<<<<<<< HEAD
>>>>>>> 4f7ae71c151cac4aad3de52bb1559e6d7666b8fe
=======
>>>>>>> 4f7ae71c151cac4aad3de52bb1559e6d7666b8fe
      </div>
    </Router>
  );
};

export default App;
