import React from "react";
import { useDispatch } from "react-redux";
import { thunkDeleteReview } from "../../store/reviews";

export default function DeleteReview(props) {
  let dispatch = useDispatch();

  return (
    <div className="deleteReviewModal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to remove this review?</p>
      <button
        className="yesButton"
        onClick={async () => {
          props.setShowDeleteModal(false);
          await dispatch(thunkDeleteReview(props.review.id, props.spotId)).then(
            (id) => {
              let data = props.reviewz;
              console.log("BEFORFE ID", id);
              console.log("BEFORFE FILTER", data);
              data = data.filter((ele) => {
                return ele.id !== id;
              });
              console.log("AFTER FILTER", data);
              props.setReviews(data);
            }
          );
        }}
      >
        Yes (Delete Review)
      </button>
      <button
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
