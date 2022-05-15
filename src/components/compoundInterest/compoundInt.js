import "./compoundInt.css";
import { useState } from "react";
const CIcomponent = () => {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [ci, setCi] = useState(0);
  const [compounding, setCompounding] = useState(1);

  const calcCi = () => {
    setCi(
      Number(
        principle * Math.pow(1 + rate / (100 * compounding), compounding * time)
      ).toFixed(2)
    );
  };

  return (
    <div className="bg-theme-changer ci_calculator_body">
      <div className="pt-2">
        <h3 className="flex-center"> COMPOUND INTEREST </h3>{" "}
        <div className="flex-col ci_input_container pt-1">
          <h4 className="si_headings"> Enter the Principle( in ₹: ) </h4>{" "}
          <input
            type="number"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder="Enter principle..."
          />
          <h4 className="ci_headings"> Enter the Rate( in % ) </h4>{" "}
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate..."
          />
          <h4 className="ci_headings"> Enter the Time( in years) </h4>{" "}
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time..."
          />
          <h4 className="ci_headings">
            {" "}
            Compounding (Ex: quarterly, annually..){" "}
          </h4>{" "}
          <select
            value={compounding}
            name="compounding-methods"
            onChange={(e) => setCompounding(e.target.value)}
          >
            <option value="1">Annually</option>
            <option value="4">Quarterly</option>
            <option value="2">Semi-Annually</option>
            <option value="12">Monthly</option>
            <option value="6">Bi-Monthly</option>
            <option value="365">Daily</option>
            <option value="52">Weekly</option>
            <option value="26">Bi-Weekly</option>
            <option value="24">Semi-Monthly</option>
          </select>
        </div>{" "}
        <div className="ci-btn">
          <button onClick={calcCi}> Click to Know Compound Interest </button>{" "}
        </div>{" "}
        {principle.length > 0 && rate.length > 0 && time.length > 0 ? (
          <div>
            <h3 className="flex-center mt-1"> Principle || ₹{principle} </h3>{" "}
            <h3 className="flex-center mt-1">
              {" "}
              Interest || ₹{(ci - principle).toFixed(2)}{" "}
            </h3>{" "}
            <h3 className="flex-center mt-1"> Amount || ₹{ci} </h3>{" "}
          </div>
        ) : (
          <h3 className="flex-center"> All inputs are Mandatory to Fill </h3>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export { CIcomponent };
