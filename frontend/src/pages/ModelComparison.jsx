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
    <div style={{ padding: "20px" }}>
      <h1>Model Comparison</h1>

      <table border="1">
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

      <h2>Final Models Selected for Deployment</h2>

<div>
  <h3>Manual Prediction</h3>
  <p>
    Decision Tree Top-5 Features
  </p>
  <p>
    Chosen because it achieves 99.09% accuracy while requiring only 5 input features,
    making it lightweight and suitable for quick manual prediction.
  </p>
</div>

<div>
  <h3>CSV Prediction</h3>
  <p>
    Decision Tree (17 Features)
  </p>
  <p>
    Chosen because it achieves 99.47% accuracy and utilizes all network features,
    providing more detailed analysis of uploaded WSN data.
  </p>
</div>
    </div>
  );
}

export default ModelComparison;