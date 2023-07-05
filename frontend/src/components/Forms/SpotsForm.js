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
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newSpot = { 
            address,
            city,
            state,
            country,
            name,
            description,
            price,
        }

        const images = [
            
        ]

        dispatch(thunkCreateSpot(newSpot))
    }
    

    return (
    <div>
        <div className='title'>
            <h2>Create a new Spot</h2>
            <h3>Where's your place located?</h3>
            <p>Guests will only get your exact address once they booked a reservation.</p>
        </div>
        <form onSubmit={handleSubmit} className="createForm"></form>
        <div className="form">
            <label>
                <div>Country</div>
                <input 
                type="text"
                value={country}
                onChange={((e) => setCountry(e.target.value))}
                />
            </label> 

            <label>
                <div>Address</div>
                <input
                type="text"
                value={address}
                onChange={((e) => setAddress(e.target.value))}
                />
            </label> 

            <label>
                <div>City</div>
                <input
                type="text"
                value={city}
                onChange={((e) => setCity(e.target.value))}
                />
            </label> 

            <label>
                <div>state</div>
                <input
                type="text"
                value={state}
                onChange={((e) => setState(e.target.value))}
                />
            </label> 
            <div></div>
            <label>
                <div>
                    <h2>Describe your place to guests</h2>
                    <p>Mention the best features of your space, any special amentities like fast wif or parking, and what you love about the neighborhood.</p>
                </div>
                <textarea />  
            </label>
            <label>
                <div>
                    <h2>Create a title for your spot</h2>
                    <p>Catch guests' attention with a spot title that highlights what make your place special.</p>
                </div>
                <input
                type="text"
                value={name}
                onChange={((e) => setName(e.target.value))}
                />
            </label> 
            <label>
                <div>
                    <h2>Set a base price for your spot</h2>
                    <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
                </div>
                <p>$ <input
                type="text"
                value={price}
                onChange={((e) => setPrice(e.target.value))}
                /></p>
            </label> 
            <label>
                <div>
                    <h2>Liven up your spot with photos</h2>
                    <p>Submit a link to at least one photo to publish your spot.</p>
                </div>
                <input
                type="text"
                value={country}
                onChange={((e) => setCountry(e.target.value))}
                />
            </label>
            <button className='submitButton'>Create Spot</button>
        </div>
    </div>
    );
}

export default SpotForm

