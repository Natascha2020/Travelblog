import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import ErrorHandler from "./ErrorHandler";

import * as settings from "./Settings";
import "./../Styles/ViewList.css";
const checkChar="\u2713";

let contentfulURL = settings.contentfulURL;
contentfulURL = contentfulURL.replace("[spaceid]", settings.contentfulSpaceID);
contentfulURL = contentfulURL.replace("[token]", settings.contentfulToken);
contentfulURL = contentfulURL.replace("[type]", settings.contentfulType);
console.log(contentfulURL);

const ViewList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [searchURL, setSearchURL]=useState(contentfulURL);
  const [searchField, setSearchField]=useState("");
  const [continentButtons, setContinentButtons]=useState();
  const [continentFilter, setContinentFilter]=useState("");
  const filterResult={};
  
  const handleChange=(e)=>{
    setSearchField(e.target.value);
  }

  const handleFilterChange=(e)=>{
    filterResult[e.target.id]=!filterResult[e.target.id];
    updateContinentFilter(filterResult);
  }
  
  const searchHandler=(e)=>{
    e.preventDefault();
    setSearchURL(contentfulURL + '&query=' + searchField);
    
  }


  useEffect(() => {
    const getListData = () => {
      console.log(searchURL+continentFilter);
      fetch(searchURL+continentFilter)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((errorMsg) => {
          let errorOutput = `Error: ${errorMsg}`;
          setError(errorOutput);
        });
    };
    getListData();
  }, [searchURL, continentFilter]);

  
const updateContinentFilter=(filterSettings)=>{

  let allTrue=true;
  let anyTrue=false;
  let filterString="&fields.continent[in]=";
  // loop over all keys of filter-settings
  Object.keys(filterSettings).forEach((key, index) => {
    let continent=key;
    let show=filterSettings[key];
    allTrue = allTrue && show;
    anyTrue = anyTrue || show;
    if (show){
      if(filterString===""){
        filterString+=continent;
      }else{
        filterString+=","+continent;
      }
    }
  });
  // if all continents are checked, the search doesn't need a filter
  if (allTrue) filterString="";
  if (!anyTrue){
    console.log("No continent selected!");
  }

  setContinentFilter(filterString);
}

useEffect(() => { 
    const contButtons=[];
   
    let creg, clow, classesMerged;
    settings.continents.map((continent, index) => {
      creg=continent;
      clow=creg.toLowerCase();
      classesMerged="btn-continent "+clow;
      contButtons.push(<label key={"label-"+index} htmlFor={creg} className={classesMerged}>{creg} <input type="checkbox" id={creg} className="badgebox" defaultChecked onChange={handleFilterChange} /><span className="badge">{checkChar}</span></label>);
      filterResult[creg]=true;
    })
    setContinentButtons(contButtons);
    updateContinentFilter(filterResult);
  }, []);



  return (
    <div className="container-images">
      <div className="search">
        <form onSubmit={(e) => searchHandler(e)}>
        <input type="text" className="input-search" placeholder="Search" value={searchField} onChange={handleChange} />
        <button className="btn-submit" type="submit">Search</button>
        </form>
        <form className="continentSelection">
          {continentButtons}
        </form>
      </div>
      <div className="cards-wrapper">
      <div className="cards card-columns" >
        {/* Displaying current search - if no input value in search bar, displaying all pokemon*/}
        {data && data.items && data.includes
          ? data.items.map((item, index) => {
              return (
                <LocationCard
                  key={"card-" + index}
                  transferItem={item}
                  transferData={data}
                  index={index}
                  showIndex={false}
                />
              );
            })
          : null}

        {error ? <ErrorHandler errorMessage={error} /> : null}
      </div>
      </div>
    </div>
  );
};
export default ViewList;
