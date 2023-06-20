import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import "./slider.css";
import btnChevron from "../../assets/Header/chevronDown.jpg";

const Slider = () => {
  const [componentSlider, setComponentSlider] = useState([
    {
      id: 1,
      titel: "МИНИ-ФУТБОЛ",
      infoSection:
        "укрепление опорно-двигательного аппарата, развитие быстроты, ловкости, гибкости; ",
      link: "/mini-football",
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
      link: "/volleyball",
      classSection: "slider-container bg-volleyball",
    },
  ]);

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      speed={750}
      effect="fade"
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,

      }}
      loop={true}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
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
  );
};

export default Slider;
