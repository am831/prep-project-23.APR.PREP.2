import React, { useState, useEffect } from 'react';
import "./AirQuality.css"

const AirQuality = ({ city }) => {
  const [airQuality, setAirQuality] = useState(null);
  
  const aqi = [
    {
      color: "#2CC937",
      text: "Good",
    },
    {
      color: "#99C140",
      text: "Fair",
    },
    {
      color: "#E7B417",
      text: "Moderate",
    },
    {
      color: "#E77518",
      text: "Poor",
    },
    {
      color: "#EF1E1E",
      text: "Poor",
    },
  ];

  useEffect(() => {
    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_APIKEY}`;
    try {
      fetch(geocodingUrl)
        .then(response => response.json())
        .then(data => {
          const { lat, lon } = data[0];
          const airQualityUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIKEY}`;
          fetch(airQualityUrl)
            .then(response => response.json())
            .then(data => {
              setAirQuality(data.list[0]);
              console.log("Data", data)
              console.log("City", city)
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [city]);
  

  return (
    <section className="info-container">
      <h2>Air Quality</h2>
      {airQuality ? (
        <>
          <div className="aqi-container">
            {aqi.map((item, index) => (
              <div
                className="aqi-box"
                key={index}
                style={{
                  backgroundColor: item.color,
                  border: index + 1 === airQuality.main.aqi ? "5px solid #fff" : "none",
                  opacity: index + 1 === airQuality.main.aqi ? 1 : 0.3,
                }}
              />
            ))}
          </div>
          <div className="aqi-indicator">
            {aqi.map((item, index) => {
              return (
                <div className="aqi-indicator-box" key={index}>
                  <div
                    className="aqi-indicator-circle"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  <p className="aqi-indicator-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p>Loading air quality data...</p>
      )}
    </section>
  );
};

export default AirQuality;
