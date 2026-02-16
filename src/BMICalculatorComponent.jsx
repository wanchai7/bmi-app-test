// src/BMICalculatorComponent.jsx
import React, { useState } from "react";
import BMICalculator from "./BMICalculator";
//const BMICalculator = require("./BMICalculator");
function BMICalculatorComponent() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleCalculate = () => {
    const calculator = new BMICalculator();
    const bmiValue = calculator.calculateBMI(
      parseFloat(weight),
      parseFloat(height)
    );
    const interpretationValue = calculator.interpretBMI(bmiValue);

    setBMI(bmiValue.toFixed(2));
    setInterpretation(interpretationValue);
  };

  return (
    <div>
      <h1>Software Engineering</h1>
      <div>
        <label>น้ำหนัก (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>ส่วนสูง (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate BMI</button>
      {bmi && <p>ค่า BMI ของคุณ: {bmi}</p>}
      {interpretation && <p>ค่าน้ำหนักของคุณ: {interpretation}</p>}
    </div>
  );
}

export default BMICalculatorComponent;
