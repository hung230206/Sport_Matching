import React, { useState } from 'react';
import './CreatePost.css';


// Import các component con vừa tách
import PitchTypeSection from '../Components/PitchTypeSection';
import TimePickerSection from '../Components/TimePickerSection';
import LocationSection from '../Components/LocationSection';
import RequirementsSection from '../Components/RequirementsSection';
import BottomNav from '../Components/BottomNav';

const CreatePost = () => {
    const [selectedPitch, setSelectedPitch] = useState(5);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState(''); 
    const [duration, setDuration] = useState('90');      
    const [playerCount, setPlayerCount] = useState('');
    const [location, setLocation] = useState('');
    const [ageRequirement, setAgeRequirement] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [gender, setGender] = useState('Nam'); 
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleIncrement = () => setPlayerCount(prev => prev === '' ? 1 : Number(prev) + 1);
    const handleDecrement = () => playerCount > 0 && setPlayerCount(prev => Number(prev) - 1);

    return (
        
        <div className="create-post-container">
             
            {/* --- PHẦN 1: HEADER --- */}
            <header className="header-nav">
                <button type="button" className="back-btn" onClick={() => window.history.back()}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <div className="header-title-group">
                    <h1>Tạo bài đăng</h1>
                    <p className="text-sub">Điền đầy đủ thông tin để tìm được đối tượng phù hợp</p>
                </div>
            </header>

            {/* --- PHẦN 2: LOẠI SÂN --- */}
            <PitchTypeSection selectedPitch={selectedPitch} setSelectedPitch={setSelectedPitch} />

            {/* --- PHẦN 3: THỜI GIAN --- */}
            <TimePickerSection 
                selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                selectedTime={selectedTime} setSelectedTime={setSelectedTime}
                duration={duration} setDuration={setDuration}
            />

            {/* --- PHẦN 4: SỐ LƯỢNG CẦU THỦ --- */}
            <div className="section-card">
                <h2 className="text-h2 section-title">
                    <i className="fa-solid fa-users icon-green"></i>
                    Số lượng người cần
                </h2>
                <div className="stepper-container">
                    <button type="button" className="stepper-btn" onClick={handleDecrement} disabled={playerCount <= 0 || playerCount === ''}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <input
                        type="number" className="stepper-input" placeholder="Nhập số lượng người"
                        value={playerCount} min="0"
                        onChange={(e) => setPlayerCount(e.target.value === '' ? '' : Number(e.target.value))}
                    />
                    <button 
                    type="button" 
                    className="stepper-btn" 
                    onClick={() => setPlayerCount(prev => (prev === '' ? 1 : Number(prev) + 1))}
                    >
                    <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            {/* --- PHẦN 5: ĐỊA ĐIỂM --- */}
            <LocationSection location={location} setLocation={setLocation} />

            {/* --- PHẦN 6: YÊU CẦU THÊM --- */}
            <RequirementsSection 
                ageRequirement={ageRequirement} setAgeRequirement={setAgeRequirement}
                skillLevel={skillLevel} setSkillLevel={setSkillLevel}
                gender={gender} setGender={setGender}
            />

            {/* --- PHẦN 7: SỐ ĐIỆN THOẠI LIÊN HỆ --- */}
            <div className="section-card">
                <h2 className="text-h2 section-title">
                    <i className="fa-solid fa-phone icon-green"></i>
                    Số điện thoại liên hệ
                </h2>
                <input
                    type="tel" className="phone-single-input" placeholder="Nhập số điện thoại"
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div className="phone-privacy-note">
                    <i className="fa-solid fa-lock"></i>
                    <span>Số điện thoại chỉ hiển thị cho người quan tâm bài đăng</span>
                </div>
            </div>

            {/* --- PHẦN 8: NÚT ĐĂNG BÀI --- */}
            <div className="submit-section">
                <button type="submit" className="submit-btn" onClick={() => alert('Tính năng đăng bài sẽ được xử lý khi kết nối backend nhé!')}>
                    <i className="fa-solid fa-paper-plane"></i>
                    <span>Đăng bài</span>
                </button>
            </div>
            <div style={{ height: '100px', width: '100%' }}></div>
            
        </div>
       
    );
   
};

export default CreatePost;