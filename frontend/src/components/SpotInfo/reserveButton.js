 import './reserveButton.css'
 
 export default function ReserveButton(props) {
    const spot = props.spot
    return (
        <>
        <div className='button' style={{display: 'flex', justifyContent: 'right', marginLeft: '900px'}}>
            <h2>${spot.price}</h2>
            <h2><i className="fas fa-star"></i>{spot.avgStarRating} reviews: {spot.numReviews}</h2>
            <button>Reserve</button>
        </div>
        </>
    );
 }