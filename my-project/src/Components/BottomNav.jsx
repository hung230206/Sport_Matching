import React from "react";
import "./BottomNav.css";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-item">
                <i className="fa-solid fa-house"></i>
                
                <span>Trang chủ</span>
                
            </div>
            </Link>
            <Link to="/createpost" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-item center">
                <div className="add-button">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <span>Tạo bài đăng</span>
            </div>
            </Link>
            <Link to="/notification" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-item center">
                <div className="add-button">
                    <i className="fa-regular fa-bell"></i>
                </div>
                <span>Thông báo</span>
            </div>
            </Link>
            <Link to="/proflie" style={{ textDecoration: 'none', color: 'inherit' }}>

            <div className="nav-item">
                <i className="fa-regular fa-user"></i>
                <span>Hồ sơ</span>
            </div>
            </Link>

        </div>
    );
};

export default BottomNav;