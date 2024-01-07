import { useState } from "react";

import "./App.css";

import Switch from "./components/switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <Switch setState={setSwitch1} state={switch1} />
      <Switch setState={setSwitch2} state={switch2} />
      <Switch setState={setSwitch3} state={switch3} />

      <p className={switch1 && switch2 && switch3 ? "GO" : "NOWAY"}>
        {switch1 && switch2 && switch3 ? "GO !" : "NO WAY !"}
      </p>
    </div>
  );
}

export default App;
