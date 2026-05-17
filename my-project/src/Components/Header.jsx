import { useState } from 'react';
import './Header.css';

const Header = () => {
  return (
    <header> 
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">H</div>
          <span className="brand-name">Sports Matching</span>
        </div>

        <div className="header-auth">
          <button className="btn-auth btn-login">Đăng nhập</button>
          <button className="btn-auth btn-register">Đăng ký</button>
        </div>
      </div>
    </header>
  );
};
export default Header;