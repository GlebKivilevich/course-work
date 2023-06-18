import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ModalContext from "../context/context";

const Layout = () => {
  const { activeModal, setActiveModal } = useContext(ModalContext);
  const location = useLocation();
  const [headerInfo, setHeaderInfo] = useState({
    title: null,
    naiming: null,
  });
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Домашняя страница | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "студенческий спортивный клуб ГАПОУ ТСПК",
          naiming: "«Лидер»",
        }));
        setActiveModal(false);
        break;
      case "/volleball":
        document.title = "Волейбол | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "СЕКЦИЯ ПО ВОЛЕЙБОЛУ ОТ СПОРТИВНОГО КЛУБА «ЛИДЕР»",
          naiming: null,
        }));
        setActiveModal(false);
        break;
      case "/basketball":
        document.title = "Баскетбол | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "СЕКЦИЯ ПО БАСКЕТБОЛУ ОТ СПОРТИВНОГО КЛУБА «ЛИДЕР»",
          naiming: null,
        }));
        setActiveModal(false);
        break;
      case "/rowing":
        document.title = "Академическая гребля | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "СЕКЦИЯ ПО АКАДЕМИЧЕСКОЙ ГРЕБЛЕ ОТ СПОРТИВНОГО КЛУБА «ЛИДЕР»",
          naiming: null,
        }));
        setActiveModal(false);
        break;
      case "/armwrestling":
        document.title = "Армреслинг | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "СЕКЦИЯ ПО АРМРЕСЛИНГУ ОТ СПОРТИВНОГО КЛУБА «ЛИДЕР»",
          naiming: null,
        }));
        setActiveModal(false);
        break;
      case "/mini-football":
        document.title = "Мини-футбол | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "СЕКЦИЯ ПО  МИНИ-ФУТБОЛУ ОТ СПОРТИВНОГО КЛУБА «ЛИДЕР»",
          naiming: null,
        }));
        setActiveModal(false);
        break;
      case "/gym":
        document.title = "Тренажёрный зал | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "СЕКЦИЯ ПО ТРЕНАЖЕРНОМУ ЗАЛУ ОТ СПОРТИВНОГО КЛУБА «ЛИДЕР»",
          naiming: null,
        }));
        setActiveModal(false);
        break;
      default:
        document.title = "Запрашиваемая страница не существует | «ЛИДЕР»";
        setHeaderInfo((state) => ({
          ...state,
          title: "Запрашиваемая страница не существует «ЛИДЕР»",
          naiming:
            "Через 5 секунд вы будете возвращены на главную страницу сайта.",
        }));
        setActiveModal(false);
        break;
    }
  }, [location]);
  return (
    <div>
      {location.pathname !== "/volleball" &&
      location.pathname !== "/basketball" &&
      location.pathname !== "/rowing" &&
      location.pathname !== "/armwrestling" &&
      location.pathname !== "/mini-football" &&
      location.pathname !== "/gym" &&
      location.pathname !== "/" ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Header titleInfo={headerInfo} />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
