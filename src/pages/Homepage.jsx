import React from "react";
import MapComponent from "../componnets/Map/Map";
import Slider from "../componnets/Slider/Slider";
import Timetable from "../componnets/Timetable/Timetable";
import "./homepage.css";

// assets
import addressIcon from "../assets/Contact/location.png";
import emailIcon from "../assets/Contact/email.png";
import phoneIcon from "../assets/Contact/call.png";
import { Link } from "react-router-dom";

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
        <div className="contact-header">
          <h2>КОНТАКТЫ</h2>
        </div>
        <div className="contact-full-information">
          <div className="address">
            <h3>
              <img src={addressIcon} alt="address" />
              Адреса
            </h3>
            <div className="info-address">
              <h4>Самарская область, город Тольятти</h4>
              <p>улица Мурысева, 84</p>
              <p>Ленинградская улица, 28</p>
              <p>улица Маршала Жукова, 51</p>
            </div>
          </div>
          <div className="email">
            <h3>
              <img src={emailIcon} alt="email" />
              E-mail
            </h3>
            <div className="info-email">
              <p>
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:tspktspk@gmail.com";
                    e.preventDefault();
                  }}
                >
                  tspktspk@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="phone-number">
            <h3>
              <img src={phoneIcon} alt="phone" />
              Телефон
            </h3>
            <div className="info-phone-number">
              <p>
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "tel:88005553535";
                    e.preventDefault();
                  }}
                >
                  8 800 555 35-35
                </Link>
              </p>
            </div>
          </div>
        </div>
        <MapComponent />
      </div>
    </>
  );
};

export default Homepage;
