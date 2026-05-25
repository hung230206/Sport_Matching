import React from "react";
import "./Notification.css";

const notifications = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    message: "đã tham gia kèo sân 7 của bạn",
    time: "2 phút trước",
    avatar:
      "https://i.pravatar.cc/150?img=11",
    unread: true,
    type: "join",
  },
  {
    id: 2,
    name: "Trần Minh",
    message: "gửi yêu cầu tham gia trận đấu",
    time: "10 phút trước",
    avatar:
      "https://i.pravatar.cc/150?img=12",
    unread: true,
    type: "request",
  },
  {
    id: 3,
    name: "Lê Hoàng",
    message: "đã chấp nhận tham gia trận đấu",
    time: "25 phút trước",
    avatar:
      "https://i.pravatar.cc/150?img=13",
    unread: false,
    type: "accept",
  },
  {
    id: 4,
    name: "Phạm Đức",
    message: "đã gửi tin nhắn cho bạn",
    time: "1 giờ trước",
    avatar:
      "https://i.pravatar.cc/150?img=14",
    unread: false,
    type: "message",
  },
];

const Notification = () => {
  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>🔔 Thông báo</h2>

        <button>Đánh dấu đã đọc</button>
      </div>

      <div className="notification-list">
        {notifications.map((item) => (
          <div
            className={`notification-card ${
              item.unread ? "unread" : ""
            }`}
            key={item.id}
          >
            <div className="left">
              <img
                src={item.avatar}
                alt=""
                className="avatar"
              />

              <div className="notification-content">
                <p>
                  <strong>{item.name}</strong>{" "}
                  {item.message}
                </p>

                <span>{item.time}</span>
              </div>
            </div>

            {item.unread && (
              <div className="dot"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;