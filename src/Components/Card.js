import React from "react";
import Stars from "./Stars";
import "./../Styles/Card.css";

const Card = (props) => {
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


  return (
    <div key={"item-" + index} className="card">
      {showIndex?<div className="ranking">{"#"+(index+1)}</div>:null}
      <div className={continentClasses}>{itemContinent}</div>
      {{ itemCountry } ? <div className="country">{itemCountry}</div> : null}
      <div className="location">{itemLocation}</div>
      <div className="rating">
        <Stars rating={itemRating} maxStars="5" />
      </div>
      <div className="img-wrapper">
        <img
          src={itemAssetURL}
          alt={itemAssetTitle}
          title={itemAssetTitle}
          className="card-image"
        />
      </div>
    </div>
  );
};
export default Card;
