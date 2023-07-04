// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { thunkGetAllSpots } from '../store/spots';
import SpotPreview from '../components/SpotPreview/index'
// import SpotForm from '../components/Forms/SpotsForm';
import './LandingPage.css'

const LandingPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetAllSpots())
    }, [dispatch])
    const spots = useSelector((state) => Object.values(state.spots.allSpots))
    return (
        <>
        <div className='gridContainer'>
        {spots.map((spot, ele) => {
            return <SpotPreview key={ele} spot={spot}/>
        })}
        </div>
        </>
    );
}
export default LandingPage