import React, { useEffect, useState } from "react";
import { useFlash } from "./useFlash";
import styles from "./app.module.css";

export const CompoundWrapper = ({ children, shouldFlash }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let interval;
    if (shouldFlash) {
      interval = setInterval(() => setShow((pred) => !pred), 500);
    }
    return () => {
      clearInterval(interval);
    };
  }, [shouldFlash]);

  return (
    <>
      <div className={show && shouldFlash && styles.intervalBorder}>
        {children}
      </div>
    </>
  );
};
