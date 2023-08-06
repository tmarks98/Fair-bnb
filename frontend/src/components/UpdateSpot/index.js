import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SpotForm from "../Forms/SpotsForm";

export default function UpdateSpot() {
  console.log("1");
  const { spotId } = useParams();
  const spots = useSelector((state) => state.spots.allSpots);
  const spot = spots[spotId];
  console.log("DO I HAVE SPOT? ", spot);

  return (
    <div>
      <SpotForm spot={spot} />
    </div>
  );
}
