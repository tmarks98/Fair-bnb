// import { csrfFetch } from './csrf'

// // types
// const GET_REVIEW = 'spot/getReview';
// const CREATE_REVIEW = 'spot/createReview';
// const DELETE_REVIEW = 'spot/deleteReview';


// action creators
// const actionGetReview = () => ({
//     type: GET_REVIEW,
//     payload: 
// })
// const actionCreateReview = () => ({
//     type: CREATE_REVIEW,
//     payload: 
// })
// const actionDeleteReview = () => ({
//     type: DELETE_REVIEW,
//     payload: 
// })

// thunks => the gateway to our backend api
// export const thunkGetReview = (id) => async (dispatch) => {
//     try {
//         const res = await csrfFetch(`/api/spots/${id}`)
//     if(res.ok) {
//         const spot = await res.json()
//         dispatch(actionGetSpot(spot))
//     } else {
//         throw new Error('Failed to get spot')
//     }
//     } catch (err) {
//         console.log("Failed to get spot", err)
//     }
// }
// export const thunkCreateReview = (id) => async (dispatch) => {
//     try {
//         const response = await csrfFetch(`/api/spots/${id}/reviews`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//           });
//     if(res.ok) {
//         const spot = await res.json()
//         dispatch(actionGetSpot(spot))
//     } else {
//         throw new Error('Failed to get spot')
//     }
//     } catch (err) {
//         console.log("Failed to get spot", err)
//     }
// }
// export const thunkDeleteReview = (id) => async (dispatch) => {
//     try {
//         const res = await csrfFetch(`/api/spots/${id}`)
//     if(res.ok) {
//         const spot = await res.json()
//         dispatch(actionGetSpot(spot))
//     } else {
//         throw new Error('Failed to get spot')
//     }
//     } catch (err) {
//         console.log("Failed to get spot", err)
//     }
// }

// reducers

// const initialState = {
//     allSpots: {},
//     currentSpot: {}
// }

// function spotsReducer (initialState, action) {
//     switch (action.type) {
//         case GET_ALL_SPOTS : {
//             return {...initialState, ...action.allSpots.Spots}
//         }
//         default: 
//             return initialState
//     }
// }

// export default spotsReducer