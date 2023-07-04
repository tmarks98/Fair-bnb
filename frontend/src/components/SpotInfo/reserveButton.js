 import './reserveButton.css'
 
 export default function ReserveButton(props) {
    const spot = props.spot
    return (
        <>
        <div className='button'>
            <h2>${spot.price}</h2>
            <h2>{}</h2>
            <button>Reserve</button>
        </div>
        </>
    );
 }