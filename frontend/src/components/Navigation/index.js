import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreateSpotButton from '../Forms/CreateSpotButton';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul>
      <li>
        <div className="logo">
          {/* <img src="https://i.ibb.co/jgZzfcH/letter-m-10136703.png" alt="" /> */}
          <NavLink exact to="/">million-airbnb</NavLink>
          </div>
      </li>
      <CreateSpotButton />
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
}

export default Navigation;