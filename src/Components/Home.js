import React from "react";
import { Link } from "react-router-dom";
import ParallaxCard from "./ParallaxCard";
import imgAfrica from "./../Assets/Africa.jpg";
import imgAntarctica from "./../Assets/Antarctica.jpg";
import imgAsia from "./../Assets/Asia.jpg";
import imgAustralia from "./../Assets/Australia.jpg";
import imgEurope from "./../Assets/Europe.jpg";
import imgNorthAmerica from "./../Assets/North-America.jpg";
import imgSouthAmerica from "./../Assets/South-America.jpg";
import "./../Styles/Home.css";
import { GearWideConnected } from "react-bootstrap-icons";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const contentAfrica = (
  <span>
    <strong>Africa</strong> is second largest continent on earth and has a huge variety to offer for travel enthusiasts. It´s home of the oldest
    university (University of Karueein), source of the world's longest river (Nile), home to the "Big 5" (lion, leopard, rhinoceros, elephant and
    buffalo). Go travel and check out our <Link to="/Images/Africa">suggestions</Link>.
  </span>
);
const contentAntarctica = (
  <span>
    Although <strong>Antarctica</strong> is arguably the most difficult continent to travel to, there is a lot to discover in this icy desert. Even if
    commercial cruise trips are now offered, we recommend traveling on smaller boats, e.g. with marine scientists, or maybe even work in a research
    station that are scattered around the continent. Unforgetable moments are granted. <Link to="/Images/Antarctica">Check out our tips!</Link>
  </span>
);
const contentAsia = (
  <span>
    <strong>Asia</strong> is the largest continent on earth. From the highest mountains to the deepest seas, from high-tech metropolises to some of
    the oldest historic monuments, there is so much to discover. It is a really exceptional experience that many of the historic sites, especially
    temples, are still alive and used for their original purposes. <Link to="/Images/Asia">Discover Asia!</Link>
  </span>
);
const contentAustralia = (
  <span>
    <strong>Australia</strong> doesn't only seem like the end of the world, it most likely is! You will never finish discovering this special
    continent full of most exciting and dangerous flora and fauna. We highly recommend a road trip along the beautiful and lonly westcoast, which is
    full of untouched nature and beaches. Grab your surf board and fly! <Link to="/Images/Australia">Check out our highlights down-under!</Link>
  </span>
);
const contentEurope = (
  <span>
    <strong>Europe</strong> should be your continent of choice, if you want to make the most out of your trip and see various countries and cultures
    in a short amount of time. In Europe everything is just a short-wheel-drive away! Visit some of the most exciting capitals of the world.{" "}
    <Link to="/Images/Europe">See our recommendations for Europe!</Link>
  </span>
);
const contentNorthAmerica = (
  <span>
    <strong>North-America</strong> has definately way more to offer than claimed. It has some of the most unique national parks in the world like the
    yosemite national park. We highly recommend to visit the middle states to dig into the heart and history of north america! Despite that don't miss
    with San Franzisco the modern home of great artists, incredible skyscrapers and vibrant flair of New York and the relaxing surf spots around Los
    Angeles. <Link to="/Images/North-America">Check out our top locations in North America!</Link>
  </span>
);
const contentSouthAmerica = (
  <span>
    <strong>South-America</strong>, the country of the mysterious and beautiful andean cultures! Visit the friendly people and little villages and
    learn about the incredible past and architecture. If you like hiking you will find your paradise. Follow the inka trail and enjoy amazing views
    with llamas and alpacas crossing your path. A unique experience is the andean express, an old trailroad through the impressive andean landscape.
    Train your spanish and let the journey begin! <Link to="/Images/South-America">Inspirational locations for South America!</Link>
  </span>
);

const Home = () => {
  return (
    <div className="home">
      <ParallaxCard elementClass="africa" sectionImg={imgAfrica} boxContent="Africa" overlayContent={contentAfrica} />
      <ParallaxCard elementClass="antarctica" sectionImg={imgAntarctica} boxContent="Antarctica" overlayContent={contentAntarctica} />
      <ParallaxCard elementClass="asia" sectionImg={imgAsia} boxContent="Asia" overlayContent={contentAsia} />
      <ParallaxCard elementClass="australia" sectionImg={imgAustralia} boxContent="Australia" overlayContent={contentAustralia} />
      <ParallaxCard elementClass="europe" sectionImg={imgEurope} boxContent="Europe" overlayContent={contentEurope} />
      <ParallaxCard elementClass="north-america" sectionImg={imgNorthAmerica} boxContent="North-America" overlayContent={contentNorthAmerica} />
      <ParallaxCard elementClass="south-america" sectionImg={imgSouthAmerica} boxContent="South-America" overlayContent={contentSouthAmerica} />
      <div className="footer">WBS Coding School Groupwork by Natascha, Davide and J</div>
    </div>
  );
};

export default Home;
