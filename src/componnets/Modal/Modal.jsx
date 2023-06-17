import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Modal = ({ activeModal }) => {
  return (
    <div className={activeModal ? "modal active" : "modal noactive"}>
      <div className="modal-content">
        <div className="name-club">
          <Link to="/mini-football">мини-футбол</Link>
        </div>
        <div className="name-club">
          <Link to="/volleball">волейбол</Link>
        </div>
        <div className="name-club">
          <Link to="/basketball">баскетбол</Link>
        </div>
        <div className="name-club">
          <Link to="/armwrestling">армреслинг</Link>
          </div>
        <div className="name-club">
          <Link to="/rowing">академическая гребля</Link>
          </div>
        <div className="name-club">
          <Link to="/gym">тренажёрный зал</Link>
          </div>
      </div>
    </div>
  );
};

export default Modal;
