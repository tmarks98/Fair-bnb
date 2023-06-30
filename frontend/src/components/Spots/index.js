import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpots } from '../../store/spots';

export default function GetAllSpots() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])

    const allSpots = useSelector(state => state.spots)
    
    const spots = Object.values(allSpots)
    
    console.log("all spots data", allSpots)
    return (
        <>
        <h2>hi</h2>        
        </>
    );
}

