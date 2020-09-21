import React from "react";
import { Link } from "react-router-dom";
import ParallaxCard from "./ParallaxCard";
import imgAfrica from './../Assets/Africa.jpg';
import imgAntarctica from './../Assets/Antarctica.jpg';
import imgAsia from './../Assets/Asia.jpg';
import imgAustralia from './../Assets/Australia.jpg';
import imgEurope from './../Assets/Europe.jpg';
import imgNorthAmerica from './../Assets/North-America.jpg';
import imgSouthAmerica from './../Assets/South-America.jpg';
import "./../Styles/Home.css";

const loremIpsum="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const contentAfrica=<span><strong>Africa</strong> is second largest continent on earth and has a huge variety to offer for travel enthusiasts. It´s home of the oldest university (University of Karueein), source of the world's longest river (Nile), home to the "Big 5" (lion, leopard, rhinoceros, elephant and buffalo). Go travel and check out our <Link to="/Images/Africa">suggestions</Link>.</span>

const Home = () => {
  return (

    <div className="home">
      <ParallaxCard elementClass="africa" sectionImg={imgAfrica} boxContent="Africa" overlayContent={contentAfrica}/>
      <ParallaxCard elementClass="antarctica" sectionImg={imgAntarctica} boxContent="Antarctica" overlayContent={loremIpsum}/>
      <ParallaxCard elementClass="asia" sectionImg={imgAsia} boxContent="Asia" overlayContent={loremIpsum}/>
      <ParallaxCard elementClass="australia" sectionImg={imgAustralia} boxContent="Australia" overlayContent={loremIpsum}/>
      <ParallaxCard elementClass="europe" sectionImg={imgEurope} boxContent="Europe" overlayContent={loremIpsum}/>
      <ParallaxCard elementClass="north-america" sectionImg={imgNorthAmerica} boxContent="North-America" overlayContent={loremIpsum}/>
      <ParallaxCard elementClass="south-america" sectionImg={imgSouthAmerica} boxContent="South-America" overlayContent={loremIpsum}/>
      <div className="footer">WBS Coding School Groupwork by Natascha, Davide and J</div>
    </div>
    
    
  );
};

export default Home;
