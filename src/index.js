import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./appWithUseFlash";
import { CatAndDogs } from "./CatAndDogs";
import { CompoundWrapper } from "./compound1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CompoundWrapper shouldFlash={false}>
      <App />
    </CompoundWrapper>
    <CompoundWrapper shouldFlash={false}>
      <CatAndDogs />
    </CompoundWrapper>
  </>
);
