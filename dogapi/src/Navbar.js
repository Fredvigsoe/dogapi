import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showBreedsDropdown, setShowBreedsDropdown] = useState(false);

  const toggleBreedsDropdown = () => {
    setShowBreedsDropdown(!showBreedsDropdown);
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
        <Link to="/random-dogs" className="navbar-link">Random Dogs</Link>
        </li>
        <li className='navbar-item' onClick={toggleBreedsDropdown}>
          <span className="navbar-link breeds-dropdown">Breeds</span>
          {showBreedsDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/alaskan-husky" className='dropdown-link'>Alaskan Husky</Link>
              </li>
              <li>
                <Link to="/shiba-inu" className='dropdown-link'>Shiba Inu</Link>
              </li>
              <li>
                <Link to="/affenpinscher" className='dropdown-link'>Affenpinscher</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

