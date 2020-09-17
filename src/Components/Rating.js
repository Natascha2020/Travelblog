import React, { useEffect, useState } from "react";
import Card from "./Card";
import ErrorHandler from "./ErrorHandler";
import "./../Styles/Rating.css";

const contentfulSpaceID = "hyf1ooddn06y";
const contentfulToken = "Bo3__PcF0P-icxz-t6a04_PoUyn72Gz7ywctg4SIRdE";
const contentfulType = "post";

let contentfulURL =
  "https://cdn.contentful.com/spaces/[spaceid]/environments/master/entries?access_token=[token]&content_type=[type]";
contentfulURL = contentfulURL.replace("[spaceid]", contentfulSpaceID);
contentfulURL = contentfulURL.replace("[token]", contentfulToken);
contentfulURL = contentfulURL.replace("[type]", contentfulType);
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
                <Card
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
