import { useHistory } from "react-router-dom";
import './CreateSpotButton.css'
export default function CreateSpotButton() {;
    let history = useHistory();


    return (
        <h2 className='createSpot' onClick={() => history.push('/spots/new')}>Create a New Spot</h2>
    );
}