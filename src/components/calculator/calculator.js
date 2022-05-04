import "./calculator.css";
import {useState} from 'react';
const Calculator = () => {

  const [numberOne, setNumberOne] = useState(null);
  const [numberTwo, setNumberTwo] = useState(null);
  const [total , setTotal  ] = useState(null);
  const addNumbers =()=>{
  setTotal (Number(numberOne) + Number(numberTwo)); /**by default it behaves like string so added Number**/
  }
  const subNumbers =()=>{
  setTotal(numberOne - numberTwo);
  }
  const multiNumbers =()=>{
  setTotal(numberOne * numberTwo);
  }
  const divideNumbers =()=>{
  setTotal(numberOne / numberTwo);
  }

  return (
    <div className="bg-theme-changer calculator_body">
      <div className="pt-2">
        <h3 className="flex-center">SIMPLE CALCULATOR</h3>
        <div className="flex-col input_container">
         <input type="number" value={numberOne} onChange={(e)=>setNumberOne(e.target.value)} placeholder="Enter the first no..."/>
         <input type="number" value={numberTwo}  onChange={ (e)=>setNumberTwo(e.target.value)} placeholder="Enter the second no..." />
         </div>
         <div className="calculator_btn">
           <button onClick={addNumbers}><i className="fa fa-plus"></i></button>
           <button onClick={subNumbers}><i className="fa fa-minus"></i></button>
           <button onClick={multiNumbers}><i className="fa fa-multiply"></i></button>
           <button onClick={divideNumbers}><i className="fa fa-divide"></i></button>
         </div>
         {numberTwo.length>0 && numberOne.length>0 ? (
 <h2 className="flex-center">
 {total}</h2>
         ):(
           <h3 className="flex-center">Give Some value to both Inputs</h3>
         )}
        
      </div>
    </div>
  );
};
export { Calculator };
