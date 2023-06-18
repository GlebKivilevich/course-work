import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { register } from "swiper/element/bundle";
// Pages
import Notfoundpage from "./pages/Notfoundpage";
import Homepage from "./pages/Homepage";
import Layout from "./componnets/Layout";
import Volleyball from "./pages/Volleyball";
import Basketball from "./pages/Basketball";
import Armwrestling from "./pages/Armwrestling";
import Rowing from "./pages/Rowing";
import MiniFootball from "./pages/MiniFootball";
import Gym from "./pages/Gym";
import ModalContext from "./context/context";

function App() {
  register();
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <ModalContext.Provider value={{ activeModal, setActiveModal }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="volleball" element={<Volleyball />} />
            <Route path="armwrestling" element={<Armwrestling />} />
            <Route path="basketball" element={<Basketball />} />
            <Route path="mini-football" element={<MiniFootball />} />
            <Route path="gym" element={<Gym />} />
            <Route path="rowing" element={<Rowing />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </ModalContext.Provider>
    </>
  );
}

export default App;
