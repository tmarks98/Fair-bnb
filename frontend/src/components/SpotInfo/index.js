import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { thunkCreateReview, thunkGetReview } from "../../store/reviews";
import "./index.css";
import ReserveButton from "./reserveButton";
import { thunkGetSpot } from "../../store/spots";
import { useParams } from "react-router-dom";

export default function SpotInfo() {
  const spot = useSelector((state) => state.spots.singleSpot);
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { spotId } = useParams();

  useEffect(() => {
    dispatch(thunkGetSpot(spotId)).then(() => {

      dispatch(thunkGetReview(spotId));
    });
  }, [dispatch, spotId]);
  if (!spot) return null;

  const createReview = () => {
    dispatch(thunkCreateReview(spot.id, stars, review));
  };

  const showSelectedStars = () => {
    let res = [];
    for (let start = 1; start <= stars; start++) {
      res.push(
        <i
          className="fas fa-star"
          key={start}
          onClick={() => {
            setStars(start);
          }}
        ></i>
      );
    }

    for (let end = stars + 1; end <= 5; end++) {
      res.push(
        <i
          className="fal fa-star"
          key={end}
          onClick={() => {
            setStars(end);
          }}
        ></i>
      );
    }

    return res;
  };

  return (
    <>
      <div>
        <h2>{spot.name}</h2>
        <p>
          {spot.city}, {spot.state}, {spot.country}
        </p>
      </div>
      {spot.SpotImages && (
        <div className="allImage">
          <div className="bigImage">
            {spot.SpotImages[0] && (
              <img src={spot.SpotImages[0].url} alt=""></img>
            )}
          </div>
          <div className="smallImages">
            {spot.SpotImages[1] && (
              <img src={spot.SpotImages[1].url} alt=""></img>
            )}
            {spot.SpotImages[2] && (
              <img src={spot.SpotImages[2].url} alt=""></img>
            )}
            {spot.SpotImages[3] && (
              <img src={spot.SpotImages[3].url} alt=""></img>
            )}
            {spot.SpotImages[4] && (
              <img src={spot.SpotImages[4].url} alt=""></img>
            )}
          </div>
        </div>
      )}
      <div className="description">
        <div className="descriptionTitle">
          {spot.Owner && (
            <h3>
              Hosted by {spot.Owner.firstName} {spot.Owner.lastName}
            </h3>
          )}
          <p>{spot.description}</p>
        </div>
        <div className="button">
          <h2>${spot.price}</h2>
          <h2>
            <i className="fas fa-star"></i>
            {spot.avgStarRating} reviews: {spot.numReviews}
          </h2>
          <button>Reserve</button>
        </div>
      </div>
      <hr />
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        {"Post Your Review"}
      </button>
      <Reviews />
      <div
        className="outerModal"
        style={{ display: !showModal ? "none" : "flex" }}
      >
        <div className="modal">
          <div>
            <h1>How was your stay?</h1>
          </div>

          <div>
            <textarea
            placeholder="Leave your review here..."
              onChange={(e) => {
                setReview(e.target.value);
              }}
            ></textarea>
          </div>
          <div>{showSelectedStars()}</div>
          <div>
            <button
              onClick={(e) => {
                createReview();
                setShowModal(false);
              }}
            >
              Submit Your Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Reviews() {
  const reviews = useSelector((state) => state.review.reviews);
  const dispatch = useDispatch();
  const { spotId } = useParams();
  // useEffect(() => {
  //   console.log('spotid1:', spotId)
  //   dispatch(thunkGetReview(spotId));
  // }, [dispatch, spotId]);
  if (!reviews || reviews.length < 0) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>{review.createdAt}</div>
            <div>{review.review}</div>
          </div>
        );
      })}
    </div>
  );
}
