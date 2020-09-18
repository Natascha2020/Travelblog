import React from "react";
/* import Modal from 'react-bootstrap/Modal'; */

import Stars from "./Stars";

import "./../Styles/LocationCard.css";

const LocationCard = (props) => {
  const { transferItem, transferData, index, showIndex } = props;

  const extractURL = (assetData, assetID) => {
    if (assetData && assetData.Asset) {
      let result = undefined;
      assetData.Asset.forEach((element) => {
        if (element.sys.id === assetID) {
          result = {
            url: element.fields.file.url,
            title: element.fields.title
          };
        }
      });
      return result;
    } else {
      return undefined;
    }
  };

  let itemData = transferItem.fields;

  let itemContinent = itemData.continent ? itemData.continent : "";
  let continentClasses = "continent " + itemContinent.toLowerCase();

  let itemCountry = itemData.country ? itemData.country : "";
  let itemLocation = itemData.location ? itemData.location : "";
  let itemRating = itemData.rating ? itemData.rating : 0;
  let itemAssetID = itemData.blogImage ? itemData.blogImage.sys.id : undefined;
  let itemAssetData = extractURL(transferData.includes, itemAssetID);
  let itemAssetURL = itemAssetData ? itemAssetData.url : undefined;
  let itemAssetTitle = itemAssetData ? itemAssetData.title : undefined;
  console.log("item-country "+itemContinent+" ["+itemCountry+"]");

  return (
    <div key={"item-" + index} className="card">
      {showIndex?<div className="ranking">{"#"+(index+1)}</div>:null}
      <img className="card-image card-img-top img-fluid" 
          src={itemAssetURL} 
          alt={itemAssetTitle}
          title={itemAssetTitle}
      />
      <div className="card-block">
        <div className={continentClasses}>{itemContinent}</div>
        <h4 className="card-title location"> {itemLocation}</h4>
        {itemCountry && itemCountry!==""  ? <div className="country">{itemCountry}</div> : null}
        <div className="rating">
          <Stars rating={itemRating} maxStars="5" />
        </div>    
      </div>
    </div>
    
  );
};
export default LocationCard;
