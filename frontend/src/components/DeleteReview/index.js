import React from "react";
import { useDispatch } from "react-redux";
import { thunkDeleteReview } from "../../store/reviews";
import { thunkGetSpot } from "../../store/spots";
import './index.css'

export default function DeleteReview(props) {
  let dispatch = useDispatch();

  return (
    <div className="deleteReviewModal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to remove this review?</p>
      <button
      style={{
        backgroundColor: "rgb(255,90,95)",
        width: "94%",
        height: "45px",
        border: "black 3px solid",
        boxShadow: "2px 1px 2px 1px black",
        color: "white",
      }}
        className="yesButton"
        onClick={async () => {
          props.setShowDeleteModal(false);
          await dispatch(thunkDeleteReview(props.review.id, props.spotId)).then(
            (id) => {
              let data = props.reviewz;
              data = data.filter((ele) => {
                return ele.id !== id;
              });
              props.setReviews(data);
              dispatch(thunkGetSpot(props.spotId)).then(() => {});
            }
          );
        }}
      >
        Yes (Delete Review)
      </button>
      <button
      style={{
        backgroundColor: "grey",
        width: "94%",
        height: "45px",
        border: "black 3px solid",
        boxShadow: "2px 1px 2px 1px black",
        color: "white",
      }}
        className="noButton"
        onClick={() => {
          props.setShowDeleteModal(false);
        }}
      >
        No (Keep review)
      </button>
    </div>
  );
}
