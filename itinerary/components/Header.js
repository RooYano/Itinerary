import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1>Plan Your Next Trip!</h1>
        <hr />
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            Settings
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add Book
          </NavLink>
        </div>
      </header>
    );
  };
  
  export default Header;