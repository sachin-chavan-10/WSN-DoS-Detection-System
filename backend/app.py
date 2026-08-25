from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os
import pandas as pd

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)
CORS(app)

# Load models
dt_top5 = joblib.load("models/dt_lightweight_top5.pkl")
le = joblib.load("models/label_encoder.pkl")

dt = joblib.load(
    "models/dt_full_17_features.pkl"
)

@app.route("/")
def home():
    return "WSN DoS Detection API"

@app.route("/api/health")
def health():
    return {
        "status": "success",
        "message": "WSN DoS Detection API is running"
    }

@app.route("/api/predict/manual", methods=["POST"])
def predict_manual():

    data = request.json

    features = [
        data["Is_CH"],
        data["ADV_S"],
        data["Expaned Energy"],
        data["Data_Sent_To_BS"],
        data["SCH_S"]
    ]

    prediction = dt_top5.predict([features])[0]

    attack_type = le.inverse_transform([prediction])[0]

    return jsonify({
        "prediction": attack_type
    })

@app.route("/api/predict/csv", methods=["POST"])
def predict_csv():

    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)

    file.save(filepath)

    df = pd.read_csv(filepath)

    # Remove Attack type if present
    if "Attack type" in df.columns:
        df = df.drop(columns=["Attack type"])

    predictions = dt.predict(df)

    attack_names = le.inverse_transform(predictions)

    df["Predicted Attack"] = attack_names

    preview = df.head(20).to_dict(orient="records")

    attack_counts = pd.Series(attack_names).value_counts().to_dict()

    result_path = os.path.join(
        UPLOAD_FOLDER,
        "prediction_results.csv"
    )

    df.to_csv(result_path, index=False)

    attack_counts = pd.Series(attack_names).value_counts().to_dict()

    return jsonify({
    "message": "Prediction completed",
    "rows_processed": len(df),
    "attack_counts": attack_counts,
    "preview": preview
})

from flask import send_file

@app.route("/api/download-results")
def download_results():
    return send_file(
        "uploads/prediction_results.csv",
        as_attachment=True
    )

if __name__ == "__main__":
    app.run(debug=True)