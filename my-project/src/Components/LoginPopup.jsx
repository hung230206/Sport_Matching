import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './LoginPopup.css'; // Dùng chung 1 file CSS này là đủ

// Thêm prop initialView để Header biết nên mở form nào trước
const LoginPopup = ({ isOpen, onClose, initialView = 'login' }) => {
  const [view, setView] = useState(initialView); 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Mở popup lên thì set view theo prop truyền vào
      setView(initialView); 
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  return createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="btn-close-popup" onClick={onClose}>✕</button>
        
        {/* ĐỔI TIÊU ĐỀ DỰA THEO VIEW */}
        <h2 className="popup-title">
          {view === 'login' && 'Đăng nhập'}
          {view === 'forgot' && 'Quên mật khẩu'}
          {view === 'register' && 'Đăng ký tài khoản'}
        </h2>
        
        {/* 1. FORM ĐĂNG NHẬP */}
        {view === 'login' && (
          <form onSubmit={(e) => e.preventDefault()}>
            <input className="popup-input" type="email" placeholder="Email" autoFocus required />
            <input className="popup-input" type="password" placeholder="Mật khẩu" required />
            
            <div style={{ textAlign: 'right', marginBottom: '16px' }}>
              <button 
                type="button" 
                style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontSize: '14px' }}
                onClick={() => setView('forgot')}
              >
                Quên mật khẩu?
              </button>
            </div>

            <button type="submit" className="btn-submit-popup">
              Đăng nhập
            </button>

            {/* Chuyển sang Đăng ký */}
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px' }}>
              Chưa có tài khoản?{' '}
              <span 
                style={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}
                onClick={() => setView('register')}
              >
                Đăng ký ngay
              </span>
            </p>
          </form>
        )}

        {/* 2. FORM QUÊN MẬT KHẨU */}
        {view === 'forgot' && (
          <form onSubmit={(e) => e.preventDefault()}>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', textAlign: 'center' }}>
              Nhập email của bạn, chúng tôi sẽ gửi link đặt lại mật khẩu.
            </p>
            <input className="popup-input" type="email" placeholder="Nhập email của bạn..." autoFocus required />
            
            <button type="submit" className="btn-submit-popup" style={{ marginBottom: '12px' }}>
              Gửi link khôi phục
            </button>
            
            <button 
              type="button" 
              style={{ width: '100%', background: 'none', border: '1px solid #ddd', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
              onClick={() => setView('login')}
            >
              Quay lại Đăng nhập
            </button>
          </form>
        )}

        {/* 3. FORM ĐĂNG KÝ (Dùng lại y chang các class CSS) */}
        {view === 'register' && (
          <form onSubmit={(e) => e.preventDefault()}>
            <input className="popup-input" type="text" placeholder="Họ và tên" autoFocus required />
            <input className="popup-input" type="email" placeholder="Email" required />
            <input className="popup-input" type="password" placeholder="Mật khẩu" required />
            <input className="popup-input" type="password" placeholder="Xác nhận mật khẩu" required />
            
            <button type="submit" className="btn-submit-popup">
              Đăng ký
            </button>

            {/* Chuyển về Đăng nhập */}
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px' }}>
              Đã có tài khoản?{' '}
              <span 
                style={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}
                onClick={() => setView('login')}
              >
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