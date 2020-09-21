import React from "react";
import "./../Styles/ParallaxCard.css";

const ParallaxCard=(props)=>{
    const { sectionImg, overlayContent, boxContent, elementClass=''} = props;
    let elementClasses="box-content " + elementClass;
    return(
        <div className="parallaxCard">

            <div className="section parallax">
                <div className="parallax2" style={{  
                    backgroundImage: "url(" + sectionImg + ")",
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}></div>
                <p className={elementClasses}>{boxContent}</p>
            </div>
            <div className="section no-parallax">
                <p className="overlay-content">{overlayContent}</p>
            </div>
        
        </div>
    );
}
export default ParallaxCard;
/**/