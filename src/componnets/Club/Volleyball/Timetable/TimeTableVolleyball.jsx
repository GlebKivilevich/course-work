import React from "react";
import "./tablevolleyball.css";

const TimeTableVolleyball = () => {
  return (
    <div className="schedule-wrapper-volleyball">
    <div className="schedule-content-rowing">
      <div className="schedule-header-rowing">
        <h2>РАСПИСАНИЕ</h2>
        <p>для твоих возможностей</p>
      </div>
      <div class="container-rowing">
        <div class="schedule-volleyball">
          {/* <!-- DATE --> */}
          <div class="col-data-rowing">
            <div class="cel-nodata-rowing"></div>
            <div class="cel-data-rowing">СР</div>
            <div class="cel-data-rowing">ЧТ</div>
            <div class="cel-data-rowing">ПТ</div>
          </div>
          {/* <!-- ВРЕМЯ --> */}
          <div class="col-rowing">
            <div class="cel-time-header-rowing">ВРЕМЯ</div>
            <div class="cel-time-volleyball">
              <div class="time-info-rowing">14:10 - 15:40</div>
              <div class="time-info-rowing">15:40 - 17:10</div>
            </div>
            <div class="cel-time-volleyball">
              <div class="time-info-rowing">14:10 - 15:40</div>
              <div class="time-info-rowing">15:40 - 17:10</div>
            </div>
            <div class="cel-time-volleyball">
              <div class="time-info-rowing">15:40 - 17:10</div>
            </div>
          </div>
          {/* <!--ГРУППА  --> */}
          <div class="col-rowing">
            <div class="cel-group-header-rowing">ГРУППА</div>
            <div class="cel-group-volleyball">
              <div class="group-info-rowing">Юноши</div>
              <div class="group-info-rowing">Девушки</div>
            </div>
            <div class="cel-group-volleyball">
              <div class="group-info-rowing">Девушки</div>
              <div class="group-info-rowing">Юноши</div>
            </div>
            <div class="cel-group-volleyball">
              <div class="group-info-rowing">Девушки</div>
            </div>
          </div>
          {/* МЕСТО ПРОВЕДЕНИЯ */}
          <div class="col-rowing">
            <div class="cel-place-header-rowing">МЕСТО ПРОВЕДЕНИЯ</div>
            <div class="cel-place-volleyball">
              <div class="place-info-rowing">Спортивный Зал</div>
              <div class="place-info-rowing">Спортивный Зал</div>
            </div>
            <div class="cel-place-volleyball">
              <div class="place-info-rowing">Спортивный Зал</div>
              <div class="place-info-rowing">Спортивный Зал</div>
            </div>
            <div class="cel-place-volleyball">
              <div class="place-info-rowing">Спортивный Зал</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TimeTableVolleyball;
