// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav style={{ padding: "15px", background: "#222" }}>
//       <Link to="/" style={{ color: "white", marginRight: "20px" }}>
//         Home
//       </Link>

//       <Link to="/manual" style={{ color: "white", marginRight: "20px" }}>
//         Manual Prediction
//       </Link>

//       <Link to="/csv" style={{ color: "white", marginRight: "20px" }}>
//         CSV Upload
//       </Link>
    
//       <Link to="/about" style={{ color: "white", marginRight: "20px" }}>
//         About Attacks
//       </Link>

//       <Link to="/models" style={{ color: "white", marginRight: "20px" }}>
//         Model Comparison
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {

  const { darkMode, setDarkMode } =
    useTheme();

  return (
    <nav className="navbar">

      <div className="logo">
        🛡 WSN DoS Detection
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/manual">
          Manual Prediction
        </Link>

        <Link to="/csv">
          CSV Upload
        </Link>

        <Link to="/about">
          About Attacks
        </Link>

        <Link to="/models">
          Models
        </Link>

      </div>

      <button
        className="theme-btn"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;