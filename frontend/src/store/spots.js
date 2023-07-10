import { csrfFetch } from "./csrf";

// types
const GET_ALL_SPOTS = "spot/getAllSpots";
const GET_SPOT = "spot/getSpot";
const CREATE_SPOT = "spot/createSpot";
const UPDATE_SPOT = "spot/updateSpot";
const DELETE_SPOT = "spot/deleteSpot";

// action creators
const actionGetAllSpots = (spots) => ({
  type: GET_ALL_SPOTS,
  payload: spots,
});
const actionGetSpot = (payload) => ({
  type: GET_SPOT,
  payload,
});
const actionCreateSpot = (spot) => ({
  type: CREATE_SPOT,
  spot,
});
const actionUpdateSpot = (spot) => ({
  type: UPDATE_SPOT,
  spot,
});
const actionDeleteSpot = (spotId) => ({
  type: DELETE_SPOT,
  spotId,
});

// thunks => the gateway to our backend api
export const thunkGetAllSpots = () => async (dispatch) => {
  try {
    
    const res = await csrfFetch("/api/spots");
    if (!res.ok) {
      throw new Error("Failed to get spots");
    }
    const spots = await res.json();
    dispatch(actionGetAllSpots(spots));
  } catch (err) {
    console.log("Failed to get spots", err);
  }
};
export const thunkGetCurrentSpots = (spots) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/spots/current`);
    if (!res.ok) {
      throw new Error("Failed to get spot");
    }
    const spots = await res.json();
    dispatch(actionGetAllSpots(spots));
    return spots;
  } catch (err) {
    console.log("Failed to get spot", err);
  }
};

export const thunkGetSpot = (spotId) => async (dispatch) => {
  try {
    console.log('spotid: ', spotId)
    const res = await csrfFetch(`/api/spots/${spotId}`);
    if (!res.ok) {
      throw new Error("Failed to get spot");
    }
    const spot = await res.json();
    dispatch(actionGetSpot(spot));
    return spot;
  } catch (err) {
    console.log("Failed to get spot", err);
  }
};

export const thunkCreateSpot = (spot, images) => async (dispatch) => {
  try {
    const res = await csrfFetch("/api/spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spot),
    });
    if (res.ok) {
      const createdSpot = await res.json();
      createdSpot.SpotImages = [];
      for (let image of images) {
        await csrfFetch(`/api/spots/${createdSpot.id}/images`, {
          method: "POST",
          body: JSON.stringify({ url: image, preview: true }),
        });
        createdSpot.SpotImages.push({ url: image });
      }

      dispatch(actionCreateSpot(createdSpot));
      return createdSpot.id;
    }
  } catch (err) {
    console.log("Failed to get spot", err);
  }
};

export const thunkUpdateSpot = (spot) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/spots/${spot.id}`, {
      method: "PUT",
      body: JSON.stringify(spot),
    });
    if (res.ok) {
      const spot = await res.json();
      dispatch(actionUpdateSpot(spot));
    }
  } catch (err) {
    console.log("Failed to update spot", err);
  }
};

export const thunkDeleteSpot = (id) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/spots/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch(actionDeleteSpot(id));
    }
  } catch (err) {
    console.log("Failed to delete spot", err);
  }

  const res = await csrfFetch(`/api/spots/${id}`, { method: "DELETE" });
  if (res.ok) {
    return dispatch(actionDeleteSpot(id));
  }
};

// reducers
const initialState = {
  allSpots: {},
  singleSpot: {},
};

function spotsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SPOTS: {
      let newState = {};
      action.payload.Spots.forEach((spot) => {
        newState[spot.id] = spot;
      });
      return { ...state, allSpots: newState };
    }
    case GET_SPOT: {
      console.log("pew: ", action);
      return { ...state, singleSpot: action.payload };
    }
    case CREATE_SPOT: {
      const create = (state.allSpots[action.spot.id] = action.spot);
      return { ...state, singleSpot: create };
    }
    case UPDATE_SPOT: {
      const update = (state.allSpots[action.spot.id] = action.spot);
      return { ...state, singleSpot: update };
    }
    case DELETE_SPOT: {
      return {
        ...state,
        allSpots: { ...state.allSpots, [action.spotId]: null },
      };
    }
    default:
      return state;
  }
}

export default spotsReducer;
