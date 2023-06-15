import "./App.css";
import { Route, Routes } from "react-router-dom";
// Pages
import Notfoundpage from "./pages/Notfoundpage";
import Homepage from "./pages/Homepage";
import Layout from "./componnets/Layout";
import Volleyball from "./pages/Volleyball";
import Basketball from "./pages/Basketball";
import Contact from "./pages/Contact";
import Armwrestling from "./pages/Armwrestling";
import Rowing from "./pages/Rowing";
import MiniFootball from "./pages/MiniFootball";
import Gym from "./pages/Gym";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="volleball" element={<Volleyball/>}/>
          <Route path="armwrestling" element={<Armwrestling/>}/>
          <Route path="basketball" element={<Basketball/>}/>
          <Route path="mini-football" element={<MiniFootball/>}/>
          <Route path="gym" element={<Gym/>}/>
          <Route path="rowing" element={<Rowing/>}/>
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
