import "./Profile.css";
import {
  FiArrowLeft,
  FiMapPin,
  FiUser,
  FiTarget,
  FiBarChart2,
  FiShield,
  FiShare2,
  FiEdit2,
} from "react-icons/fi";
import { FaVenusMars } from "react-icons/fa";

function Profile() {
  const user = {
    name: "Khanh",
    age: 21,
    gender: "Nam",
    height: "175 cm",
    position: "Tiền đạo",
    level: "Khá",
    location: "Cần Thơ, Việt Nam",
  };

  return (
    <div className="profile-page">
      {/* HEADER */}
      <div className="profile-banner">
        <button className="icon-btn left">
          <FiArrowLeft />
        </button>
      </div>

      {/* CARD */}
      <div className="profile-card">
        {/* AVATAR */}
        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="avatar"
          />
          <div className="online-dot"></div>
        </div>

        {/* NAME */}
        <h1 className="name">
          {user.name} <span>✔</span>
        </h1>

        <p className="position">
          {user.position} • Sân 5
        </p>

        {/* LOCATION */}
        <div className="location">
          <FiMapPin />
          <span>{user.location}</span>
        </div>

        {/* INTRO */}
        <div className="intro">
          Đam mê bóng đá, luôn cố gắng hết mình
          trong mọi trận đấu.
        </div>

        {/* INFO */}
        <div className="info-box">
          <h3>Thông tin cá nhân</h3>

          <div className="info-item">
            <div className="left-info">
              <FiUser />
              <span>Tuổi</span>
            </div>
            <p>{user.age}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <FaVenusMars />
              <span>Giới tính</span>
            </div>
            <p>{user.gender}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <FiBarChart2 />
              <span>Chiều cao</span>
            </div>
            <p>{user.height}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <FiTarget />
              <span>Vị trí sở trường</span>
            </div>
            <p>{user.position}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <FiBarChart2 />
              <span>Trình độ</span>
            </div>
            <p>{user.level}</p>
          </div>
        </div>

        {/* RATING */}
        <div className="rating-wrapper">
          <div className="rating-card">
            <h4>Đánh giá</h4>
            <div className="score">
              ⭐ 4.7
            </div>
            <p>28 đánh giá</p>
          </div>

          <div className="rating-card">
            <h4>Độ uy tín</h4>
            <div className="score green">
              <FiShield />
              4.8
            </div>
            <p>Rất đáng tin cậy</p>
          </div>
        </div>

        {/* TAG */}
        <div className="tags">
          <span>Nhiệt huyết</span>
          <span>Dứt điểm tốt</span>
          <span>Chơi fair-play</span>
          <span>Hỗ trợ đồng đội</span>
        </div>

        {/* BUTTON */}
        <button className="edit-btn">
          <FiEdit2 />
          Chỉnh sửa hồ sơ
        </button>

        <button className="share-btn">
          <FiShare2 />
          Chia sẻ hồ sơ
        </button>
      </div>
    </div>
  );
}

export default Profile; 