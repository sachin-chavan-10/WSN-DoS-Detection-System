function ModelComparison() {

  const models = [
    {
      name: "Logistic Regression",
      accuracy: "93.43%",
      trainTime: "116.67 s",
      memory: "67.92 MB"
    },
    {
      name: "Decision Tree (17 Features)",
      accuracy: "99.47%",
      trainTime: "1.96 s",
      memory: "8.55 MB"
    },
    {
      name: "Random Forest (17 Features)",
      accuracy: "99.72%",
      trainTime: "26.17 s",
      memory: "85.93 MB"
    },
    {
      name: "XGBoost (17 Features)",
      accuracy: "99.67%",
      trainTime: "18.46 s",
      memory: "18.55 MB"
    },
    {
      name: "Decision Tree (Top 10)",
      accuracy: "99.41%",
      trainTime: "0.99 s",
      memory: "34.30 MB"
    },
    {
      name: "Random Forest (Top 10)",
      accuracy: "99.59%",
      trainTime: "30.58 s",
      memory: "95.25 MB"
    },
    {
      name: "Decision Tree (Top 5)",
      accuracy: "99.09%",
      trainTime: "2.07 s",
      memory: "~0 MB"
    },
    {
      name: "Random Forest (Top 5)",
      accuracy: "99.18%",
      trainTime: "49.24 s",
      memory: "37.30 MB"
    }
  ];

  return (
    <div className="model-container">

      <div className="model-hero">
        <h1>🏆 Model Comparison Dashboard</h1>
        <p>
          Performance comparison of machine learning models trained on the
          WSN-DS dataset for DoS attack detection.
        </p>
      </div>

      <div className="model-stats">

        <div className="model-stat-card">
          <h2>8</h2>
          <p>Models Tested</p>
        </div>

        <div className="model-stat-card">
          <h2>99.72%</h2>
          <p>Best Accuracy</p>
        </div>

        <div className="model-stat-card">
          <h2>WSN-DS</h2>
          <p>Dataset</p>
        </div>

        <div className="model-stat-card">
          <h2>DT Top-5</h2>
          <p>Manual Deployment</p>
        </div>

      </div>

      <div className="model-table-card">

        <h2>Model Performance</h2>

        <table className="model-table">

          <thead>
            <tr>
              <th>Model</th>
              <th>Accuracy</th>
              <th>Training Time</th>
              <th>Memory</th>
            </tr>
          </thead>

          <tbody>

            {models.map((m) => (

              <tr key={m.name}>
                <td>{m.name}</td>

                <td>{m.accuracy}</td>
                <td>{m.trainTime}</td>
                <td>{m.memory}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="deployment-section">

        <div className="deployment-card">

          <h2>⚡ Manual Prediction Model</h2>

          <h3>Decision Tree (Top 5 Features)</h3>

          <p>
            Accuracy: <strong>99.09%</strong>
          </p>

          <p>
            Selected because it requires only 5 user inputs,
            making it lightweight and ideal for manual prediction.
          </p>

        </div>

        <div className="deployment-card">

          <h2>📁 CSV Analysis Model</h2>

          <h3>Decision Tree (17 Features)</h3>

          <p>
            Accuracy: <strong>99.47%</strong>
          </p>

          <p>
            Selected because it uses all available WSN features,
            providing more detailed attack analysis.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ModelComparison;