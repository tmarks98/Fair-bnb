const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS'

const actionGetSpots = (allSpots) => ({
    type: GET_ALL_SPOTS,
    allSpots
})
 
export const getAllSpots = () => async (dispatch) => {
    const res = await fetch('/api/spots')
    if(res.ok) {
        const result = await res.json()
        dispatch(actionGetSpots(result))
        return result
    }
}

function spotsReducer (state = {}, action) {
    switch (action.type) {
        case GET_ALL_SPOTS : {
            return {...state, ...action.allSpots.Spots}
        }
        default: 
            return state
    }
}

export default spotsReducer