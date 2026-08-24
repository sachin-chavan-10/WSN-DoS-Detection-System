import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManualPrediction from "./pages/ManualPrediction";
import CsvUpload from "./pages/CsvUpload";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manual" element={<ManualPrediction />} />
        <Route path="/csv" element={<CsvUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;