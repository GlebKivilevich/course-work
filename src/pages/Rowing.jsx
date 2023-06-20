import React from "react";
import InfoBlock from "../componnets/Club/Rowing/InfoBlock/InfoBlock";
import TimetableRowing from "../componnets/Club/Rowing/Timetable/TimetableRowing";
import ContactRow from "../componnets/Club/Rowing/Contact/ContactRow";

const Rowing = () => {
  return (
    <div>
      <InfoBlock />
      <TimetableRowing />
      <ContactRow />
    </div>
  );
};

export default Rowing;
