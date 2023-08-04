// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { thunkGetAllSpots } from "../store/spots";
import SpotPreview from "../components/SpotPreview/index";
// import SpotForm from '../components/Forms/SpotsForm';
import "./LandingPage.css";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetAllSpots());
  }, [dispatch]);

  const spots = useSelector((state) => Object.values(state.spots.allSpots));
  return (
    <div style={{ justifyContent: "space-between", marginLeft: '50px', marginRight: '50px'}}>
      <div className="gridContainer" style={{marginTop: '25px'}}>
        {spots.map((spot, ele) => {
          return <SpotPreview key={ele} spot={spot} />;
        })}
      </div>
    </div>
  );
};
export default LandingPage;
