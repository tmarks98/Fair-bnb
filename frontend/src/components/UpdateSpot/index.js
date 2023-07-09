import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SpotForm from "../Forms/SpotsForm";

export default function UpdateSpot() {
    const {spotId} = useParams();
    const spots = useSelector((state) => state.spots.allSpots)
    const spot = spots[spotId];

    return (
        <div>
            {console.log(spot)}
        <SpotForm spot={spot} />
        </div>
    );
}