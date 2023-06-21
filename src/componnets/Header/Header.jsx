import "./index.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
// Assets
import logo from "../../assets/Header/logoTSPK.png";
import chevronDown from "../../assets/Header/chevronDown.jpg";
import vkLogo from "../../assets/Header/vklogo.png";
import ModalContext from "../../context/context";

const Header = ({ titleInfo, modalCheck }) => {
  const {activeModal, setActiveModal} = useContext(ModalContext);
  return (
    <header className="header-wrapper">
      <nav className="navigation-header">
        <div className="logo">
          <Link to="/" style={{ display: "block" }}>
            <img src={logo} alt="логотип ТСПК" />
          </Link>
        </div>
        <div className="info-block">
          <div className="section-information">
            <button className={activeModal ? "container-section active-modal" : "container-section"} onClick={() => setActiveModal(!activeModal)}>
              <p>СЕКЦИИ</p>
              <div className="container-open-modal" >
                <img src={chevronDown} alt="chevron down" />
              </div>
            </button>
            <Modal activeModal={activeModal}/>
            {/* MODAL */}
          </div>
          <div className="vk-link">
            <Link to={"https://vk.com/tspk63"} target="_blank">
              <img src={vkLogo} alt="vk logo" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="club-information-wrapper">
        <div className="container-club-information">
          <div className="text-content">
            <h1>{titleInfo.title}</h1>
            <p>{titleInfo?.naiming && titleInfo.naiming}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
