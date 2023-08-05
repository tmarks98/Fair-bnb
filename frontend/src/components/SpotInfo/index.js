import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { thunkCreateReview, thunkGetReview } from "../../store/reviews";
import "./index.css";
import { thunkGetSpot } from "../../store/spots";
import { useParams } from "react-router-dom";
import DeleteReview from "../DeleteReview";
const month = (date) => {
  let ele = new Date(date);
  return ele.toLocaleString("default", { month: "long" });
};

export default function SpotInfo() {
  const spot = useSelector((state) => state.spots.singleSpot);
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { spotId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  // let reviewz = useSelector((state) => state.review.reviews);
  const [re, setRe] = useState([]);

  useEffect(() => {
    dispatch(thunkGetSpot(spotId)).then(() => {
      dispatch(thunkGetReview(spotId)).then((reviews) => {
        setRe(reviews);
      });
    });
  }, [dispatch, spotId]);

  let reviewWord;
  if (spot.numReviews === 1) {
    reviewWord = "review";
  } else {
    reviewWord = "reviews";
  }
  let rating = useRef(0);
  rating.current = spot.avgStarRating
    ? `${spot.avgStarRating?.toFixed(2)} • ${spot.numReviews} ${reviewWord}`
    : " New";
  if (!spot) return null;
  const isOwner = sessionUser?.id === spot.ownerId;
  const isReviewed = re?.find((ele) => ele.User?.id === sessionUser?.id);

  const createReview = async () => {
    let closure = re;
    await dispatch(thunkCreateReview(spot.id, stars, review)).then(
      (review2) => {
        let User = {
          id: sessionUser.id,
          firstName: sessionUser.firstName,
          lastName: sessionUser.lastName,
        };
        review2.User = User;

        let data = closure.map((a) => ({ ...a }));
        data.push(review2);

        setRe(data);
        dispatch(thunkGetSpot(spotId)).then(() => {});
      }
    );
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
    <div
      className="wholePage"
      style={{ marginLeft: "16%", marginRight: "16%" }}
    >
      <div className="titlee">
        <h2>{spot.name}</h2>
        <p style={{ fontSize: "20px" }}>
          <span>
            <i className="fas fa-star" style={{ fontSize: "17px" }}></i>{" "}
            {spot.avgStarRating} •{" "}
          </span>
          <span style={{ textDecoration: "underline" }}>
            {spot.numReviews} reviews
          </span>{" "}
          •{" "}
          <span style={{ textDecoration: "underline" }}>
            {spot.city}, {spot.state}, {spot.country}
          </span>
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
              <img
                src={spot.SpotImages[2].url}
                alt=""
                style={{ borderTopRightRadius: "15px" }}
              ></img>
            )}
            {spot.SpotImages[3] && (
              <img src={spot.SpotImages[3].url} alt=""></img>
            )}
            {spot.SpotImages[4] && (
              <img
                src={spot.SpotImages[4].url}
                alt=""
                style={{ borderBottomRightRadius: "15px" }}
              ></img>
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
        <div
          className="button"
          style={{ border: "5px black solid", width: "400px" }}
        >
          <h2 style={{ paddingLeft: "10px" }}>${spot.price}</h2>
          <h2 style={{ paddingLeft: "10px" }}>
            <i className="fas fa-star"></i>
            {rating.current}
          </h2>
          <button
            style={{
              paddingLeft: "5px",
              marginTop: "10px",
              marginLeft: "10px",
              marginBottom: "10px",
              width: "95%",
              height: "40px",
              backgroundColor: "rgb(248, 77, 77)",
              border: "black 3px solid",
              boxShadow: "2px 2px 2px 1px",
            }}
          >
            Reserve
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "40px", marginBottom: "40px", width: "98%" }} />
      <div className="reviewArea">
        {sessionUser && !isOwner && !isReviewed && (
          <button
            className="postReview"
            onClick={() => {
              setShowModal(true);
            }}
          >
            {re.length > 0
              ? "Post Your Review"
              : "Be the first to post a review!"}
          </button>
        )}
        <Reviews re={re} setRe={setRe} />
        <div
          className="outerModal"
          style={{ display: !showModal ? "none" : "flex" }}
        >
          <div className="modal">
            <div className="modalTitle">
              <h1>How was your stay?</h1>
            </div>

            <div style={{ width: "100%" }}>
              <textarea
                style={{
                  width: "92%",
                  marginLeft: "10px",
                  border: "black solid 3px",
                  backgroundColor: "rgb(232,240,254)",
                  height: "120px",
                }}
                placeholder="Leave your review here..."
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              ></textarea>
            </div>
            <div>{showSelectedStars()} Stars</div>
            <div style={{ width: "100%" }}>
              <button
                className="submitReviewButton"
                disabled={review.length < 10}
                style={{
                  marginBottom: "50px",
                  backgroundColor: "rgb(255,90,95)",
                  width: "94%",
                  marginLeft: "10px",
                  height: "45px",
                  border: "black 3px solid",
                  boxShadow: "2px 1px 2px 1px black",
                  color: "white",
                }}
                onClick={(e) => {
                  createReview();
                  setReview("");
                  setShowModal(false);
                }}
              >
                Submit Your Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reviews(props) {
  console.log("new props: ", props.re);
  const reviews = props.re;
  const sessionUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots.singleSpot);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!reviews || reviews.length === 0) return <></>;
  return reviews.length > 0 ? (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {reviews.map((review) => {
        const reviewUser = Object.values(
          review.User ? review.User : [review.userId]
        );
        const isUser = sessionUser?.id === reviewUser[0];
        return (
          <div
            key={review.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="reviewUser">
              {reviewUser[1] ?? sessionUser.firstName}{" "}
              {reviewUser[2] ?? sessionUser.lastName}
            </div>
            <div className="createdAt">
              {month(review.createdAt) +
                " " +
                review.createdAt.split("T").join("").split("-")[0]}
            </div>
            <div className="reviewText">{review.review}</div>
            {isUser && (
              <button
                className="deleteReview"
                onClick={() => {
                  setShowDeleteModal(review);
                }}
              >
                Delete
              </button>
            )}
          </div>
        );
      })}
      {showDeleteModal ? (
        <DeleteReview
          spotId={spot.id}
          review={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          reviewz={props.re}
          setReviews={props.setRe}
        />
      ) : null}
    </div>
  ) : (
    <></>
  );
}
