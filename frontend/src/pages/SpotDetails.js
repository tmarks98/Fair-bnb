// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { thunkGetSpot } from "../store/spots";
import "./LandingPage.css";
import SpotInfo from "../components/SpotInfo";
import { useParams } from "react-router-dom";
import { useState, Spinner } from "react";

const SpotDetails = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const [inFlight, setInFlight] = useState(true);

  useEffect(() => {
    setInFlight(true);
    dispatch(thunkGetSpot(spotId)).then(() => {
      setInFlight(false);
    });
  }, [dispatch, spotId]);
  const spot = useSelector((state) => state?.spots?.singleSpot);
  console.log(spot);
  return (
    <>
      {inFlight ? (
        <React.Suspense fallback={<Spinner />} />
      ) : (
        <SpotInfo spot={spot} />
      )}
    </>
  );
};
export default SpotDetails;
