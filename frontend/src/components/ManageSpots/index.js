import { useDispatch, useSelector } from 'react-redux'
import SpotPreview from '../SpotPreview/index'
import { thunkGetCurrentSpots } from '../../store/spots'
import { useEffect } from 'react'
import CreateSpotButton from '../Forms/CreateSpotButton'
import './index.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function ManageSpots() {
    const history = useHistory();
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

        <div style={{ justifyContent: "space-between", marginLeft: '50px', marginRight: '50px'}}>
            <h2 style={{height: '10px'}}>Manage Spots</h2>
            <button style={{color: 'white', backgroundColor: 'grey', border: '3px black solid', boxShadow: '2px 1px 2px 1px black'}} onClick={() => history.push("/spots/new")}>Create a New Spot</button>
            <div className='spots'>
                {usersSpots.map((spot) => {
                return <SpotPreview key={spot.id} spot={spot} footer={true}/>})}
            </div>
        </div>
    );
}
