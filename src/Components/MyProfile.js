import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorHandler from "./ErrorHandler";
import "./../Styles/MyProfile.css";

//My Profile route = Displays data about me, must display the number of saved posts I have

const MyProfile = () => {
  const [user, setUser] = useState({});
  const [numberPosts, setNumberPosts] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://cdn.contentful.com//spaces/hyf1ooddn06y/environments/master/entries?access_token=Bo3__PcF0P-icxz-t6a04_PoUyn72Gz7ywctg4SIRdE&select=fields&content_type=user"
    )
      .then((rawData) => rawData.json())
      .then((response) => {
        console.log(response);
        setUser(response.items[0].fields);
        console.log(response.items[0].fields);
      })
      .catch((errorMsg) => {
        let errorOutput = `Error: ${errorMsg}`;
        setError(errorOutput);
      });
  }, []);

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

  useEffect(() => {
    fetch(
      "https://cdn.contentful.com//spaces/hyf1ooddn06y/environments/master/entries?access_token=Bo3__PcF0P-icxz-t6a04_PoUyn72Gz7ywctg4SIRdE&links_to_asset=41KcRu84TzLWiOTDK31yek"
    )
      .then((rawData) => rawData.json())
      .then((response) => {
        console.log(response);
      })
      .catch((errorMsg) => {
        let errorOutput = `Error: ${errorMsg}`;
        setError(errorOutput);
      });
  }, []);

  return (
    <div className="myProfile">
      {user ? (
        <div>
          <div className="titleName">Wanted</div>
          <div className="nameProfile">{user.name}</div>
          <hr className="hrProfile" />
          <div className="titlePlace">Last seen</div>
          <div className="placeProfile">{user.placeOfOrigin}</div>
          <div className="titleStatement">Warning</div>
          <div className="statementProfile">{user.statement}</div>
          {/* <span>{user.currentPosition.lon}</span> */}
          {/*  <span>{user.currentPosition.lat}</span> */}
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
