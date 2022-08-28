import React, { useEffect, useState } from "react";
import { User } from "./user";
import styles from "./app.module.css";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${number}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setUsers(() => {
          return data.data;
        });
      });
  }, []);

  return (
    <>
      <h1 className={styles.h1}>USERS</h1>
      <div className={styles.wrapper}>
        {users.map((user) => {
          return <User userInfo={user} />;
        })}
      </div>
    </>
  );
};
