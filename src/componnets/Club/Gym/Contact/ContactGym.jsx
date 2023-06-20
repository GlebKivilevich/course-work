import React from "react";
import MapComponent from "../../../Map/Map";
import { Link } from "react-router-dom";
import call from "../../Rowing/Contact/call.png";
import location from "../../Rowing/Contact/location.png";
import user from "../../Rowing/Contact/user.png";

const ContactGym = () => {
  const zoom = 16;
  const center = [53.50478268770152, 49.40227949685244];
  const geoInfo = [
    {
      id: 1,
      defaultGeometry: [53.50478268770152, 49.40227949685244],
      balloonContentBody: `
      <div>
        <h2>Тренажерный зал</h2>
        <p>Ленинградская улица, 28</p>
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
            <p>Ленинградская улица, 28</p>
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

export default ContactGym;
