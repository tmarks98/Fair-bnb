import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateSpot, thunkUpdateSpot } from "../../store/spots";
import "./SpotsForm.css";
import { useSelector } from "react-redux";

function SpotForm({ spot }) {
  const dispatch = useDispatch();
  const history = useHistory(); //
  const [address, setAddress] = useState(spot?.address ?? "");
  const [city, setCity] = useState(spot?.city ?? "");
  const [state, setState] = useState(spot?.state ?? "");
  const [country, setCountry] = useState(spot?.country ?? "");
  const [name, setName] = useState(spot?.name ?? "");
  const [description, setDescription] = useState(spot?.description ?? "");
  const [price, setPrice] = useState(spot?.price ?? "");
  const [lng, setLng] = useState(90);
  const [lat, setLat] = useState(90);
  const [previewImages, setPreviewImages] = useState(spot?.previewImages ?? "");
  const [previewImages2, setPreviewImages2] = useState(
    spot?.previewImages2 ?? ""
  );
  const [previewImages3, setPreviewImages3] = useState(
    spot?.previewImages3 ?? ""
  );
  const [previewImages4, setPreviewImages4] = useState(
    spot?.previewImages4 ?? ""
  );
  const [previewImages5, setPreviewImages5] = useState(
    spot?.previewImages5 ?? ""
  );
  const [errors, setErrors] = useState({});
  const ifExist = spot != null;
  const dispatchedSpots = useSelector((state) => state.spots.singleSpot);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSpot = {
      ...spot,
      address,
      city,
      state,
      country,
      name,
      description,
      price,
      lng,
      lat,
    };

    console.log("spot about to subbmit: ", newSpot);

    const images = [
      previewImages,
      previewImages2,
      previewImages3,
      previewImages4,
      previewImages5,
    ];
    //async await or .then with a catch
    //save the res of dispatch to check for err, historypush if no error, call seterrors
    if (ifExist) {
      dispatch(thunkUpdateSpot(newSpot)).then(() =>
        history.push(`/spots/${spot.id}`)
      );
    } else {
      dispatch(thunkCreateSpot(newSpot, images)).then((id) => {
        history.push(`/spots/${id}`);
      });
    }
  };

  function validFileType(str) {
    let hasOne = false;
    if (str.indexOf(".jpg") !== -1) {
      hasOne = true;
    }
    if (str.indexOf(".jpeg") !== -1) {
      hasOne = true;
    }
    if (str.indexOf(".png") !== -1) {
      hasOne = true;
    }
    return hasOne;
  }

  useEffect(() => {
    let err = {};
    if (!country.length) {
      err.country = "Country is required";
    }
    if (!address.length) {
      err.address = "Address is required";
    }
    if (!city.length) {
      err.city = "City is required";
    }
    if (!state.length) {
      err.state = "State is required";
    }
    if (description.length < 30) {
      err.description = "Description needs 30 or more characters";
    }
    if (!name.length) {
      err.name = "Name is required";
    }
    if (!price.length) {
      err.price = "Price is required";
    }
    if (!validFileType(previewImages)) {
      err.previewImages = "Preview image is required.";
    }
    if (!validFileType(previewImages2)) {
      err.previewImages2 = "Image URL must end in .png, .jpg, or .jpeg";
    }
    if (!validFileType(previewImages3)) {
      err.previewImages3 = "Image URL must end in .png, .jpg, or .jpeg";
    }
    if (!validFileType(previewImages4)) {
      err.previewImages4 = "Image URL must end in .png, .jpg, or .jpeg";
    }
    if (!validFileType(previewImages5)) {
      err.previewImages5 = "Image URL must end in .png, .jpg, or .jpeg";
    }

    setErrors(err);
  }, [
    country,
    address,
    city,
    state,
    description,
    name,
    price,
    previewImages,
    previewImages2,
    previewImages3,
    previewImages4,
    previewImages5,
  ]);

  return (
    <div className="page">
      <div className="title">
        <h2>Create a new Spot</h2>
        <h3>Where's your place located?</h3>
        <p>
          Guests will only get your exact address once they booked a
          reservation.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="createForm">
        <div className="form">
          <label>
            <div>Country</div>
            <input
              placeholder="Country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <div className="errors">{errors.country}</div>
          </label>

          <label>
            <div>Address</div>
            <input
              placeholder="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="errors">{errors.address}</div>
          </label>

          <label>
            <div>City</div>
            <input
              placeholder="City"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="errors">{errors.city}</div>
          </label>

          <label>
            <div>State</div>
            <input
              placeholder="STATE"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <div className="errors">{errors.state}</div>
          </label>
          <div>
            <label>
              <div className="description">
                <h2>Describe your place to guests</h2>
                <p>
                  Mention the best features of your space, any special
                  amentities like fast wif or parking, and what you love about
                  the neighborhood.
                </p>
              </div>
              <textarea
                placeholder="Please write at least 30 characters"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="errors">{errors.description}</div>
            </label>
          </div>
          <label>
            <div>
              <h2>Create a title for your spot</h2>
              <p>
                Catch guests' attention with a spot title that highlights what
                make your place special.
              </p>
            </div>
            <input
              placeholder="Name of your spot"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="errors">{errors.name}</div>
          </label>
          <label>
            <div>
              <h2>Set a base price for your spot</h2>
              <p>
                Competitive pricing can help your listing stand out and rank
                higher in search results.
              </p>
            </div>
            $
            <input
              placeholder="Price per night (USD)"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="errors">{errors.price}</div>
          </label>
          <label>
            <div>
              <h2>Liven up your spot with photos</h2>
              <p>Submit a link to at least one photo to publish your spot.</p>
            </div>
            <div className="previewImages">
              <input
                placeholder="Preview Image URL"
                type="text"
                value={previewImages}
                onChange={(e) => setPreviewImages(e.target.value)}
              />
              <div className="errors">{errors.previewImages}</div>
              <input
                placeholder="Image URL"
                type="text"
                value={previewImages2}
                onChange={(e) => setPreviewImages2(e.target.value)}
              />
              <div className="errors">{errors.previewImages2}</div>
              <input
                placeholder="Image URL"
                type="text"
                value={previewImages3}
                onChange={(e) => setPreviewImages3(e.target.value)}
              />
              <div className="errors">{errors.previewImages3}</div>
              <input
                placeholder="Image URL"
                type="text"
                value={previewImages4}
                onChange={(e) => setPreviewImages4(e.target.value)}
              />
              <div className="errors">{errors.previewImages4}</div>
              <input
                placeholder="Image URL"
                type="text"
                value={previewImages5}
                onChange={(e) => setPreviewImages5(e.target.value)}
              />
              <div className="errors">{errors.previewImages5}</div>
            </div>
          </label>
          <button type="submit" className="submitButton">
            Create Spot
          </button>
        </div>
      </form>
    </div>
  );
}

export default SpotForm;
