import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPopup from './LoginPopup';
import './Header.css';

const Header = () => {
  const [authType, setAuthType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false); 
    setUserName(''); 
  };

  return (
    <header className="main-header"> 
      <div className="header-container">
        
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="header-logo">
            <div className="logo-icon">H</div>
            <span className="brand-name">Sports Matching</span>
          </div>
        </Link>

        {isLoggedIn ? (
          
          
          <div className="user-menu-container">
            
            <button 
              className="user-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="user-avatar">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="user-name">{userName}</span>
              <span className="dropdown-arrow">▼</span>
            </button>

            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                   Hồ sơ cá nhân
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item btn-logout" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </div>
            )}
          </div>

        ) : (
          
          
          <div className="header-auth">
            <button className="btn-auth btn-login" onClick={() => setAuthType('login')}>Đăng nhập</button>
            <button className="btn-auth btn-register" onClick={() => setAuthType('register')}>Đăng ký</button>
          </div>

        )}

      </div>
      
      <LoginPopup 
        isOpen={authType !== null} 
        initialView={authType} 
        onClose={() => setAuthType(null)} 
        onLoginSuccess={(name) => {
          setIsLoggedIn(true);
          setUserName(name);
          setAuthType(null); 
        }}
      />
    </header>
  );
};

export default Header;