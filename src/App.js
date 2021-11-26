import { useState } from "react";
import "./App.css";
import CardList from "./components/CardsList";
import Modal from "./components/Modal";
import Countdown from "./components/Countdown";
import DarkMode from "./components/DarkMode";
import Snow from "./components/Snow";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

  return (
    <div className={darkMode ? "App-darkMode" : "App"}>
      <Snow darkMode={darkMode} />
      <Modal />
      <Countdown darkMode={darkMode} />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <CardList darkMode={darkMode} />
    </div>
  );
}

export default App;
