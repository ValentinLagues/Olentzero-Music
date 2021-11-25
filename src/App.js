import "./App.css";
import Calendar from "./components/Calendar";
import CardList from "./components/CardsList";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <Calendar />
      <CardList />
    </div>
  );
}

export default App;
