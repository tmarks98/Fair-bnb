import { csrfFetch } from "./csrf";

// types
const GET_REVIEW = "spot/getReview";
const CREATE_REVIEW = "spot/createReview";
const DELETE_REVIEW = "spot/deleteReview";

// action creators
const actionGetReview = (review) => ({
  type: GET_REVIEW,
  review,
});
const actionCreateReview = (review) => ({
  type: CREATE_REVIEW,
  review,
});
const actionDeleteReview = () => ({
  type: DELETE_REVIEW,
});

// thunks => the gateway to our backend api
export const thunkGetReview = (id) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/spots/${id}/reviews`);
    if (res.ok) {
      const review = await res.json();
      dispatch(actionGetReview(review));
    } else {
      throw new Error("Failed to get reviews");
    }
  } catch (err) {
    console.log("Failed to get reviews", err);
  }
};
export const thunkCreateReview = (id, stars, review) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/spots/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stars, review }),
    });
    if (res.ok) {
      const body = await res.json();
      dispatch(actionCreateReview(body));
    } else {
      throw new Error("Failed to post review");
    }
  } catch (err) {
    console.log("Failed to post review", err);
  }
};
export const thunkDeleteReview = (id) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/spots/${id}`);
    if (res.ok) {
      const spot = await res.json();
      dispatch(actionDeleteReview(spot));
    } else {
      throw new Error("Failed to get spot");
    }
  } catch (err) {
    console.log("Failed to get spot", err);
  }
};

// reducers

const initialState = {
  spot: {},
  user: {},
};

function spotsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEW: {
      break;
    }
    case CREATE_REVIEW: {
      state.spot[action.review.spotId] = action.review;
      if (state.user[action.review.userId] == null) {
        state.user[action.review.userId] = [];
      }
      state.user[action.review.userId].push(action.review.spotId);
      return { ...state };
    }
    case DELETE_REVIEW: {
      break;
    }
    default:
      return initialState;
  }
}

export default spotsReducer;
