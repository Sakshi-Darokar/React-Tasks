import { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState("");
  const [conversion, setConversion] = useState("CtoF");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (temperature === "") {
      setResult("Please enter temperature");
      return;
    }

    let converted;

    if (conversion === "CtoF") {
      converted = (parseFloat(temperature) * 9) / 5 + 32;
      setResult(`${converted.toFixed(2)} °F`);
    } else {
      converted = ((parseFloat(temperature) - 32) * 5) / 9;
      setResult(`${converted.toFixed(2)} °C`);
    }
  };

  const resetFields = () => {
    setTemperature("");
    setResult("");
    setConversion("CtoF");
  };

  return (
    <div className="container">
      <div className="converter">

        <h1>🌡 Temperature Converter</h1>

        <input
          type="number"
          placeholder="Enter Temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />

        <select
          value={conversion}
          onChange={(e) => setConversion(e.target.value)}
        >
          <option value="CtoF">
            Celsius → Fahrenheit
          </option>

          <option value="FtoC">
            Fahrenheit → Celsius
          </option>
        </select>

        <div className="buttons">

          <button onClick={convertTemperature}>
            Convert
          </button>

          <button className="reset" onClick={resetFields}>
            Reset
          </button>

        </div>

        <h2>{result}</h2>

      </div>
    </div>
  );
}

export default App;