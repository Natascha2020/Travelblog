import React from "react";
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

const Home = () => {
  return (

/*     <div className="home-wrapper">
      <img className="home-image parallax africa" src={imgAfrica} alt="Africa" />
      <img className="home-image parallax antarctica" src={imgAntarctica} alt="Antarctica" />
      <img className="home-image parallax asia" src={imgAsia} alt="Asia" />
      <img className="home-image parallax australia" src={imgAustralia} alt="Australia" />
      <img className="home-image parallax europe" src={imgEurope} alt="Europe" />
      <img className="home-image parallax north-america" src={imgNorthAmerica} alt="North-America" />
      <img className="home-image parallax south-america" src={imgSouthAmerica} alt="South-America" />
    </div> */
    <div className="home">
    <ParallaxCard elementClass="africa" sectionImg={imgAfrica} boxContent="Africa" overlayContent={loremIpsum}/>
    <ParallaxCard elementClass="antarctica" sectionImg={imgAntarctica} boxContent="Antarctica" overlayContent={loremIpsum}/>
    <ParallaxCard elementClass="asia" sectionImg={imgAsia} boxContent="Asia" overlayContent={loremIpsum}/>
    <ParallaxCard elementClass="australia" sectionImg={imgAustralia} boxContent="Australia" overlayContent={loremIpsum}/>
    <ParallaxCard elementClass="europe" sectionImg={imgEurope} boxContent="Europe" overlayContent={loremIpsum}/>
    <ParallaxCard elementClass="north-america" sectionImg={imgNorthAmerica} boxContent="North-America" overlayContent={loremIpsum}/>
    <ParallaxCard elementClass="south-america" sectionImg={imgSouthAmerica} boxContent="South-America" overlayContent={loremIpsum}/>
    <div className="footer">Footer</div>
    </div>
    
    
  );
};

export default Home;
