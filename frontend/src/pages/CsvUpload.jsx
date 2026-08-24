import { useState } from "react";
import axios from "axios";

function CsvUpload() {

    const [file, setFile] = useState(null);

    const [message, setMessage] = useState("");

    const handleUpload = async () => {

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await axios.post(
                "http://127.0.0.1:5000/api/predict/csv",
                formData
            );

            setMessage(response.data.message);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>CSV Upload</h2>

            <input
                type="file"
                accept=".csv"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br /><br />

            <button onClick={handleUpload}>
                Upload CSV
            </button>

            <div>
                <h3>{message}</h3>

                {
                    message && (
                        <a
                            href="http://127.0.0.1:5000/api/download-results"
                            target="_blank"
                        >
                            Download Results CSV
                        </a>
                    )
                }
            </div>

        </div>


    );
}

export default CsvUpload;