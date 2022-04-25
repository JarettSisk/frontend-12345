import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";
import "./Nav.css";

const Nav = ({ logoutUser }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="Nav-wrapper">
      <nav className="Nav">
        {currentUser ? 
              <>
                <Link to="/">Home</Link>
                <Link to="/companies">companies</Link>
                <Link to="/jobs">jobs</Link>
                <Link to="/profile">profile</Link>
                <Link onClick={logoutUser} to="/">logout</Link>
              </> : 
              <>
                <Link to="/">Home</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">sign up</Link>
              </>
        }
      </nav>
    </div>
  )
}

export default Nav;