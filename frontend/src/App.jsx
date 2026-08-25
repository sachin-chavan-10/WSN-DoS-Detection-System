// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import ManualPrediction from "./pages/ManualPrediction";
// import CsvUpload from "./pages/CsvUpload";
// import About from "./pages/About";
// import ModelComparison from "./pages/ModelComparison";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/manual" element={<ManualPrediction />} />
//         <Route path="/csv" element={<CsvUpload />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/models" element={<ModelComparison />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManualPrediction from "./pages/ManualPrediction";
import CsvUpload from "./pages/CsvUpload";
import About from "./pages/About";
import ModelComparison from "./pages/ModelComparison";

import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manual" element={<ManualPrediction />} />
          <Route path="/csv" element={<CsvUpload />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<ModelComparison />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;