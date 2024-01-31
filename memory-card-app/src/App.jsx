import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
    </>
  );
}

export default App;
