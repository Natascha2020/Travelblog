import React, { useEffect, useState } from "react";
import Description from "./Description";
import LocationCard from "./LocationCard";
import ErrorHandler from "./ErrorHandler";

import * as settings from "./Settings";
import "./../Styles/ViewList.css";

let contentfulURL = settings.contentfulURL;
contentfulURL = contentfulURL.replace("[spaceid]", settings.contentfulSpaceID);
contentfulURL = contentfulURL.replace("[token]", settings.contentfulToken);
contentfulURL = contentfulURL.replace("[type]", settings.contentfulType);
console.log(contentfulURL);

/* */
const ViewList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [searchURL, setSearchURL] = useState(contentfulURL);
  const [searchField, setSearchField] = useState("");
  // State variables passed to Description and ModalSetUp components
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  // Search functionality I: Grabbing input value
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  // Search functionality II: Adjusting datafetch by input value
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchURL(contentfulURL + "&query=" + searchField);
  };

  useEffect(() => {
    const getListData = () => {
      fetch(searchURL)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((errorMsg) => {
          let errorOutput = `Error: ${errorMsg}`;
          setError(errorOutput);
        });
    };
    getListData();
  }, [searchURL]);

  // Grabbing data of specific card by onClick-event, updating state and passing to Description component
  const handleShow = (item) => {
    setModalData(item);
    setShow(true);
  };
  // Handling Modal closing-event
  const handleClose = () => setShow(false);

  return (
    <div className="container-images">
      <div className="search">
        <form onSubmit={(e) => searchHandler(e)}>
          <input type="text" className="input-search" placeholder="Search" value={searchField} onChange={handleChange} />
          <button className="btn-submit" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="cards-wrapper">
        <div className="cards card-columns">
          {/* Displaying current search - if no input value in search bar, displaying all posts*/}
          {data && data.items && data.includes
            ? data.items.map((item, index) => {
                return (
                  <div>
                    <div
                      onClick={() => {
                        handleShow(item);
                      }}>
                      <LocationCard key={"card-" + index} transferItem={item} transferData={data} index={index} />
                    </div>
                  </div>
                );
              })
            : null}
          {/* Displaying specific modal after state update through onClick-event*/}
          {modalData && modalData.fields ? <Description transferItem={modalData} handleClose={handleClose} show={show} /> : null}
          {error ? <ErrorHandler errorMessage={error} /> : null}
        </div>
      </div>
    </div>
  );
};
export default ViewList;
