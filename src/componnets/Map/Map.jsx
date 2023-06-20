import React from "react";

// Maps
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

const MapComponent = ({
  center = [53.501148, 49.402336],
  zoom = 13,
  geoInfo,
}) => {
  return (
    <YMaps>
      <div
        style={{
          maxWidth: "1920",
          width: "100%",
          height: "650px",
          borderRadius: "25px",
        }}
      >
        <Map
          width="100%"
          height="100%"
          defaultState={{
            center: center,
            zoom: zoom,
          }}
        >
          {geoInfo.map((item) => {
            console.log(item);
            return (
              <Placemark
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={item.defaultGeometry}
                options={{
                  preset: "islands#blueSportIcon",
                  color: "#4BC0D0",
                }}
                properties={{
                  balloonContentBody: item.balloonContentBody,
                }}
              />
            );
          })}
          {/* <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[53.47524653321624, 49.47700605463471]}
            options={{
              preset: "islands#blueSportIcon",
              color: "#4BC0D0",
            }}
            properties={{
              balloonContentBody: `
                    <div>
                      <h2>Спортивный зал</h2>
                      <p>Улица Мурысева, 84</p>
                    </div>
                  `,
            }}
          />
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[53.50478268770152, 49.40227949685244]}
            options={{
              preset: "islands#blueSportIcon",
              color: "#4BC0D0",
            }}
            properties={{
              balloonContentBody: `
                    <div>
                      <h2>Тренажерный зал</h2>
                      <p>Ленинградская улица, 28</p>
                    </div>
                  `,
            }}
          />
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[53.499192, 49.300261]}
            options={{
              preset: "islands#blueSportIcon",
              color: "#4BC0D0",
            }}
            properties={{
              balloonContentBody: `
                  <div>
                    <h2>Лыжная база ТСПК</h2>
                    <p>Улица Маршала Жукова, 51</p>
                  </div>
                `,
            }}
          /> */}
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;
