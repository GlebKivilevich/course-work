import React from "react";
import InfoBlockMiniFootball from "../componnets/Club/Mini-football/InfoBlock/InfoBlockMiniFootball";
import TimeTableMini from "../componnets/Club/Mini-football/Timetable/TimeTableMini";
import ContactMini from "../componnets/Club/Mini-football/Contact/ContactMini";

const MiniFootball = () => {
  return (
    <div>
      <InfoBlockMiniFootball />
      <TimeTableMini/>
      <ContactMini/>
    </div>
  );
};

export default MiniFootball;
