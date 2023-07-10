import { csrfFetch } from "./csrf";

// types
const GET_REVIEW = "review/getReview";
const CREATE_REVIEW = "review/createReview";
const DELETE_REVIEW = "review/deleteReview";

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
    const res = await csrfFetch(`/api/spots/${id}/reviews`);
    if (res.ok) {
      const data = await res.json();
      dispatch(actionGetReview(data.Reviews));
    } else {
      throw new Error("Failed to get reviews");
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
      return body;
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
  reviews: [],
  user: {},
};

function spotsReducer(state = initialState, action) {
  console.log("TYPE: ", action.type);
  let newReviews = [];
  switch (action.type) {
    case GET_REVIEW: {
      console.log('state1: ', action.review)
      return { ...state, reviews: action.review };
    }
    case CREATE_REVIEW: {
      newReviews = state.reviews? [...state.reviews]: []
      const newState = { reviews: newReviews, user: {...state.user} };
      newState.reviews.push(action.review);
      return newState;
    }
    default:
      return initialState;
  }
}

export default spotsReducer;
