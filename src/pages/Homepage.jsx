import React from "react";
import MapComponent from "../componnets/Map/Map";
import Slider from "../componnets/Slider/Slider";
import Timetable from "../componnets/Timetable/Timetable";

const Homepage = () => {
  return (
    <>
      <div className="slider">
        <Slider />
      </div>
      <div className="schedule-wrapper">
        <Timetable />
      </div>
      <div className="container-info-contact">
        <div className="">
          <h2>КОНТАКТЫ</h2>
        </div>
        <MapComponent />
      </div>
    </>
  );
};

export default Homepage;
