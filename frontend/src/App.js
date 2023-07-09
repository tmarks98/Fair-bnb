import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from './pages/LandingPage'
import SpotDetails from "./pages/SpotDetails";
import CreateSpot from "./pages/CreateSpot";
import ManageSpots from "./components/ManageSpots";
import UpdateSpot from "./components/UpdateSpot";
import { thunkGetAllSpots } from "./store/spots";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunkGetAllSpots())
}, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch>
        <Route exact path={'/'}>
        <LandingPage />
        </Route>
        <Route eaxct path={'/spots/new'}>
        <CreateSpot />
        </Route>
        <Route exact path={'/spots/current'}>
          <ManageSpots />
        </Route>
        <Route exact path={'/spots/:spotId/edit'}>
          <UpdateSpot />
        </Route>
        <Route exact path={'/spots/:spotId'}>
        <SpotDetails />
        </Route>
        </Switch>}
    </>
  );
}

export default App;
