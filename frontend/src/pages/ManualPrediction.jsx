import { useState } from "react";
import axios from "axios";

function ManualPrediction() {
  const [formData, setFormData] = useState({
    Is_CH: "",
    ADV_S: "",
    SCH_S: "",
    Data_Sent_To_BS: "",
    "Expaned Energy": ""
  });

  const [result, setResult] = useState("");

  const attackInfo = {
    Normal: {
      risk: "Low",
      color: "#22c55e",
      description: "Normal network behavior detected."
    },
    TDMA: {
      risk: "Medium",
      color: "#f59e0b",
      description: "Potential manipulation of TDMA scheduling."
    },
    Grayhole: {
      risk: "Medium",
      color: "#f59e0b",
      description: "Node selectively drops packets."
    },
    Blackhole: {
      risk: "High",
      color: "#ef4444",
      description: "Malicious node drops all packets."
    },
    Flooding: {
      risk: "Critical",
      color: "#dc2626",
      description: "Massive packet flooding causing network congestion."
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/predict/manual",
        formData
      );

      setResult(response.data.prediction);
    } catch (error) {
      console.log(error);
      alert("Prediction Failed");
    }
  };

  return (
    <div className="manual-container">

      <div className="manual-card">

        <h1>🛡 Manual Attack Prediction</h1>

        <p>
          Enter the Top-5 important features and predict the attack type.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Is_CH</label>
            <input
              type="number"
              name="Is_CH"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>ADV_S</label>
            <input
              type="number"
              name="ADV_S"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>SCH_S</label>
            <input
              type="number"
              name="SCH_S"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Data_Sent_To_BS</label>
            <input
              type="number"
              name="Data_Sent_To_BS"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Expaned Energy</label>
            <input
              type="number"
              step="any"
              name="Expaned Energy"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="predict-btn"
          >
            Predict Attack
          </button>

        </form>

      </div>

      {result && (

        <div className="result-card">

          <h2>Prediction Result</h2>

          <h1>{result}</h1>

          <div
            className="risk-badge"
            style={{
              background: attackInfo[result].color
            }}
          >
            {attackInfo[result].risk} Risk
          </div>

          <p>
            {attackInfo[result].description}
          </p>

        </div>

      )}

    </div>
  );
}

export default ManualPrediction;