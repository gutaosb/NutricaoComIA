import { useState } from "react";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [cardapio, setCardapio] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {!cardapio ? (
        <HomePage onResult={(data) => setCardapio(data)} />
      ) : (
        <ResultPage cardapio={cardapio} onBack={() => setCardapio("")} />
      )}
    </div>
  );
}

export default App;
