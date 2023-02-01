import React from "react";
import style from "./OptionSelection.module.css";

export default function OptionSelection({ arrayItems }) {
  return (
    <>
      <div className={style.grid}>
        {arrayItems.map((item) => {
          return (
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
