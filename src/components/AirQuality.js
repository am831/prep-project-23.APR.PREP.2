import React from "react";
import { useState } from "react";

function AirQuality(props) {
    const [lat, setLat] = useState(null);
    const [lon, setLong] = useState(null);
    const [aqi, setAQI] = useState(null); 

    fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q="
        + props.city +
        "&appid=" +
        process.env.REACT_APP_APIKEY
      ).then((res) =>
      {return res.json()}).then((result)=> {
        console.log(result);
        console.log("city:", result[0].name)
        setLat(result.lat);
        setLong(result.lon);
      })
      fetch(
        "http://api.openweathermap.org/data/2.5/air_pollution/history?lat="
        + lat + "&lon=" + lon +
        "&appid=" +
        process.env.REACT_APP_APIKEY
      ).then((res) =>
      {return res.json()}).then((result)=> {
        console.log(result);
        console.log("city:", result[0].name)
        setAQI(result.list[0].main.aqi);
      })

    
}