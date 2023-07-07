import { useSelector } from 'react-redux'
import SpotPreview from '../SpotPreview/index'
import { thunkCreateSpot } from '../../store/spots'


export default function ManageSpots() {
    const spots  = useSelector((state) => Object.values(state.spots.allSpots))
    const user = useSelector((state) => state.session.user)
    const usersSpots = spots.filter((spot) => {
        return spot && (spot.ownerId === user.id)
    })
    return (
        <div>
            <h2>Manage Your Spots</h2>
            
            <div className='spots'>
                {usersSpots.map((spot) => {
                return <SpotPreview spot={spot} />})};
            </div>
        </div>
    );
}