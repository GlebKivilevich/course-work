import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import logo from "../assets/Header/logoTSPK.png";
import btnChevron from "../assets/Header/chevronDown.jpg";
import "swiper/css/bundle";
import "./homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [componentSlider, setComponentSlider] = useState([
    {
      id: 1,
      titel: "МИНИ-ФУТБОЛ",
      infoSection:
        "укрепление опорно-двигательного аппарата, развитие быстроты, ловкости, гибкости; ",
      link: "/mini-footbal",
      classSection: "slider-container bg-mini-fotball",
    },
    {
      id: 2,
      titel: "АРМРЕСЛИНГ",
      infoSection:
        "Закаляет дух и формирует характер.   Умение принимать решения, полагаясь только на себя, всегда идти вперед и добиватся успеха.",
      link: "/armwrestling",
      classSection: "slider-container bg-armwrestling",
    },
    {
      id: 3,
      titel: "БАСКЕТБОЛ",
      infoSection:
        "Улучшается работа сердечнососудистой системы. Увеличивается частота дыхательных движений человека ",
      link: "/basketball",
      classSection: "slider-container bg-basketball",
    },
    {
      id: 4,
      titel: "ТРЕНАЖЕРНЫЙ ЗАЛ",
      infoSection:
        "Организм обретает способность приспосабливаться к более сложным нагрузкам и совершать упражнения более эффективным образом.",
      link: "/gym",
      classSection: "slider-container bg-gym",
    },
    {
      id: 5,
      titel: "АКАДЕМИЧЕСКАЯ ГРЕБЛЯ",
      infoSection:
        "способствует не только развитию всех систем организма, но и оказывает положительное эмоциональное воздействие.",
      link: "/rowing",
      classSection: "slider-container bg-rowing",
    },
    {
      id: 6,
      titel: "ВОЛЕЙБОЛ",
      infoSection:
        "Укрепляет опорно-двигательный аппарат, улучшает подвижность суставов. Тренирует мышцы глаз, расширяет поле зрения.",
      link: "/volleball",
      classSection: "slider-container bg-volleyball",
    },
  ]);
  return (
    <>
      <div className="slider">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {componentSlider.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className={item.classSection}>
                  <div className="info-blcok-section">
                    <div className="full-info-section">
                      <h2>{item.titel}</h2>
                      <p>{item.infoSection}</p>
                      <Link to={item.link} className="btn-more">
                        <div className="btn-container">
                          подробнее
                          <div style={{ transform: "rotate(-90deg)" }}>
                            <img src={btnChevron} alt="btn chevron" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="schedule-wrapper">
        <div className="schedule-content">
          <div className="schedule-header">
            <h2>РАСПИСАНИЕ</h2>
            <p>для твоих возможностей</p>
          </div>
          <div class="container">
            <div class="schedule">
              {/* <!-- DATE --> */}
              <div class="col-data">
                <div class="cel-nodata"></div>
                <div class="cel-data">ПН</div>
                <div class="cel-data">ВТ</div>
                <div class="cel-data">СР</div>
                <div class="cel-data">ЧТ</div>
                <div class="cel-data">ПТ</div>
              </div>
              {/* <!-- ВРЕМЯ --> */}
              <div class="col">
                <div class="cel-time-header">ВРЕМЯ</div>
                <div class="cel-time">
                  <div class="time-info">14:00 - 15:30</div>
                  <div class="time-info">14:10 - 15:40</div>
                  <div class="time-info">15:40 - 17:10</div>
                </div>
                <div class="cel-time">
                  <div class="time-info">14:00 - 15:30</div>
                  <div class="time-info">14:10 - 15:40</div>
                  <div class="time-info">15:40 - 17:10</div>
                </div>
                <div class="cel-time">
                  <div class="time-info">14:10 - 15:40</div>
                  <div class="time-info">14:10 - 15:40</div>
                  <div class="time-info">15:40 - 17:10</div>
                </div>
                <div class="cel-time">
                  <div class="time-info">14:00 - 15:30</div>
                  <div class="time-info">14:10 - 15:40</div>
                  <div class="time-info">15:40 - 17:10</div>
                </div>
                <div class="cel-time">
                  <div class="time-info">14:00 - 15:30</div>
                  <div class="time-info">15:40 - 17:10</div>
                  <div class="time-info">17:10 - 18:30</div>
                </div>
              </div>
              {/* <!-- ДИСЦИПЛИНА --> */}
              <div class="col">
                <div class="cel-discipline-header">ДИСЦИПЛИНА</div>
                <div class="cel-discipline">
                  <div class="discipline-info">Академическая гребля</div>
                  <div class="discipline-info">Баскетбол</div>
                  <div class="discipline-info">Тренажерный зал</div>
                </div>
                <div class="cel-discipline">
                  <div class="discipline-info">Армреслинг</div>
                  <div class="discipline-info">Волейбол</div>
                  <div class="discipline-info">Волейбол</div>
                </div>
                <div class="cel-discipline">
                  <div class="discipline-info">Мини-футбол</div>
                  <div class="discipline-info">Мини-футбол</div>
                  <div class="discipline-info">Академическая гребля</div>
                </div>
                <div class="cel-discipline">
                  <div class="discipline-info">Армреслинг</div>
                  <div class="discipline-info">Волейбол</div>
                  <div class="discipline-info">Волейбол</div>
                </div>
                <div class="cel-discipline">
                  <div class="discipline-info">Баскетбол</div>
                  <div class="discipline-info">Волейбол</div>
                  <div class="discipline-info">Тренажерный зал</div>
                </div>
              </div>
              {/* <!--ГРУППА  --> */}
              <div class="col">
                <div class="cel-group-header">ГРУППА</div>
                <div class="cel-group">
                  <div class="group-info">Общая</div>
                  <div class="group-info">Юноши</div>
                  <div class="group-info">Общая</div>
                </div>
                <div class="cel-group">
                  <div class="group-info">Общая</div>
                  <div class="group-info">Юноши</div>
                  <div class="group-info">Девушки</div>
                </div>
                <div class="cel-group">
                  <div class="group-info">Девушки</div>
                  <div class="group-info">Юноши</div>
                  <div class="group-info">Общая</div>
                </div>
                <div class="cel-group">
                  <div class="group-info">Общая</div>
                  <div class="group-info">Девушки</div>
                  <div class="group-info">Юноши</div>
                </div>
                <div class="cel-group">
                  <div class="group-info">Девушки</div>
                  <div class="group-info">Девушки</div>
                  <div class="group-info">Общая</div>
                </div>
              </div>
              {/* МЕСТО ПРОВЕДЕНИЯ */}
              <div class="col">
                <div class="cel-place-header">МЕСТО ПРОВЕДЕНИЯ</div>
                <div class="cel-place">
                  <div class="place-info">Лыжная база ТСПК</div>
                  <div class="place-info">Спорт. Зал</div>
                  <div class="place-info">Тренажерный зал</div>
                </div>
                <div class="cel-place">
                  <div class="place-info">Тренажерный зал</div>
                  <div class="place-info">Спорт. Зал</div>
                  <div class="place-info">Спорт. Зал</div>
                </div>
                <div class="cel-place">
                  <div class="place-info">Спорт. Зал</div>
                  <div class="place-info">Спорт. Зал</div>
                  <div class="place-info">Лыжная база ТСПК</div>
                </div>
                <div class="cel-place">
                  <div class="place-info">Тренажерный зал</div>
                  <div class="place-info">Спорт. Зал</div>
                  <div class="place-info">Спорт. Зал</div>
                </div>
                <div class="cel-place">
                  <div class="place-info">Спорт. Зал</div>
                  <div class="place-info">Тренажерный зал</div>
                  <div class="place-info">Общая</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
