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
  let id = spot.id;

  return (
    <>
      <div
        className="previewWindow"
        onClick={() => {
          history.push(`/spots/${id}`);
        }}
        title={spot.name}
      >
        <div className="previewImage">
          <img src={spot.previewImage} alt="N/A" />
        </div>
        <div className="previews">
          <div className="location">
            <p>
              {spot.city}, {spot.state}
            </p>
            <p>Owner ID: {spot.ownerId}</p>
          </div>
          <p> <i className="fas fa-star" />{spot.avgRating}</p>
        </div>
        <p>${spot.price}/night</p>
      </div>
      <div>
        <button
          className="update"
          onClick={() => history.push(`/spots/${spot.id}/edit`)}
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
      {deleteMod ? (
        <DeleteSpot spot={spot} setDeleteMod={setDeleteMod} />
      ) : null}
    </>
  );
}
