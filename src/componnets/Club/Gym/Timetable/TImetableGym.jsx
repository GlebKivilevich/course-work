import React from "react";

const TImetableGym = () => {
  return (
    <div className="schedule-wrapper-rowing">
      <div className="schedule-content-rowing">
        <div className="schedule-header-rowing">
          <h2>РАСПИСАНИЕ</h2>
          <p>для твоих возможностей</p>
        </div>
        <div class="container-rowing">
          <div class="schedule-basketball">
            {/* <!-- DATE --> */}
            <div class="col-data-rowing">
              <div class="cel-nodata-rowing"></div>
              <div class="cel-data-basketball">ПН</div>
              <div class="cel-data-basketball">СР</div>
            </div>
            {/* <!-- ВРЕМЯ --> */}
            <div class="col-rowing">
              <div class="cel-time-header-rowing">ВРЕМЯ</div>
              <div class="cel-time-basketball">
                <div class="time-info-rowing">14:00 - 15:30</div>
              </div>

              <div class="cel-time-basketball">
                <div class="time-info-rowing">14:10 - 15:40</div>
              </div>
            </div>
            {/* <!--ГРУППА  --> */}
            <div class="col-rowing">
              <div class="cel-group-header-rowing">ГРУППА</div>
              <div class="cel-group-basketball">
                <div class="group-info-rowing">Общая</div>
              </div>
              <div class="cel-group-basketball">
                <div class="group-info-rowing">Общая</div>
              </div>
            </div>
            {/* МЕСТО ПРОВЕДЕНИЯ */}
            <div class="col-rowing">
              <div class="cel-place-header-rowing">МЕСТО ПРОВЕДЕНИЯ</div>
              <div class="cel-place-basketball">
                <div class="place-info-rowing">Тренажерный зал</div>
              </div>

              <div class="cel-place-basketball">
                <div class="place-info-rowing">Тренажерный зал</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TImetableGym;
