import { useState } from "react";

import "./App.css";

import Switch from "./components/switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <Switch setState={setSwitch1} />
      <Switch setState={setSwitch2} />
      <Switch setState={setSwitch3} />
    </div>
  );
}

export default App;
