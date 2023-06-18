import React, { useEffect } from "react";
import "./notfound.css";
import { Link, useNavigate } from "react-router-dom";
const Notfoundpage = () => {
  const goback = useNavigate();
  useEffect(() => {
    const timerGoBack = setTimeout(() => {
      goback("/");
    }, 5500);
    return () => clearTimeout(timerGoBack);
  }, []);
  return (
    <div className="not-found-wrapper">
      <div className="scene">
        <div className="text">404</div>
        <div className="text">Page Not Found!</div>
        <br />
        <div className="text">DO NOT TOUCH</div>
        <div className="sheep">
          <Link to="/">
            <span className="top">
              <div className="body"></div>
              <div className="head">
                <div className="eye one"></div>
                <div className="eye two"></div>
                <div className="ear one"></div>
                <div className="ear two"></div>
              </div>
            </span>
            <div className="legs">
              <div className="leg"></div>
              <div className="leg"></div>
              <div className="leg"></div>
              <div className="leg"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfoundpage;
