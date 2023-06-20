import React from "react";
import Infoblock from "../componnets/Club/Gym/InfoBlock/Infoblock";
import TImetableGym from "../componnets/Club/Gym/Timetable/TImetableGym";
import ContactGym from "../componnets/Club/Gym/Contact/ContactGym";

const Gym = () => {
  return (
    <>
      <Infoblock />
      <TImetableGym/>
      <ContactGym/>
    </>
  );
};

export default Gym;
