import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Beers from "./pages/Beers";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
      </Routes>
    </div>
  );
}

export default App;
