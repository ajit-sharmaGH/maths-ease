import "./simpleInterest.css";
import { useState } from "react";
const SIcomponent = () => {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(1);
  const [si, setSi] = useState(0);
  const [amount, setAmount] = useState(0);

  const calcSi = () => {
    setSi(Number(principle * rate * time) / 100);
    setAmount(Number(principle) + Number(principle * rate * time) / 100);
  };

  return (
    <div className="bg-theme-changer si_calculator_body">
      <div className="pt-2">
        <h3 className="flex-center"> SIMPLE INTEREST </h3>{" "}
        <div className="flex-col si_input_container pt-1">
          <h4 className="si_headings"> Enter the Principle (in ₹:) </h4>
          <input
            type="number"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
            placeholder="Enter principle..."
          />
          <h4 className="si_headings"> Enter the Rate (in %) </h4>{" "}
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate..."
          />
          <h4 className="si_headings"> Enter the Time (in years) </h4>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time..."
          />
        </div>{" "}
        <div className="si-btn">
          <button onClick={calcSi}>Click to Know Simple Interest </button>
        </div>{" "}
        {principle.length > 0 && rate.length > 0 && time.length > 0 ? (
          <div>
            <h3 className="flex-center mt-1">Simple Interest || ₹ {si} </h3>
            <h3 className="flex-center mt-1">Amount || ₹ {amount} </h3>
          </div>
        ) : (
          <h3 className="flex-center"> All inputs are Mandatory to Fill </h3>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export { SIcomponent };
