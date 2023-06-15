import React, { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    document.title = "Домашняя страница | «ЛИДЕР»"
  }, [])
  return <div>Homepage</div>;
};

export default Homepage;
