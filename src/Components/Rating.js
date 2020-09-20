import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import ErrorHandler from "./ErrorHandler";
import * as settings from "./Settings";
import "./../Styles/Rating.css";


let contentfulURL = settings.contentfulURL;
contentfulURL = contentfulURL.replace("[spaceid]", settings.contentfulSpaceID);
contentfulURL = contentfulURL.replace("[token]", settings.contentfulToken);
contentfulURL = contentfulURL.replace("[type]", settings.contentfulType);
contentfulURL += "&order=-fields.rating&limit=5";
console.log(contentfulURL);

/* */
const Rating = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [searchURL, setSearchURL]=useState("");

  useEffect(() => {
    const getListData = () => {
      if (searchURL!==""){
        fetch(searchURL)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((errorMsg) => {
            let errorOutput = `Error: ${errorMsg}`;
            setError(errorOutput);
          });
      }
    };
    getListData();
  }, [searchURL]);

  useEffect(() => {
    setSearchURL(contentfulURL);
  },[]);

  return (
    <div className="container-images rating-cards">
      <h2>Top 5 best rated locations</h2>
      <div className="cards">
        {/* Displaying current search - if no input value in search bar, displaying all pokemon*/}
        {data && data.items && data.includes
          ? data.items.map((item, index) => {
              return (
                <LocationCard
                  key={"card-" + index}
                  transferItem={item}
                  transferData={data}
                  index={index}
                  showIndex={true}
                />
              );
            })
          : null}

        {error ? <ErrorHandler errorMessage={error} /> : null}
      </div>
    </div>
  );
};
export default Rating;
