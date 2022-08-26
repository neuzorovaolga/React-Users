import React, { useEffect, useState } from "react";
import { useFlash } from "./useFlash";

const topic = {
  cat: {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    name: "cat",
  },
  dog: {
    img:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    name: "dog",
  },
};

export const CatAndDogs = () => {
  const { flashingOn, clickStartSale } = useFlash(500);
  const { cat, dog } = topic;
  let name = flashingOn ? cat.name : dog.name;
  let img = flashingOn ? cat.img : dog.img;

  return (
    <>
      <button onClick={clickStartSale}>Topic</button>
      <div>
        <h1>{name}</h1>
        <img src={img} />
      </div>
    </>
  );
};
