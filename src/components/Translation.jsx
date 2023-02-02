import React from "react";
import style from "./Translation.module.css";

export default function Translation({ submitBtn, setInput, result }) {
  return (
    <div>
      <textarea
        className={style.textarea}
        name=""
        placeholder="Type prompt here..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
      <button onClick={submitBtn} className={style.submitBtn}>
        SUBMIT
      </button>

      <h3 className={style.resultText}>{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
