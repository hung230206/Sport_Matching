import React from "react";
import './PostCard.css'
import '../App.css'
const PostCard = () => {
        const postData = {
        

            sport: "Bóng đá sân 5",
            host: {
                name: "Ronaldo",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
                verified: true,
            },
            spotsLeft: 2,
            date: "21/05 Thứ Tư",
            time: "14:00",
            location: "Quán bar Sky Net",
            requirements: ["18+", "Nữ", "Chơi khá"],
            contact: "12472374",
        };
        return (
            <div className="post-card">
                <div className="post-info">
                    <div className="sport-tag"> <i
        className="fa-regular fa-futbol"
        style={{ color: "#0d9467" }}
    ></i> {postData.sport}</div>
                    <div className="spots-left"><i className="fa-solid fa-user-group"></i> Số lượng còn lại: {postData.spotsLeft}</div>
                    <div className="date"><i className="fa-regular fa-calendar"></i> Ngày đá: <span className="data-Value"> {postData.date}</span></div>
                    <div className="time"><i className="fa-regular fa-clock"></i> Thời gian: <span className="data-Value">{postData.time }</span> </div>
                    <div className="location"><i className="fa-solid fa-location-dot"></i> Địa điểm: <span className="data-Value">{postData.location}</span></div>
                    <div className="requirements"><i class="fa-solid fa-user"></i> <p className="trich-lo">.</p>
                        <div className="requirements-list">
                            <span> Yêu cầu: </span>
                                {postData.requirements.map((item, index) => (
                                <span key={index} className="requirement-item">
                                    {item}
                                </span>
                                ))}
                            </div>
                    </div>
                    <div className="contact"><i className="fa-solid fa-phone"></i> Liên hệ: <span className="data-Value">{postData.contact}</span></div>
                </div>
                <button className="post-card-btn">Tham gia</button>
                <div className="post-user-info">
                    <div className="post-user-avt"><img className="avt-img" src={postData.host.avatar} alt="avatar" /></div>
                    <div className="post-user-content">
                        <div className="post-user-name">{postData.host.name}</div>
                        <div className="post-user-verified">
                            {postData.host.verified && "Đã xác thực"}
                            </div>
                    </div>
                </div>

            </div>
        );
};
export default PostCard;