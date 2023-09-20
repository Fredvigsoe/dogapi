import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showBreedsDropdown, setShowBreedsDropdown] = useState(false);

  const toggleBreedsDropdown = () => {
    setShowBreedsDropdown(!showBreedsDropdown);
  };

  return (
    <nav>
      <ul>
        <li>
        <Link to="/random-dogs">Random Dogs</Link>
        </li>
        <li onClick={toggleBreedsDropdown}>
          <span className="dropdown-toggle">Breeds</span>
          {showBreedsDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/alaskan-husky">Alaskan Husky</Link>
              </li>
              <li>
                <Link to="/shiba-inu">Shiba Inu</Link>
              </li>
              <li>
                <Link to="/affenpinscher">Affenpinscher</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
            <Link to="/log-in">Log In</Link>
            <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

