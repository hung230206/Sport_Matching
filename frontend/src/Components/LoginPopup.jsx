import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './LoginPopup.css';

const DUMMY_USER = {
  email: 'test@gmail.com',
  password: '123',
  name: 'Nam'
};

const LoginPopup = ({ isOpen, onClose, initialView = 'login', onLoginSuccess }) => {
  const [view, setView] = useState(initialView); 
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setView(initialView);
      setErrorMsg(''); 
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialView]);

  const switchView = (newView) => {
    setView(newView);
    setErrorMsg('');
  };

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    
    const formData = new FormData(e.target);
    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');

    if (emailValue === DUMMY_USER.email && passwordValue === DUMMY_USER.password) {
      setErrorMsg('');
      if (onLoginSuccess) {
        onLoginSuccess(DUMMY_USER.name);
      }
    } else {
      setErrorMsg('Email hoặc mật khẩu không chính xác!');
    }
  };

  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const emailValue = formData.get('email');
    const passwordValue = formData.get('password');
    const confirmPasswordValue = formData.get('confirmPassword');

    if (passwordValue !== confirmPasswordValue) {
      setErrorMsg('Mật khẩu xác nhận không khớp!');
      return;
    }

    if (emailValue === DUMMY_USER.email) {
      setErrorMsg('Email này đã được sử dụng!');
      return;
    }

    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    switchView('login');
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="btn-close-popup" onClick={onClose}>✕</button>
        
        <h2 className="popup-title">
          {view === 'login' && 'Đăng nhập'}
          {view === 'forgot' && 'Quên mật khẩu'}
          {view === 'register' && 'Đăng ký tài khoản'}
        </h2>

        {errorMsg && (
          <div style={{ color: '#dc3545', fontSize: '14px', marginBottom: '15px', textAlign: 'center', backgroundColor: '#fff5f5', padding: '8px', borderRadius: '4px' }}>
            {errorMsg}
          </div>
        )}
        
        {view === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            {/* THÊM name="email" và name="password" */}
            <input name="email" className="popup-input" type="email" placeholder="Email" autoFocus required />
            <input name="password" className="popup-input" type="password" placeholder="Mật khẩu" required />
            
            <div style={{ textAlign: 'right', marginBottom: '16px' }}>
              <button 
                type="button" 
                style={{ background: 'none', border: 'none', color: '#0d9467', cursor: 'pointer', fontSize: '14px' }}
                onClick={() => switchView('forgot')}
              >
                Quên mật khẩu?
              </button>
            </div>

            <button type="submit" className="btn-submit-popup">Đăng nhập</button>

            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px' }}>
              Chưa có tài khoản?{' '}
              <span style={{ color: '#0d9467', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => switchView('register')}>
                Đăng ký ngay
              </span>
            </p>
          </form>
        )}

        {view === 'forgot' && (
          <form onSubmit={(e) => { e.preventDefault(); alert('Đã gửi link khôi phục vào email!'); switchView('login'); }}>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', textAlign: 'center' }}>
              Nhập email của bạn, chúng tôi sẽ gửi link đặt lại mật khẩu.
            </p>
            <input name="email" className="popup-input" type="email" placeholder="Nhập email..." autoFocus required />
            <button type="submit" className="btn-submit-popup" style={{ marginBottom: '12px' }}>Gửi link khôi phục</button>
            <button type="button" style={{ width: '100%', background: 'none', border: '1px solid #ddd', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }} onClick={() => switchView('login')}>
              Quay lại Đăng nhập
            </button>
          </form>
        )}

        {view === 'register' && (
          <form onSubmit={handleRegisterSubmit}>
            {/* THÊM name VÀO CÁC Ô INPUT */}
            <input name="fullname" className="popup-input" type="text" placeholder="Họ và tên" autoFocus required />
            <input name="email" className="popup-input" type="email" placeholder="Email" required />
            <input name="password" className="popup-input" type="password" placeholder="Mật khẩu" required minLength="3" />
            <input name="confirmPassword" className="popup-input" type="password" placeholder="Xác nhận mật khẩu" required minLength="3" />
            <button type="submit" className="btn-submit-popup">Đăng ký</button>
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px' }}>
              Đã có tài khoản?{' '}
              <span style={{ color: '#0d9467', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => switchView('login')}>
                Đăng nhập
              </span>
            </p>
          </form>
        )}
        
      </div>
    </div>,
    document.body
  );
};

export default LoginPopup;