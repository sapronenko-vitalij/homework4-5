import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'

 const setIsActive = ({isActive})=> isActive? 'active-link' : ''

const Header = React.memo(({title}) => {
    return (
      <div>
      <div className="header">
        <h1>{title}</h1>
        <NavLink to="/" className={setIsActive}>Home</NavLink>
        <NavLink to="/users" className={setIsActive}>Users</NavLink>
        {/* <NavLink to="/login" className={setIsActive}>LogIn</NavLink> */}

      </div>
      
      </div>
    );
  }
)

  export default Header