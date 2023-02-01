import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./Options/index";

function App() {
  // console.log(arrayItems);
  // console.log(import.meta.env.VITE_OPENAI_API_KEY);
  return (
    <div>
      <OptionSelection arrayItems={arrayItems} />
      <Translation />
    </div>
  );
}

export default App;
