import React, { useState, useEffect } from "react";

const NumberAnimation = ({ value, duration, color }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      start += increment;
      setNumber(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          marginRight: "10px",
          animation: "fill " + duration / 1000 + "s forwards",
        }}
      >
        {number}
      </div>
      <span style={{ fontSize: "24px" }}>Years of experience</span>
    </div>
  );
};

export default NumberAnimation;
