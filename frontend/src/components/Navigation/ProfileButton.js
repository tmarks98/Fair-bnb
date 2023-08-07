import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  let history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => Object.values(state.spots.allSpots))
  let isSpotOwner;
  if (sessionUser) isSpotOwner = spots.find((spot) => spot?.ownerId === sessionUser.id);


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push("/");
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div>
      <button className="profileButton" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      <div className="menuArea" style={{width: '100px'}}>
        <ul className={ulClassName} ref={ulRef}>
          {sessionUser ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <li>Hello, {sessionUser.username}</li>
              <li>{sessionUser.email}</li>
              
              {isSpotOwner ? (
                  <li><NavLink to="/spots/current">Manage Spots</NavLink></li>
                ) : (
                  <li><NavLink to="/spots/new">Create a New Spot</NavLink></li>
                )}
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </div>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProfileButton;
