import { CalculatorPage } from "./pages/calculator.js";
import { CashRegisterPage } from "./pages/cashRegisterPage";
import "./components/calculator/calculator.css";
import { HomePage } from "./pages/home.js";
import { SIpage } from "./pages/simpleInt.js";
import { CIpage } from "./pages/compoundInt.js";
import { BodyMassIndexPage } from "./pages/bmi.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/calculator" element={<CalculatorPage />} />{" "}
        <Route path="/si" element={<SIpage />} />{" "}
        <Route path="/ci" element={<CIpage />} />{" "}
        <Route path="/bmi" element={<BodyMassIndexPage />} />{" "}
        <Route path="/crm" element={<CashRegisterPage />} />{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;
