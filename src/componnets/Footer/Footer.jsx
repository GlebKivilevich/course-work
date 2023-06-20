import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/logoTSPK.png";
import "./style.css";
const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container-footer">
        <div className="logo-container-footer">
          <Link to="/">
            <img src={logo} alt="логотип тспк" />
          </Link>

          <Link to="https://tspk.org" target="_blank">
            <p>сайт ГАПОУ ТСПК</p>
          </Link>
        </div>
        <nav className="nav-container">
          <div className="">
            <h2>Секции</h2>
          </div>
          <div className="footer-navigation">
            <div className="first-nav-block">
              <Link to="/mini-football">мини-футбол</Link>
              <Link to="/volleyball">волейбол</Link>
              <Link to="/gym">тренажерный зал</Link>
            </div>
            <div className="second-nav-block">
              <Link to="/armwrestling">армреслинг</Link>
              <Link to="/basketball">баскетбол</Link>
              <Link to="/rowing">академическая гребля</Link>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
