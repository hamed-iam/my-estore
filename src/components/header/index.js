import React from 'react';
import './styles.scss';
import Logo from '../../assets/leaf-logo-green-leaves-9b7136f555df2e28f422771599cb0739.png';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Hamed Ghazali" />
        </div>
      </div>
    </header>
  );
};

export default Header;
