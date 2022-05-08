import "./bmi.css";
import { useState } from "react";

const BodyMassIndex = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [msg, setMsg] = useState("click above button");
  const [color, setColor] = useState("");
  const [heightConvertor, setHeightConvertor] = useState(1);
  const [weightConvertor, setWeightConvertor] = useState(1);
  const calcBmi = () => {
    let bmi = (weight / (height * height * weightConvertor)) * heightConvertor;
    if (weight === 0 || weight === "" || height === 0 || height === "") {
      alert("Enter valid weight and height !");
    } else {
      setBmi(bmi.toFixed(2));
    }
    if (bmi < 16 || bmi === 0) {
      setMsg("Excessive Underweight, You Need medical therapy !");
      setColor("red");
    } else if (bmi > 16 && bmi <= 18.5) {
      setMsg("You Are Underweight, oops !");
    } else if (bmi > 18.5 && bmi <= 25) {
      setMsg("Your BMI is Normal, Healthy !");
      setColor("green");
    } else if (bmi > 25 && bmi < 40) {
      setMsg("You are Overweight, oops !");
    } else {
      setMsg("Excessive Overweight, You Need medical therapy !");
      setColor("red");
    }
  };
  const reload = () => {
    if (weight.length > 0 || height.length > 0) {
      setWeight(weight === 0);
      setHeight(height === 0);
    }
  };
  return (
    <div className="bg-theme-changer bmi_body">
      <div className="pt-2">
        <h3 className="flex-center"> BODY MASS INDEX </h3>{" "}
        <div className="flex-col bmi_input_container pt-1">
          <div className="flex-wrap selection-unit">
            <h3 className="bmi_headings"> Enter Your Weight </h3>
            <select
              className="select-property"
              value={weightConvertor}
              onChange={(e) => setWeightConvertor(e.target.value)}
            >
              <option value="1">kilograms</option>
              <option value="2.205">Pounds</option>
            </select>
          </div>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Select unit and enter your weight..."
          />
          <div className="flex-wrap selection-unit">
            <h3 className="bmi_headings"> Enter Your Height </h3>{" "}
            <select
              className="select-property"
              value={heightConvertor}
              onChange={(e) => setHeightConvertor(e.target.value)}
            >
              <option value="1">Meters</option>
              <option value="10000">Centimeters </option>

              <option value="10.75">feet</option>
              <option value="1549.99">Inches</option>
            </select>
          </div>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Select unit and enter your height..."
          />
        </div>{" "}
        <div className="bmi-btn">
          <button onClick={calcBmi}>Click to Know BMI </button>
        </div>{" "}
        <div className="bmi-reload-btn">
          <button onClick={reload}>Reload</button>
        </div>{" "}
        {weight.length > 0 && height.length > 0 > 0 ? (
          <div>
            <h3 className="flex-center mt-1">Bmi is || {bmi} </h3>
            <h3
              className="flex-center mt-1"
              style={{ color: color, textAlign: "center" }}
            >
              {" "}
              {msg}{" "}
            </h3>
          </div>
        ) : (
          <h3 className="flex-center"> All inputs are Mandatory to Fill </h3>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export { BodyMassIndex };
