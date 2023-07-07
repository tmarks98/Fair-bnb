import { useHistory } from 'react-router-dom';
import React from "react";
import './index.css'
import DeleteSpot from '../DeleteSpot';
import { useState } from 'react';

export default function SpotPreview(props) {
    let spot = props.spot;
    let [deleteMod, setDeleteMod] = useState(false)
    const history = useHistory();
    if(!spot) return null;
    let id = spot.id;
    

    
    return (
        <>
        <div>
        <div className='previewWindow'
        onClick={() => {
            history.push(`/spots/${id}`)
        }}
        title={spot.name}>
        <div className="previewImage"><img src={spot.previewImage} alt="N/A" /></div>
        <div className='previews'>
        <div className="location">
        <p>{spot.city}, {spot.state}</p>
        <p>Owner ID: {spot.ownerId}</p>
        </div>
        <p>rating: {spot.avgRating}</p>
        </div>   
        <p>${spot.price}/night</p>
        </div>
        <button onClick={() => {setDeleteMod(true)}}>Delete</button>
        {deleteMod ? (<DeleteSpot spot={spot} setDeleteMod={setDeleteMod}/>) : null}
        </div>
        </>
    );
}

