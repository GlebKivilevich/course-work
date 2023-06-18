import React from "react";
import "./timetable.css";
const Timetable = () => {
  return (
    <div className="schedule-content">
      <div className="schedule-header">
        <h2>РАСПИСАНИЕ</h2>
        <p>для твоих возможностей</p>
      </div>
      <div class="container">
        <div class="schedule">
          {/* <!-- DATE --> */}
          <div class="col-data">
            <div class="cel-nodata"></div>
            <div class="cel-data">ПН</div>
            <div class="cel-data">ВТ</div>
            <div class="cel-data">СР</div>
            <div class="cel-data">ЧТ</div>
            <div class="cel-data">ПТ</div>
          </div>
          {/* <!-- ВРЕМЯ --> */}
          <div class="col">
            <div class="cel-time-header">ВРЕМЯ</div>
            <div class="cel-time">
              <div class="time-info">14:00 - 15:30</div>
              <div class="time-info">14:10 - 15:40</div>
              <div class="time-info">15:40 - 17:10</div>
            </div>
            <div class="cel-time">
              <div class="time-info">14:00 - 15:30</div>
              <div class="time-info">14:10 - 15:40</div>
              <div class="time-info">15:40 - 17:10</div>
            </div>
            <div class="cel-time">
              <div class="time-info">14:10 - 15:40</div>
              <div class="time-info">14:10 - 15:40</div>
              <div class="time-info">15:40 - 17:10</div>
            </div>
            <div class="cel-time">
              <div class="time-info">14:00 - 15:30</div>
              <div class="time-info">14:10 - 15:40</div>
              <div class="time-info">15:40 - 17:10</div>
            </div>
            <div class="cel-time">
              <div class="time-info">14:00 - 15:30</div>
              <div class="time-info">15:40 - 17:10</div>
              <div class="time-info">17:10 - 18:30</div>
            </div>
          </div>
          {/* <!-- ДИСЦИПЛИНА --> */}
          <div class="col">
            <div class="cel-discipline-header">ДИСЦИПЛИНА</div>
            <div class="cel-discipline">
              <div class="discipline-info">Академическая гребля</div>
              <div class="discipline-info">Баскетбол</div>
              <div class="discipline-info">Тренажерный зал</div>
            </div>
            <div class="cel-discipline">
              <div class="discipline-info">Армреслинг</div>
              <div class="discipline-info">Волейбол</div>
              <div class="discipline-info">Волейбол</div>
            </div>
            <div class="cel-discipline">
              <div class="discipline-info">Мини-футбол</div>
              <div class="discipline-info">Мини-футбол</div>
              <div class="discipline-info">Академическая гребля</div>
            </div>
            <div class="cel-discipline">
              <div class="discipline-info">Армреслинг</div>
              <div class="discipline-info">Волейбол</div>
              <div class="discipline-info">Волейбол</div>
            </div>
            <div class="cel-discipline">
              <div class="discipline-info">Баскетбол</div>
              <div class="discipline-info">Волейбол</div>
              <div class="discipline-info">Тренажерный зал</div>
            </div>
          </div>
          {/* <!--ГРУППА  --> */}
          <div class="col">
            <div class="cel-group-header">ГРУППА</div>
            <div class="cel-group">
              <div class="group-info">Общая</div>
              <div class="group-info">Юноши</div>
              <div class="group-info">Общая</div>
            </div>
            <div class="cel-group">
              <div class="group-info">Общая</div>
              <div class="group-info">Юноши</div>
              <div class="group-info">Девушки</div>
            </div>
            <div class="cel-group">
              <div class="group-info">Девушки</div>
              <div class="group-info">Юноши</div>
              <div class="group-info">Общая</div>
            </div>
            <div class="cel-group">
              <div class="group-info">Общая</div>
              <div class="group-info">Девушки</div>
              <div class="group-info">Юноши</div>
            </div>
            <div class="cel-group">
              <div class="group-info">Девушки</div>
              <div class="group-info">Девушки</div>
              <div class="group-info">Общая</div>
            </div>
          </div>
          {/* МЕСТО ПРОВЕДЕНИЯ */}
          <div class="col">
            <div class="cel-place-header">МЕСТО ПРОВЕДЕНИЯ</div>
            <div class="cel-place">
              <div class="place-info">Лыжная база ТСПК</div>
              <div class="place-info">Спорт. Зал</div>
              <div class="place-info">Тренажерный зал</div>
            </div>
            <div class="cel-place">
              <div class="place-info">Тренажерный зал</div>
              <div class="place-info">Спорт. Зал</div>
              <div class="place-info">Спорт. Зал</div>
            </div>
            <div class="cel-place">
              <div class="place-info">Спорт. Зал</div>
              <div class="place-info">Спорт. Зал</div>
              <div class="place-info">Лыжная база ТСПК</div>
            </div>
            <div class="cel-place">
              <div class="place-info">Тренажерный зал</div>
              <div class="place-info">Спорт. Зал</div>
              <div class="place-info">Спорт. Зал</div>
            </div>
            <div class="cel-place">
              <div class="place-info">Спорт. Зал</div>
              <div class="place-info">Тренажерный зал</div>
              <div class="place-info">Общая</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
