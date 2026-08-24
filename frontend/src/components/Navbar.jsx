import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/manual" style={{ color: "white", marginRight: "20px" }}>
        Manual Prediction
      </Link>

      <Link to="/csv" style={{ color: "white" }}>
        CSV Upload
      </Link>
    </nav>
  );
}

export default Navbar;