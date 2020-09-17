import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorHandler from "./ErrorHandler";
import "./../Styles/MyProfile.css";

//My Profile route = Displays data about me, must display the number of saved posts I have

/* const contentfulSpaceID = "hyf1ooddn06y";
const contentfulToken = "Bo3__PcF0P-icxz-t6a04_PoUyn72Gz7ywctg4SIRdE";
const contentfulType = "post";

let contentfulURL =
  "https://cdn.contentful.com/spaces/[spaceid]/environments/master/entries?access_token=[token]&content_type=[type]";
contentfulURL = contentfulURL.replace("[spaceid]", contentfulSpaceID);
contentfulURL = contentfulURL.replace("[token]", contentfulToken);
contentfulURL = contentfulURL.replace("[type]", contentfulType);
console.log(contentfulURL);
 */

const MyProfile = () => {
  const [user, setUser] = useState({});
  const [numberPosts, setNumberPosts] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  // Fetching fields and there values for user (just one current user)
  useEffect(() => {
    fetch(
      "https://cdn.contentful.com//spaces/hyf1ooddn06y/environments/master/entries?access_token=Bo3__PcF0P-icxz-t6a04_PoUyn72Gz7ywctg4SIRdE&select=fields&content_type=user"
    )
      .then((rawData) => rawData.json())
      .then((response) => {
        console.log(response);
        setData(response);
        setUser(response.items[0].fields);
        console.log(response.items[0].fields);
      })
      .catch((errorMsg) => {
        let errorOutput = `Error: ${errorMsg}`;
        setError(errorOutput);
      });
  }, []);

  // Fetching Posts of that user and storing number of posts (length of array)
  useEffect(() => {
    fetch(
      "https://cdn.contentful.com/spaces/hyf1ooddn06y/environments/master/entries?access_token=Bo3__PcF0P-icxz-t6a04_PoUyn72Gz7ywctg4SIRdE&content_type=post"
    )
      .then((rawData) => rawData.json())
      .then((response) => {
        setNumberPosts(response.items.length);
      })
      .catch((errorMsg) => {
        let errorOutput = `Error: ${errorMsg}`;
        setError(errorOutput);
      });
  }, []);

  const extractURL = (assetData, assetID) => {
    if (assetData && assetData.Asset) {
      let result = undefined;
      assetData.Asset.forEach((element) => {
        if (element.sys.id === assetID) {
          result = {
            url: element.fields.file.url,
            title: element.fields.title,
          };
        }
      });
      return result;
    } else {
      return undefined;
    }
  };

  let itemAssetID = user.photo ? user.photo.sys.id : undefined;
  let itemAssetData = extractURL(data.includes, itemAssetID);
  let itemAssetURL = itemAssetData ? itemAssetData.url : undefined;

  return (
    <div className="myProfile">
      {user ? (
        <div>
          <div className="titleName">Wanted</div>
          <div className="nameProfile">{user.name}</div>
          <hr className="hrProfile" />
          <div className="userImgWrapper">
            <img className="userImg" src={itemAssetURL} alt="" />
          </div>
          <div className="titlePlace">Last seen</div>
          <div className="placeProfile">{user.placeOfOrigin}</div>
          <div className="titleStatement">Warning</div>
          <div className="statementProfile">{user.statement}</div>
        </div>
      ) : null}
      <hr className="hrProfile" />
      {numberPosts ? (
        <Link className="linkProfile" to="/Images">
          <h3 className="postsProfile"> Records: {numberPosts}</h3>{" "}
        </Link>
      ) : null}
      <div className="contact">Contact: #006 @WBS Coding School</div>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default MyProfile;
