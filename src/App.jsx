import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Question from "./pages/Question";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question/:id" element={<Question />} />
    </Routes>
  );
}

export default App;
