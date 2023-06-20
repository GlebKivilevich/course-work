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
  const zoom = 13;
  const center = [53.495451, 49.391997]; //[53.47524653321624, 49.47700605463471]
  const geoInfo = [
    {
      defaultGeometry: [53.47524653321624, 49.47700605463471],
      balloonContentBody: `
    <div>
      <h2>Спортивный зал</h2>
      <p>Улица Мурысева, 84</p>
    </div>
  `,
    },
    {
      defaultGeometry: [53.50478268770152, 49.40227949685244],
      balloonContentBody: `
    <div>
      <h2>Тренажерный зал</h2>
      <p>Ленинградская улица, 28</p>
    </div>
  `,
    },
    {
      defaultGeometry: [53.499192, 49.300261],
      balloonContentBody: `
    <div>
      <h2>Лыжная база ТСПК</h2>
      <p>Улица Маршала Жукова, 51</p>
    </div>
  `,
    },
  ];
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
        <MapComponent center={center} zoom={zoom} geoInfo={geoInfo} />
      </div>
    </>
  );
};

export default Homepage;
