import React from 'react';

const PitchTypeSection = ({ selectedPitch, setSelectedPitch }) => {
    return (
        <div className="section-card">
            <h2 className="text-h2 section-title">
                <i className="fa-regular fa-file-lines icon-green"></i>
                Loại sân
            </h2>
            <div className="pitch-options">
                {[5, 7, 11].map((type) => (
                    <button
                        key={type}
                        type="button"
                        className={`pitch-btn ${selectedPitch === type ? 'active' : ''}`}
                        onClick={() => setSelectedPitch(type)}
                    >
                        <div className="pitch-icon-box">
                            <i className="fa-solid fa-soccer-ball"></i>
                        </div>
                        <span>Sân {type}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PitchTypeSection;