import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Домашняя страница | «ЛИДЕР»";
        break;
      case "/contact":
        document.title = "Контакты | «ЛИДЕР»";
        break;
      case "/volleball":
        document.title = "Волейбол | «ЛИДЕР»";
        break;
      case "/basketball":
        document.title = "Баскетбол | «ЛИДЕР»";
        break;
      case "/rowing":
        document.title = "Академическая гребля | «ЛИДЕР»";
        break;
      case "/armwrestling":
        document.title = "Армреслинг | «ЛИДЕР»";
        break;
      case "/mini-football":
        document.title = "Мини-футбол | «ЛИДЕР»";
        break;
      case "/gym":
        document.title = "Тренажёрный зал | «ЛИДЕР»";
        break;
      default:
        document.title = "Запрашиваемая страница не существует | «ЛИДЕР»";
        break;
    }
  }, []);
  return (
    <div style={{display:"flex", flexDirection: "column", height: "100%"}}>
      <section>
        <header>Header</header>
        <div className="back-img-gym"></div>
      </section>

      <Outlet style={{flex: "1 0 auto"}}/>
      <footer style={{flex: "0 0 auto"}}>Footer</footer>
    </div>
  );
};

export default Layout;
