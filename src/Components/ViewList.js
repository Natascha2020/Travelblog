import React, { useEffect, useState } from "react";
import Description from "./Description";
import LocationCard from "./LocationCard";
import ErrorHandler from "./ErrorHandler";

import * as settings from "./Settings";
import "./../Styles/ViewList.css";
const checkChar="\u2713";

let contentfulURL = settings.contentfulURL;
contentfulURL = contentfulURL.replace("[spaceid]", settings.contentfulSpaceID);
contentfulURL = contentfulURL.replace("[token]", settings.contentfulToken);
contentfulURL = contentfulURL.replace("[type]", settings.contentfulType);
//console.log(contentfulURL);

const ViewList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [searchURL, setSearchURL]=useState(contentfulURL);
  const [searchField, setSearchField]=useState("");
  // State variables passed to Description and ModalSetUp components
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const [continentButtons, setContinentButtons]=useState();
  const [continentFilter, setContinentFilter]=useState("");
  const [checkboxState,setCheckboxState]=useState();
  const [filterWarning,setFilterWarning]=useState("");
  
  
  // Search functionality I: Grabbing input value
  const handleChange=(e)=>{
    setSearchField(e.target.value);
  }

  // Search functionality II: Adjusting datafetch by input value
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchURL(contentfulURL + "&query=" + searchField);
  };

  useEffect(() => {
    const getListData = () => {
      //console.log(searchURL+continentFilter);
      fetch(searchURL+continentFilter)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          //console.log(data);
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
  setFilterWarning("");
  // if all continents are checked, the search doesn't need a filter
  if (allTrue) filterString="";
  // if none is selected there will be a small message
  if (!anyTrue){
    //console.log("No continent selected!");
    setFilterWarning("No continent selected, no results!");

  }
  
  setContinentFilter(filterString);
}

/* Build list of countries */
useEffect(() => { 
  const filterResult={};
    let creg;
    settings.continents.map((continent, index) => {
      creg=continent;
      filterResult[creg]=true;
      return null;
    });
    setCheckboxState(filterResult);
  }, []);

  useEffect(() => { 
    const filterResult={};

    const handleFilterChange=(e)=>{
      console.log("before",e.target.id, filterResult);
      filterResult[e.target.id]=!filterResult[e.target.id];
      console.log("after",e.target.id,filterResult);

      setCheckboxState(filterResult);
      
      updateContinentFilter(filterResult);
      return null;
    }
  
    const setAllFilters=(e,setTo)=>{
      e.preventDefault();
      Object.keys(filterResult).forEach((key, value) => {
        filterResult[key]=setTo;
      });

      setCheckboxState(filterResult);
      
      updateContinentFilter(filterResult);
      return null;
    }

    
    if(checkboxState!==undefined){
      const contButtons=[];
    
      let creg, clow, classesMerged;
      contButtons.push(<button key="btn-select-all" className="btn-select-all" onClick={(e) => setAllFilters(e,true)}>All</button>);
      
      settings.continents.map((continent, index) => {
        creg=continent;
        clow=creg.toLowerCase();
        classesMerged="btn-continent "+clow;
        
        filterResult[creg]=checkboxState[creg];
        contButtons.push(<label key={"label-"+index} htmlFor={creg} 
        className={classesMerged}>{creg} <input type="checkbox" id={creg} 
        className="badgebox" checked={checkboxState[creg]} onChange={handleFilterChange} /><span className="badge">{checkChar}</span></label>);
        return null;
      });
      contButtons.push(<button key="btn-select-none" className="btn-select-none" onClick={(e) => setAllFilters(e,false)}>None</button>);
      setContinentButtons(contButtons);
      updateContinentFilter(filterResult);
      setCheckboxState(checkboxState);
    }
    }, [checkboxState]);
  
    




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
        <form className="continentSelection">
          {continentButtons}
        </form>
        <div className="filter-warning">{filterWarning}</div>
      </div>
      <div className="cards-wrapper">
        <div className="cards card-columns">
          {/* Displaying current search - if no input value in search bar, displaying all posts*/}
          {data && data.items && data.includes 
            ? data.items.map((item, index) => {
                return (
                  <div key={"click-wrapper-" + index}>
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
