import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux'
import React from "react";
import './index.css'

export default function SpotPreview(props) {
    let spot = props.spot;
    const history = useHistory();
    if(!spot) return null;
    let id = spot.id;
    

    
    return (
        <>
        <div className='previewWindow'
        onClick={() => {
            history.push(`/spots/${id}`)
        }}
        title={spot.name}>
        <div className="previewImage"><img src={spot.previewImage} alt="N/A" /></div>
        <div className='previews'>
        <div className="location">
        <p>{spot.city}</p>
        <p>{spot.state}</p>
        </div>
        <p>rating: {spot.avgRating}</p>
        </div>   
        <p>${spot.price} night</p>
        </div>
        </>
    );
}

