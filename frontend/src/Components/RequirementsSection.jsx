import React from 'react';

const RequirementsSection = ({ ageRequirement, setAgeRequirement, skillLevel, setSkillLevel, gender, setGender }) => {
    return (
        <div className="section-card">
            <h2 className="text-h2 section-title">
                <i className="fa-regular fa-clipboard icon-green"></i>
                Yêu cầu
            </h2>
            <div className="requirements-group">
                {/* Dòng 1: Độ tuổi */}
                <div className="req-row">
                    <div className="req-label-side">
                        <i className="fa-regular fa-user icon-green"></i>
                        <span>Độ tuổi</span>
                    </div>
                    <div className="req-select-wrapper">
                        <select
                            className="req-select"
                            value={ageRequirement}
                            onChange={(e) => setAgeRequirement(e.target.value)}
                        >
                            <option value="">Chọn độ tuổi</option>
                            <option value="Dưới 18">Dưới 18 tuổi</option>
                            <option value="18-30">18 - 30 tuổi</option>
                            <option value="Trên 30">Trên 30 tuổi</option>
                            <option value="Mọi độ tuổi">Mọi độ tuổi</option>
                        </select>
                        <i className="fa-solid fa-chevron-down select-arrow"></i>
                    </div>
                </div>

                {/* Dòng 2: Trình độ */}
                <div className="req-row">
                    <div className="req-label-side">
                        <i className="fa-solid fa-chart-simple icon-green"></i>
                        <span>Trình độ</span>
                    </div>
                    <div className="req-select-wrapper">
                        <select
                            className="req-select"
                            value={skillLevel}
                            onChange={(e) => setSkillLevel(e.target.value)}
                        >
                            <option value="">Chọn trình độ</option>
                            <option value="Yêu">Mới chơi / Yếu</option>
                            <option value="Trung bình">Trung bình</option>
                            <option value="Khá">Khá / Đá phủi</option>
                            <option value="Cứng">Cứng / Chuyên nghiệp</option>
                        </select>
                        <i className="fa-solid fa-chevron-down select-arrow"></i>
                    </div>
                </div>

                {/* Dòng 3: Giới tính dạng nút Capsule (Ảnh 1) */}
                <div className="req-row no-border">
                    <div className="req-label-side">
                        <i className="fa-solid fa-mars-stroke-up icon-green"></i>
                        <span>Giới tính</span>
                    </div>
                    <div className="req-input-side gender-tabs">
                        {['Nam', 'Nữ', 'Không yêu cầu'].map((item) => (
                            <button
                                key={item}
                                type="button"
                                className={`gender-btn ${gender === item ? 'active' : ''}`}
                                onClick={() => setGender(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequirementsSection;