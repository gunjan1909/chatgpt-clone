import { useState } from "react";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./Options/index";
import { Configuration, OpenAIApi } from "openai";

function App() {
  // console.log(arrayItems);
  // console.log(import.meta.env.VITE_OPENAI_API_KEY);
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const submitBtn = async () => {
    setOption({ ...option, prompt: input });
    //console.log("submit button clicked");
    let obj = { ...option, prompt: input };
    const response = await openai.createCompletion(obj);
    setResult(response.data.choices[0].text);
  };
  // console.log(option);
  return (
    <div>
      {!Object.values(option).length ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : null}
      {Object.values(option).length ? (
        <Translation
          setInput={setInput}
          submitBtn={submitBtn}
          result={result}
        />
      ) : null}
    </div>
  );
}

export default App;
