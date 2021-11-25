import "./App.css";
import CardList from "./components/CardsList";
import Modal from "./components/Modal";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="App">
      <Modal />
      <Countdown />
      <CardList />
    </div>
  );
}

export default App;
