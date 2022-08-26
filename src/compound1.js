import React, { useEffect, useState } from "react";
import { useFlash } from "./useFlash";
import styles from "./app.module.css";

export const CompoundWrapper = ({ children, shouldFlash }) => {
  const { flashingOn, clickStartSale } = useFlash(500);

  useEffect(() => {
    if (shouldFlash) {
      clickStartSale();
    }
  }, [shouldFlash]);

  return (
    <>
      <div className={flashingOn && shouldFlash && styles.intervalBorder}>
        {children}
      </div>
    </>
  );
};
