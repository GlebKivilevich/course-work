import React from "react";
import call from "../../Rowing/Contact/call.png";
import location from "../../Rowing/Contact/location.png";
import user from "../../Rowing/Contact/user.png";
import { Link } from "react-router-dom";
import MapComponent from "../../../Map/Map";

const ContactMini = () => {
  const zoom = 16;
  const center = [53.47524653321624, 49.47700605463471];
  const geoInfo = [
    {
      id: 1,
      defaultGeometry: [53.47524653321624, 49.47700605463471],
      balloonContentBody: `
      <div>
        <h2>Спортивный зал</h2>
        <p>Улица Мурысева, 84</p>
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
            <p>Улица Мурысева, 84</p>
          </div>
        </div>
        <div className="email-row">
          <h3>
            <img src={user} alt="email" />
            Преподователь
          </h3>
          <div className="info-email-row">
            <p>Абасов Р.Г.</p>
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
                  window.location.href = "tel:89053051088";
                  e.preventDefault();
                }}
              >
                +7 905 305-10-88
              </Link>
            </p>
          </div>
        </div>
      </div>
      <MapComponent center={center} zoom={zoom} geoInfo={geoInfo} />
    </div>
  );
};

export default ContactMini;
