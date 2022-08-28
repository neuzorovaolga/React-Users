import React, { useState } from "react";
import styles from "./user.module.css";
import downArrow from "./img/down-arrow (1).png";
import upArrow from "./img/up-arrow (1).png";

export const User = ({ userInfo }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.wrapper} ${isActive && styles.wrapperInfo}`}>
      <div className={`${styles.title} ${isActive && styles.titleInfo}`}>
        <img src={userInfo.avatar} className={styles.img} />
        <h2 className={styles.h2}>{userInfo.first_name}</h2>
        <p className={styles.p} onClick={() => setIsActive(!isActive)}>
          {isActive ? <img src={upArrow} /> : <img src={downArrow} />}
        </p>
      </div>
      {isActive && (
        <>
          <div className={styles.line}></div>
          <div className={styles.info}>
            <h3>
              {userInfo.first_name} {userInfo.last_name}
            </h3>
            <p>{userInfo.email}</p>
          </div>
        </>
      )}
    </div>
  );
};
