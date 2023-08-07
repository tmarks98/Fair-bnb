import { useHistory } from "react-router-dom";
import React from "react";
import "./index.css";
import DeleteSpot from "../DeleteSpot";
import { useState } from "react";

export default function SpotPreview(props) {
  let spot = props.spot;
  let [deleteMod, setDeleteMod] = useState(false);
  const history = useHistory();
  if (!spot) return null;
  const spotRating = spot.avgRating.toFixed(2)
  let id = spot.id;

  return (
    <>
      <div
        className="previewWindow"
        onClick={() => {
          // history.push(`/spots/${id}`);
        }}
        title={spot.name}
      >
        <img
          className="images"
          src={spot.previewImage}
          alt="Img unavailable at this time"
          onClick={() => {
            history.push(`/spots/${id}`);
          }}
        />
        <div
          className="allContent"
          style={{ paddingBottom: "5px" }}
          onClick={() => {
            history.push(`/spots/${id}`);
          }}
        >
          <div className="previews">
            <div className="location" style={{ width: "100%" }}>
              <p
                style={{
                  fontSize: "20px",
                  margin: "0px",
                  paddingTop: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "5px",
                }}
              >
                {spot.city}, {spot.state}{" "}
                <span style={{ paddingRight: "5px" }}>
                  <i className="fas fa-star" />
                  {spotRating ? spotRating : "New"}
                  {console.log('spotRating', spotRating)}
                </span>
              </p>
            </div>
          </div>
          <p
            style={{
              color: "grey",
              fontSize: "16px",
              margin: "0px",
              paddingTop: "4px",
              paddingLeft: "5px",
            }}
          >
            5 miles away
          </p>
          <p
            style={{
              color: "grey",
              fontSize: "16px",
              margin: "0px",
              paddingTop: "4px",
              paddingLeft: "5px",
            }}
          >
            Aug 8-12
          </p>
          <p style={{ fontSize: "19px", margin: "0px", paddingTop: "6px" }}>
            <span style={{ fontWeight: "600", paddingLeft: "5px" }}>
              ${spot.price}
            </span>{" "}
            night
          </p>
        </div>

        {props.footer ? (
          <div>
            <button
              className="update"
              onClick={() => {
                let reRoute = `/edit/edit/${spot.id}`;
                history.push(reRoute);
              }}
            >
              Update
            </button>
            <button
              className="delete1"
              onClick={() => {
                setDeleteMod(true);
              }}
            >
              Delete
            </button>
          </div>
        ) : null}
        {deleteMod ? (
          <DeleteSpot spot={spot} setDeleteMod={setDeleteMod} />
        ) : null}
      </div>
    </>
  );
}
