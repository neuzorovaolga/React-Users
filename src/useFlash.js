import React, { useEffect, useState } from "react";

function changeValue(value) {
  return !value;
}

export const useFlash = (timer) => {
  const [flashingOn, setFlashingOn] = useState(false);
  const [startSale, setStartSale] = useState(false);

  const clickStartSale = () => {
    setStartSale(changeValue);
  };

  useEffect(() => {
    let interval;
    if (startSale) {
      interval = setInterval(() => setFlashingOn(changeValue), timer);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startSale]);

  return {
    flashingOn,
    clickStartSale,
    startSale,
  };
};

// const flashingOn;
// const setFlashingOn = (state) => {
//   if (typeof state === "function") {
//     flashingOn = state(flashingOn);
//   } else {
//     flashingOn = state;
//   }
// };

// setFlashingOn(true);
// setFlashingOn((prev) => !prev);
