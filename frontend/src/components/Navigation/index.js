import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import CreateSpotButton from "../Forms/CreateSpotButton";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

function Navigation({ isLoaded, inSpot }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  ///spots new, spots current, /

  // you are either in / or some other route
  // use get params to deterime the directory
  //
  return (
    <>
      <div>
        <div
          className="navbar"
          style={{
            justifyContent: inSpot ? "space-around" : "space-between",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <div>
            <h2 className="logo" onClick={() => history.push("/")}>
              <img
                className="logoImage"
                src="https://i.ibb.co/jgZzfcH/letter-m-10136703.png"
                alt=""
              />
              million-airbnb
            </h2>
          </div>
          <div
            className="nav"
            style={{ display: "flex", border: "1px red solid" }}
          >
            <div className="createSpotButton" style={{ paddingRight: "15px" }}>
              {sessionUser && <CreateSpotButton />}
            </div>
            <div className="profileButtonDiv">
              {isLoaded && <ProfileButton user={sessionUser} />}
            </div>
          </div>
        </div>
        <hr style={{ width: "99%", border: "1px solid rgb(220,220,220)" }} />
      </div>
    </>
  );
}

export default Navigation;
