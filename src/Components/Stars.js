import React from "react";
import "./../Styles/Stars.css";

const Stars = (props) => {
  const { rating, maxStars } = props;
  let int_rating = Math.round(parseInt(rating, 10), 2);
  let int_maxStars = Math.round(parseInt(maxStars, 10));

  const widthInPercent = (int_rating / int_maxStars) * 100;
  const widthStyle = {
    width: widthInPercent + "%"
  };

  const stars = [];
  // &#9733; is html entity for a filled star ★
  for (let i = 0; i < int_maxStars; i++) {
    stars.push(<span key={"star-"+i} className="star">&#9733;</span>);
  }

  return (
    <div className="stars">
      <div className="stars-filled" style={widthStyle}>
        {stars}
      </div>
      <div className="stars-bg">{stars}</div>
    </div>
  );
};
export default Stars;
