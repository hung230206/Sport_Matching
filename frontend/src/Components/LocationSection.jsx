import React from 'react';

const LocationSection = ({ location, setLocation }) => {
    return (
        <div className="section-card">
            <h2 className="text-h2 section-title">
                <i className="fa-solid fa-location-dot icon-green"></i>
                Địa điểm
            </h2>
            <div className="location-flex-row">
                <input
                    type="text"
                    className="location-pure-input"
                    placeholder="Nhập địa điểm (VD: Sân quận đội, Huỳnh Châu, Ctu...)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button 
                    type="button" 
                    className="gps-standalone-btn" 
                    onClick={() => alert('Tính năng định vị GPS sẽ được xử lý khi kết nối API bản đồ nhé!')}
                > 
                    <i className="fa-solid fa-crosshairs"></i>
                </button>
            </div>
        </div>
    );
};

export default LocationSection;