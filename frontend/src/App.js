import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from './pages/LandingPage'
import SpotDetails from "./pages/SpotDetails";
// import SpotForm from "./components/Forms/SpotsForm";
import CreateSpot from "./pages/CreateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

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
        <Route exact path={'/spots/:spotId'}>
        <SpotDetails />
        </Route>
        </Switch>}
    </>
  );
}

export default App;
