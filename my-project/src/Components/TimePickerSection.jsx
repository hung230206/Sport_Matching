import React from 'react';

const TimePickerSection = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  duration,
  setDuration
}) => {

  const getWeekdayName = (dateString) => {

    if (!dateString) return '';

    const date = new Date(dateString);

    const dayIndex = date.getDay();

    const weekdays = [
      'Chủ Nhật',
      'Thứ Hai',
      'Thứ Ba',
      'Thứ Tư',
      'Thứ Năm',
      'Thứ Sáu',
      'Thứ Bảy'
    ];

    return weekdays[dayIndex];
  };

  return (

    <div className="section-card">

      <h2 className="text-l section-title">
        <i className="fa-regular fa-calendar-days icon-green"></i>

        Thời gian
      </h2>

      <div className="picker-container">

        {/* Ngày đá */}

        <div className="picker-item full-width">

          <label className="text-sub">
            Ngày đá
          </label>

          <div className="input-with-badge">

            <input
              type="date"
              className="time-input"
              value={selectedDate}
              onChange={(e) =>
                setSelectedDate(e.target.value)
              }
            />

            {selectedDate && (

              <span className="weekday-badge">
                {getWeekdayName(selectedDate)}
              </span>

            )}

          </div>

        </div>

        {/* Giờ đá + Thời lượng */}

        <div className="picker-row-split">

          {/* Giờ đá */}

          <div className="picker-item">

            <label className="text-sub">
              Giờ đá
            </label>

            <input
              type="text"
              className="time-input"
              placeholder="Ví dụ: 17:30"
              value={selectedTime}
              onChange={(e) =>
                setSelectedTime(e.target.value)
              }
            />

          </div>

          {/* Thời lượng */}

          <div className="picker-item">

            <label className="text-sub">
              Thời lượng
            </label>

            <select
              className="time-input"
              value={duration}
              onChange={(e) =>
                setDuration(e.target.value)
              }
            >

              <option value="60">
                60 phút
              </option>

              <option value="90">
                90 phút
              </option>

              <option value="120">
                120 phút
              </option>

            </select>

          </div>

        </div>

      </div>

    </div>

  );
};

export default TimePickerSection;