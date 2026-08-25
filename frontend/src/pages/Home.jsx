import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">

        <h1>
          🛡 Wireless Sensor Network DoS Detection System
        </h1>

        <p>
          Detection of Denial of Service Attacks in Wireless Sensor Networks
          using Lightweight Machine Learning Models.
        </p>

        <div className="hero-buttons">
          <Link to="/manual" className="btn-primary">
            Manual Prediction
          </Link>

          <Link to="/csv" className="btn-secondary">
            CSV Analysis
          </Link>
        </div>

      </section>

      {/* Stats Section */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>99.47%</h2>
          <p>Accuracy</p>
        </div>

        <div className="stat-card">
          <h2>374,661</h2>
          <p>Dataset Records</p>
        </div>

        <div className="stat-card">
          <h2>5</h2>
          <p>Attack Classes</p>
        </div>

        <div className="stat-card">
          <h2>17</h2>
          <p>Features Used</p>
        </div>

      </section>

      {/* Project Overview */}

      <section className="info-card">

        <h2>Project Overview</h2>

        <p>
          This system detects Denial of Service attacks in Wireless Sensor
          Networks using machine learning models trained on the WSN-DS dataset.
        </p>

        <p>
          The project supports both manual prediction using selected lightweight
          features and bulk prediction through CSV file uploads.
        </p>

      </section>

      {/* Architecture */}

      <section className="info-card">

        <h2>System Architecture</h2>

        <div className="architecture">

          <div className="arch-box">
            WSN Data
          </div>

          <div className="arch-arrow">
            ↓
          </div>

          <div className="arch-box">
            React Frontend
          </div>

          <div className="arch-arrow">
            ↓
          </div>

          <div className="arch-box">
            Flask API
          </div>

          <div className="arch-arrow">
            ↓
          </div>

          <div className="arch-box">
            ML Model
          </div>

          <div className="arch-arrow">
            ↓
          </div>

          <div className="arch-box">
            Attack Detection
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;