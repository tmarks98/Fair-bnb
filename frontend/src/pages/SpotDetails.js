// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { thunkGetSpot } from '../store/spots';
import './LandingPage.css'
import SpotInfo from '../components/SpotInfo';
import { useParams } from 'react-router-dom';

const SpotDetails = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams()

    useEffect(() => {
        dispatch(thunkGetSpot(spotId))
    }, [dispatch, spotId])
    const spot = useSelector((state) => state.spots.singleSpot)
    return (
        <>
            <SpotInfo spot={spot}/>
        </>
    );
}
export default SpotDetails