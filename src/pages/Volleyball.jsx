import React from "react";
import InfoBlock from "../componnets/Club/Volleyball/InfoBlock/InfoBlock";
import TimeTableVolleyball from "../componnets/Club/Volleyball/Timetable/TimeTableVolleyball";
import ContactVolleyball from "../componnets/Club/Volleyball/Contact/ContactVolleyball";

const Volleyball = () => {
  return (
    <div>
      <InfoBlock />
      <TimeTableVolleyball/>
      <ContactVolleyball/>
    </div>
  );
};

export default Volleyball;
