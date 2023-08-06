import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import CreateSpot from "./pages/CreateSpot";
import ManageSpots from "./components/ManageSpots";
import UpdateSpot from "./components/UpdateSpot";
import { thunkGetAllSpots } from "./store/spots";
import SpotInfo from "./components/SpotInfo";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  let path = location.pathname;
  let isSpot =
    path !== "/" && path !== "/spots/new" && path !== "/spots/current";
  const [inSpot, setInSpot] = useState(isSpot);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} inSpot={inSpot} />
      {isLoaded && (
        <Switch>
          <Route exact path={"/"}>
            <LandingPage />
          </Route>
          <Route path={"/spots/new"}>
            <CreateSpot />
          </Route>
          <Route path={"/spots/current"}>
            <ManageSpots />
          </Route>
          <Route path={"/edit/edit/:spotId"}>
            <UpdateSpot />
          </Route>
          <Route path={"/spots/:spotId"}>
            <SpotInfo />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
