import React from "react";

const TImetableGym = () => {
  return (
    <div className="schedule-wrapper-arm">
      <div className="schedule-content-arm">
        <div className="schedule-header-arm">
          <h2>РАСПИСАНИЕ</h2>
          <p>для твоих возможностей</p>
        </div>
        <div class="container-arm">
          <div class="schedule-arm">
            {/* <!-- DATE --> */}
            <div class="col-data-arm">
              <div class="cel-nodata-arm"></div>
              <div class="cel-data-basketball">ПН</div>
              <div class="cel-data-basketball">СР</div>
            </div>
            {/* <!-- ВРЕМЯ --> */}
            <div class="col-arm">
              <div class="cel-time-header-arm">ВРЕМЯ</div>
              <div class="cel-time-basketball">
                <div class="time-info-arm">15:40 - 17:10</div>
              </div>

              <div class="cel-time-basketball">
                <div class="time-info-arm">17:10 - 18:30</div>
              </div>
            </div>
            {/* <!--ГРУППА  --> */}
            <div class="col-arm">
              <div class="cel-group-header-arm">ГРУППА</div>
              <div class="cel-group-basketball">
                <div class="group-info-arm">Общая</div>
              </div>
              <div class="cel-group-basketball">
                <div class="group-info-arm">Общая</div>
              </div>
            </div>
            {/* МЕСТО ПРОВЕДЕНИЯ */}
            <div class="col-arm">
              <div class="cel-place-header-arm">МЕСТО ПРОВЕДЕНИЯ</div>
              <div class="cel-place-basketball">
                <div class="place-info-arm">Тренажерный зал</div>
              </div>

              <div class="cel-place-basketball">
                <div class="place-info-arm">Тренажерный зал</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TImetableGym;
