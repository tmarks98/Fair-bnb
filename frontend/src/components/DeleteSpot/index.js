import { thunkDeleteSpot, thunkGetCurrentSpots } from "../../store/spots";
import { useDispatch } from 'react-redux';
import './index.css'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

export default function DeleteSpot(props) {
    const { spotId } = useParams
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetCurrentSpots(spotId))
    })

    return (
        <div className='delete'>
            <h2 className="confirmDelete">Confirm Delete</h2>
            <p>Are you sure you want to remove this spot from the listings?</p>
            <button className='yes' onClick={async () => {
                await dispatch(thunkDeleteSpot(props.spot.id))
                props.setDeleteMod(false)
                // need to trigger re-render here
                }}>Yes (Delete Spot)</button>
            <button className='no' onClick={async () => {
                props.setDeleteMod(false)
                }}>No (Keep Spot)</button>
        </div>
    );
}
