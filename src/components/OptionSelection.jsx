import React from "react";
import style from "./OptionSelection.module.css";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1>CHATGPT CLONE REACT</h1>
      <div className={style.grid}>
        {arrayItems.map((item) => {
          return (
            <div
              className={style.ingrid}
              onClick={() => selectOption(item.option)}
              key={item.id}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
