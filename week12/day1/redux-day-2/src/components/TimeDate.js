import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TimeDate() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let time = new Date();
  const weather = useSelector((state) => state.weather);
  const [cTime, setTime] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="time-date">
      <p>
        {days[cTime.getDay()]}, {months[cTime.getMonth()]} {cTime.getDate()},{" "}
        {cTime
          .toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })
          .replace(" AM", "am")
          .replace(" PM", "pm")}
      </p>
      <h1>{weather.name}</h1>
    </div>
  );
}
