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
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Manual Prediction</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="number"
          name="Is_CH"
          placeholder="Is_CH"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="ADV_S"
          placeholder="ADV_S"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="SCH_S"
          placeholder="SCH_S"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="Data_Sent_To_BS"
          placeholder="Data_Sent_To_BS"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          step="any"
          name="Expaned Energy"
          placeholder="Expaned Energy"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Predict
        </button>

      </form>

      <h3>Prediction: {result}</h3>

    </div>
  );
}

export default ManualPrediction;