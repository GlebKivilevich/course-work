import React from "react";
import "./contactrow.css";
import { Link } from "react-router-dom";
import MapComponent from "../../../Map/Map";

import call from "./call.png";
import location from "./location.png";
import user from "./user.png";

const ContactRow = () => {
  const zoom = 15;
  const center = [53.499192, 49.300261];
  const geoInfo = [
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
    <div className="container-info-contact">
      <div className="contact-header-row">
        <h2>КОНТАКТНЫЕ ДАННЫЕ</h2>
      </div>
      <div className="contact-full-information-row">
        <div className="address">
          <h3>
            <img src={location} alt="address" />
            Адреса
          </h3>
          <div className="info-address">
            <h4>Самарская область, город Тольятти</h4>
            <p>улица Маршала Жукова, 51</p>
          </div>
        </div>
        <div className="email-row">
          <h3>
            <img src={user} alt="email" />
            Преподователь
          </h3>
          <div className="info-email-row">
            <p>Коваленко Т.О.</p>
          </div>
        </div>
        <div className="phone-number">
          <h3>
            <img src={call} alt="phone" />
            Телефон
          </h3>
          <div className="info-phone-number-row">
            <p>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "tel:89608507738";
                  e.preventDefault();
                }}
              >
                +7 960 850-77-38
              </Link>
            </p>
          </div>
        </div>
      </div>
      <MapComponent center={center} zoom={zoom} geoInfo={geoInfo} />
    </div>
  );
};

export default ContactRow;
