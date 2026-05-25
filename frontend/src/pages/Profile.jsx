import './Profile.css';

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
          <i className="fa-solid fa-arrow-left"></i>
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
          <i className="fa-solid fa-location-dot"></i>
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
              <i className="fa-regular fa-user"></i>
              <span>Tuổi</span>
            </div>
            <p>{user.age}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <i className="fa-solid fa-venus-mars"></i>
              <span>Giới tính</span>
            </div>
            <p>{user.gender}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <i className="fa-solid fa-chart-column"></i>
              <span>Chiều cao</span>
            </div>
            <p>{user.height}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <i className="fa-solid fa-bullseye"></i>
              <span>Vị trí sở trường</span>
            </div>
            <p>{user.position}</p>
          </div>

          <div className="info-item">
            <div className="left-info">
              <i className="fa-solid fa-signal"></i>
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
              <i className="fa-solid fa-shield-halved"></i>
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
          <i className="fa-regular fa-pen-to-square"></i>
          Chỉnh sửa hồ sơ
        </button>

        <button className="share-btn">
          <i className="fa-solid fa-share-nodes"></i>
          Chia sẻ hồ sơ
        </button>
      </div>
    </div>
  );
}

export default Profile;
