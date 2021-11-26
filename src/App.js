import { useState } from "react";
import "./App.css";
import CardList from "./components/CardsList";
import Modal from "./components/Modal";
import Countdown from "./components/Countdown";
import DarkMode from "./components/DarkMode";
import Snow from "./components/Snow";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Snow />
      <Modal />
      <Countdown />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <CardList />
    </div>
  );
}

export default App;
