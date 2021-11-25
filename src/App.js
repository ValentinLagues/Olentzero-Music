import "./App.css";
import Countdown from "./components/Countdown";
import Calendar from "./components/Calendar";
import CardList from "./components/CardsList";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <Countdown />
      <Calendar />
      <CardList />
    </div>
  );
}

export default App;
