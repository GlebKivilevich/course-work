import React from "react";
import "./tablemini.css";
const TimeTableMini = () => {
  return (
    <div className="schedule-wrapper-mini">
      <div className="schedule-content-rowing">
        <div className="schedule-header-rowing">
          <h2>РАСПИСАНИЕ</h2>
          <p>для твоих возможностей</p>
        </div>
        <div class="container-rowing">
          <div class="schedule-mini">
            {/* <!-- DATE --> */}
            <div class="col-data-rowing">
              <div class="cel-nodata-rowing"></div>
              <div class="cel-data-rowing">СР</div>
            </div>
            {/* <!-- ВРЕМЯ --> */}
            <div class="col-rowing">
              <div class="cel-time-header-rowing">ВРЕМЯ</div>
              <div class="cel-time-mini">
                <div class="time-info-rowing">14:10 - 15:40</div>
                <div class="time-info-rowing">15:40 - 17:10</div>
              </div>
            </div>
            {/* <!--ГРУППА  --> */}
            <div class="col-rowing">
              <div class="cel-group-header-rowing">ГРУППА</div>
              <div class="cel-group-mini">
                <div class="group-info-rowing">Девушки</div>
                <div class="group-info-rowing">Юноши</div>
              </div>
            </div>
            {/* МЕСТО ПРОВЕДЕНИЯ */}
            <div class="col-rowing">
              <div class="cel-place-header-rowing">МЕСТО ПРОВЕДЕНИЯ</div>
              <div class="cel-place-mini">
                <div class="place-info-rowing">Спортивный Зал</div>
                <div class="place-info-rowing">Спортивный Зал</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTableMini;
