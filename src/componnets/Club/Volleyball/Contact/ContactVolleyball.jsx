import React from 'react'
import "./contactvoll.css"
import MapComponent from '../../../Map/Map';
import { Link } from 'react-router-dom';
// assets
import call from "../../Rowing/Contact/call.png";
import location from "../../Rowing/Contact/location.png";
import user from "../../Rowing/Contact/user.png";

const ContactVolleyball = () => {
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
              <p>Кан О.Р.</p>
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
                    window.location.href = "tel:89033333101";
                    e.preventDefault();
                  }}
                >
                  +7 903 333-31-01
                </Link>
              </p>
            </div>
          </div>
        </div>
        <MapComponent center={center} zoom={zoom} geoInfo={geoInfo} />
      </div>
  )
}

export default ContactVolleyball