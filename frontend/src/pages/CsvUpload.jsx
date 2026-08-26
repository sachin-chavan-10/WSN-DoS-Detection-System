import { useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function CsvUpload() {
    const [preview, setPreview] = useState([]);
    const [attackCounts, setAttackCounts] = useState({});

    const [file, setFile] = useState(null);

    const [message, setMessage] = useState("");
    const chartData = Object.entries(attackCounts).map(
  ([attack, count]) => ({
    attack,
    count
  })
);

    const handleUpload = async () => {

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await axios.post(
                "https://wsn-dos-detection-system.onrender.com/api/predict/csv",
                formData
            );

            setMessage(response.data.message);
            setPreview(response.data.preview);
            setAttackCounts(response.data.attack_counts);

        } catch (error) {
            console.log(error);
        }
    };

    // return (
    //     <div style={{ padding: "20px" }}>

    //         <h2>CSV Upload</h2>

    //         <input
    //             type="file"
    //             accept=".csv"
    //             onChange={(e) => setFile(e.target.files[0])}
    //         />

    //         <br /><br />

    //         <button onClick={handleUpload}>
    //             Upload CSV
    //         </button>

    //         <div>
    //             <h3>{message}</h3>

    //             {Object.keys(attackCounts).length > 0 && (
    //             <div>
    //                 <h3>Attack Summary</h3>

    //                 {Object.entries(attackCounts).map(([attack, count]) => (
    //                 <p key={attack}>
    //                     {attack}: {count}
    //                 </p>
    //                 ))}
    //             </div>
    //             )}

    //             <h2>Attack Distribution</h2>

    //             <PieChart width={400} height={300}>
    //             <Pie
    //                 data={chartData}
    //                 dataKey="count"
    //                 nameKey="attack"
    //                 outerRadius={100}
    //                 label
    //             >
    //                 {chartData.map((entry, index) => (
    //                 <Cell key={index} />
    //                 ))}
    //             </Pie>
    //             <Tooltip />
    //             </PieChart>

    //             <BarChart width={500} height={300} data={chartData}>
    //             <CartesianGrid strokeDasharray="3 3" />
    //             <XAxis dataKey="attack" />
    //             <YAxis />
    //             <Tooltip />
    //             <Bar dataKey="count" />
    //             </BarChart>

    //             {
    //             preview.length > 0 && (
    //                 <div>

    //                 <h3>Prediction Results</h3>

    //                 <table border="1">

    //                     <thead>
    //                     <tr>
    //                         {Object.keys(preview[0]).map((key) => (
    //                         <th key={key}>{key}</th>
    //                         ))}
    //                     </tr>
    //                     </thead>

    //                     <tbody>
    //                     {preview.map((row, index) => (
    //                         <tr key={index}>
    //                         {Object.values(row).map((value, i) => (
    //                             <td key={i}>{value}</td>
    //                         ))}
    //                         </tr>
    //                     ))}
    //                     </tbody>

    //                 </table>

    //                 </div>
    //             )
    //             }

    //             {
    //                 message && (
    //                     <a
    //                         href="http://127.0.0.1:5000/api/download-results"
    //                         target="_blank"
    //                     >
    //                         Download Results CSV
    //                     </a>
    //                 )
    //             }
    //         </div>

    //     </div>


    // );

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6"
];

    return (
  <div className="csv-container">

    <div className="csv-card">

      <h1>📁 CSV Attack Analysis</h1>

      <p>
        Upload a WSN dataset CSV file and analyze attack patterns.
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="upload-btn"
        onClick={handleUpload}
      >
        Upload & Analyze
      </button>

      {message && (
        <div className="success-message">
          ✅ {message}
        </div>
      )}

    </div>

    {Object.keys(attackCounts).length > 0 && (

      <div className="summary-section">

        <h2>Attack Summary</h2>

        <div className="summary-grid">

          {Object.entries(attackCounts).map(
            ([attack, count]) => (

              <div
                key={attack}
                className="summary-card"
              >
                <h3>{count}</h3>
                <p>{attack}</p>
              </div>

            )
          )}

        </div>

      </div>

    )}

    {chartData.length > 0 && (

      <div className="charts-container">

        <div className="chart-card">

          <h2>Pie Chart</h2>

          <PieChart width={400} height={300}>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="attack"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                  <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                  />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

        </div>

        <div className="chart-card">

          <h2>Bar Chart</h2>

          <BarChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="attack" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>

        </div>

      </div>

    )}

    {preview.length > 0 && (

      <div className="table-card">

        <h2>Prediction Results</h2>

        <table className="results-table">

          <thead>
            <tr>
              {Object.keys(preview[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {preview.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    )}

    {message && (

      <div className="download-section">

        <a
          className="download-btn"
          href="http://127.0.0.1:5000/api/download-results"
          target="_blank"
        >
          Download Results CSV
        </a>

      </div>

    )}

  </div>
);
}

export default CsvUpload;