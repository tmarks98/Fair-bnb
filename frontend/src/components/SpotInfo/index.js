import './index.css'
import ReserveButton from './reserveButton';

export default function SpotInfo(props) {
    const spot = props.spot
    if(!spot) return null
    return (
        <>
        <div>
            <h2>{spot.name}</h2>
            <p>{spot.city}, {spot.state}, {spot.country}</p>
        </div>
        {spot.SpotImages&&(<div className="allImage">
        <div className="bigImage">
            {spot.SpotImages[0]&&(<img src={spot.SpotImages[0].url} alt=''></img>)}
        </div>
        <div className="smallImages">
        {spot.SpotImages[1]&&(<img src={spot.SpotImages[1].url} alt=''></img>)}
        {spot.SpotImages[2]&&(<img src={spot.SpotImages[2].url} alt=''></img>)}
        {spot.SpotImages[3]&&(<img src={spot.SpotImages[3].url} alt=''></img>)}
        {spot.SpotImages[4]&&(<img src={spot.SpotImages[4].url} alt=''></img>)}
        </div>
        </div>
        )}
        <div className="description">
        <div className="descriptionTitle">
        {spot.Owner && (
            <h3>Hosted by {spot.Owner.firstName}</h3>
            )}
        <p>Spot description</p>
        <p>Spot description</p>
        <p>Spot description</p>
        </div>
        <ReserveButton spot={spot}/>
        </div>
        </>
    );
}