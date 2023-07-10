import { useDispatch, useSelector } from 'react-redux'
import SpotPreview from '../SpotPreview/index'
import { thunkCreateSpot } from '../../store/spots'
import { thunkGetCurrentSpots } from '../../store/spots'
import { useEffect } from 'react'


export default function ManageSpots() {
    const dispatch = useDispatch()
    const spots  = useSelector((state) => Object.values(state.spots.allSpots))
    const user = useSelector((state) => state.session.user)
    const usersSpots = spots.filter((spot) => {
        return spot && (spot.ownerId === user.id)
    })

    useEffect(() => {
        dispatch(thunkGetCurrentSpots());
    }, [dispatch])
    return (

        <div>
            <h2>Manage Spots</h2>
            <div className='spots'>
                {usersSpots.map((spot) => {
                return <SpotPreview key={spot.id} spot={spot} />})};
            </div>
        </div>
    );
}
