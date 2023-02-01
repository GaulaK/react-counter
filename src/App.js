import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Header />
      <Counter counter={counter} setCounter={setCounter} />
      <Footer />
    </div>
  );
}

export default App;
