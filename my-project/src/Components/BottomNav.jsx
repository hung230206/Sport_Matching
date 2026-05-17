import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
    return (
        <div className="bottom-nav">

            <div className="nav-item active">
                <i className="fa-solid fa-house"></i>
                <span>Trang chủ</span>
            </div>

            <div className="nav-item center">
                <div className="add-button">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <span>Tạo bài đăng</span>
            </div>

            <div className="nav-item">
                <i className="fa-regular fa-user"></i>
                <span>Hồ sơ</span>
            </div>

        </div>
    );
};

export default BottomNav;