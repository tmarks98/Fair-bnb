import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkCreateSpot } from '../../store/spots';

function SpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState(90);
    const [lng, setLng] = useState(180);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newState = { country, address, city, state, lat, lng, description, name, price}
        const newSpot = await dispatch(thunkCreateSpot(newState))
    }
    

    return (
    <>
    <p>hi</p>
    </>
    );
}

export default SpotForm

