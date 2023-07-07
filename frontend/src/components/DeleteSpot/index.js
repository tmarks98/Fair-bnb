import { thunkDeleteSpot } from "../../store/spots";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './index.css'

export default function DeleteSpot(props) {
    let dispatch = useDispatch();
    let history = useHistory();

    return (
        <div className='delete'>
            <h2 className="confirmDelete">Confirm Delete</h2>
            <p>Are you sure you want to remove this spot from the listings?</p>
            <button className='yes' onClick={async () => {
                props.setDeleteMod(true)
                await dispatch(thunkDeleteSpot(props.spot.id))
                // need to trigger re-render here
                }}>Yes (Delete Spot)</button>
            <button className='no' onClick={() => {props.setDeleteMod(false)}}>No (Keep Spot)</button>
        </div>
    );
}
