import { csrfFetch } from "./csrf";

// types
const GET_ALL_SPOTS = 'spot/getAllSpots';
const GET_SPOT = 'spot/getSpot';
const CREATE_SPOT = 'spot/createSpot';
const UPDATE_SPOT = 'spot/updateSpot';
const DELETE_SPOT = 'spot/deleteSpot';


// action creators
const actionGetAllSpots = (spots) => ({
    type: GET_ALL_SPOTS,
    payload: spots 
})
const actionGetSpot = (spotId) => ({
    type: GET_SPOT,
    payload: spotId 
})
const actionCreateSpot = (spot) => ({
    type: CREATE_SPOT,
    payload: spot 
})
const actionUpdateSpot = (spot) => ({
    type: UPDATE_SPOT,
    payload: spot 
})
const actionDeleteSpot = (spotId) => ({
    type: DELETE_SPOT,
    payload: spotId 
})

// thunks => the gateway to our backend api
export const thunkGetAllSpots = () => async (dispatch) => {
    try {
        const res = await csrfFetch('/api/spots')
    if(!res.ok) {
        throw new Error('Failed to get spots')
    }
        const spots = await res.json()
        dispatch(actionGetAllSpots(spots))
    } catch (err) {
        console.log("Failed to get spots", err)
    }
}

export const thunkGetSpot = (spotId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/spots/${spotId}`)
        if(!res.ok) {
        throw new Error('Failed to get spot')
    } 
        const spot = await res.json()
        dispatch(actionGetSpot(spot))
        return spot    
    } catch (err) {
        console.log("Failed to get spot", err)
    }
}

export const thunkCreateSpot = (spot) => async (dispatch) => {
    try {const res = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(spot)
    })
    if (res.ok) {
        const spot = await res.json()
        dispatch(actionCreateSpot(spot))
        return spot
    }}
    catch(err) {
        console.log("Failed to get spot", err)
}
}

export const thunkUpdateSpot = (spot) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/spots/${spot.id}`, {
            method: 'PUT',
            body: JSON.stringify(spot),
        });
        if(res.ok) {
            const spot = await res.json();
            dispatch(actionUpdateSpot(spot))
        }
    } catch (err) {
        console.log('Failed to update spot', err)
    }
}

export const thunkDeleteSpot = (id) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/spots/${id}`, {
             method: 'DELETE'
            })
            if(res.ok) {
                return dispatch(actionDeleteSpot(id))
            }
    } catch (err) {
        console.log('Failed to delete spot', err)
    }
    
    
    const res = await csrfFetch(`/api/spots/${id}`, { method: 'DELETE'})
    if(res.ok) {
        return dispatch(actionDeleteSpot(id))
    }
}

// reducers
const initialState = {
    allSpots: {},
    singleSpot: {}
}

function spotsReducer (state = initialState, action) {
    switch (action.type) {
    case GET_ALL_SPOTS: {
        let newState = {}
        action.payload.Spots.forEach(spot => {
            newState[spot.id] = spot
        })
        return { ...state, allSpots: newState}
    }
    case GET_SPOT:{
            return {...state, singleSpot: action.payload}
    }
    case CREATE_SPOT: {
        const newState = {...state}
        newState.allSpots[action.spot.id] = action.spot
        return newState
    }
        default: 
            return state;
    }
}

export default spotsReducer