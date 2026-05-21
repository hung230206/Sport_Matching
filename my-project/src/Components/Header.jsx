import { useState } from 'react';
import './Header.css';
import LoginPopup from '../Components/LoginPopup'

const Header = () => {
  const [authType, setAuthType] = useState(null);
  return (
    <header> 
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">H</div>
          <span className="brand-name">Sports Matching</span>
        </div>

        <div className="header-auth">
          <button className="btn-auth btn-login" 
         onClick={() => setAuthType('login')}
          >Đăng nhập</button>
          <button className="btn-auth btn-register"
          onClick={() => setAuthType('register')}
          >Đăng ký</button>
        </div>
      </div>
      <LoginPopup 
        isOpen={authType !== null} 
        initialView={authType}
        onClose={() => setAuthType(null)} 
      />
    </header>
  );
};
export default Header;