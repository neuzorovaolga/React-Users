import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import { useFlash } from "./useFlash";

function changeValue(value) {
  return !value;
}

export const App = () => {
  const [toggleButton, setToggleButton] = useState(true);
  const { flashingOn, clickStartSale, startSale } = useFlash(500);

  const clickToggleButton = () => {
    setToggleButton(changeValue);
  };

  return (
    <>
      <div
        className={`${styles.wrapper} && ${
          flashingOn && startSale && styles.intervalBorder
        }`}
      >
        {toggleButton && <h1>Sale!!</h1>}
      </div>
      <div className={styles.button}>
        <button onClick={clickToggleButton}>Toggle sale</button>
        <button onClick={clickStartSale}>Start sale</button>
      </div>
    </>
  );
};
