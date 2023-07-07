import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreateSpotButton from '../Forms/CreateSpotButton';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul>
      <div className="navbar">
        <div>
          <h2 className='logo' onClick={() => history.push('/')}><img className='logoImage'src="https://i.ibb.co/jgZzfcH/letter-m-10136703.png" alt="" />million-airbnb</h2>
          </div>
      <div className="nav">
      {sessionUser && <CreateSpotButton />}
      {isLoaded && (
          <ProfileButton user={sessionUser} />
      )}
      </div>
      </div>
      <hr />
    </ul>
  );
}

export default Navigation;