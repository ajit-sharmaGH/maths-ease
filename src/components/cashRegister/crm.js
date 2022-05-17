import "./crm.css";
import { useState } from "react";
export const CashRegister = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [cashGiven, setCashGiven] = useState(0);
  const [msg, setShowMsg] = useState("Enter Bill Amount");
  
  const initialState = [
    { val: "1", count: 0, id: 1 },
    { val: "5", count: 0, id: 2 },
    { val: "10", count: 0, id: 3 },
    { val: "20", count: 0,  id: 4 },
    { val: "50", count: 0, id: 5 },
    { val: "100", count: 0, id: 6 },
    { val: "500", count: 0, id: 7 },
    { val: "2000", count: 0, id: 8 },
  ];
  const [numberOfNotes, setNumberOfNotes] = useState(initialState);
  
  const availableNotes = [2000, 500, 100,50, 20, 10, 5, 1];

  let checkNotes = () => {
    if (Number(billAmount) > 0) {
      if (Number(cashGiven) >Number(billAmount)) {
        setShowMsg(false);
        const amountToBeReturned = Number(cashGiven) - Number(billAmount);
        calculateChange(amountToBeReturned);
      }else if(Number(billAmount)===Number(cashGiven)){
        setShowMsg("Ho gya patte satte !");
      }
      
      else {
        setShowMsg("you are paying less amount !");
      }
    } else {
      setShowMsg("Please enter a valid bill Amount !");
    }
  };

  const calculateChange = (amountToBeReturned) => {
    var copyArr = numberOfNotes;
    for (let i = 0; i < availableNotes.length; i++) {
      if (Math.trunc(amountToBeReturned / availableNotes[i]) > 0) {
        let noteCount = Math.trunc(
          Number(amountToBeReturned) / availableNotes[i]
        );
      
        const temp = copyArr.map((note) =>
          note.val === availableNotes[i].toString()
            ? { ...note, count: noteCount  }
            : note
           
        );
       
        copyArr = temp;
        amountToBeReturned = amountToBeReturned % availableNotes[i];
      }
    }
    setNumberOfNotes(copyArr);
  };

  return (
    <div className="container flex-col-center bg-theme-changer">
      <h1 className="heading flex-center mt-1">Cash Register Manager</h1>
      <h3 className="description margin-1 flex-center">
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </h3>
      <div className="flex-col-center mr-1 mb-1  ml-1">
        <section className="mt-1 flex-col-center">
          <label htmlFor="bill-amount"> ENTER THE BILL AMOUNT </label>
          <input
            className="input-container mt-1"
            type="number"
            value={billAmount}
            onChange={(e) => {
              setBillAmount(e.target.value);
              setNumberOfNotes(initialState);
            }}
          />
        </section>
        <section className="mt-1 flex-col-center">
          <label htmlFor="given-amount">ENTER THE AMOUNT GIVEN </label>
          <input
            className="input-container mt-1"
            type="number"
            value={cashGiven}
            onChange={(e) => {
              setCashGiven(e.target.value);
              setNumberOfNotes(initialState);
            }}
          />
        </section>
      </div>
      <button className="check-button mb-2 mt-1" onClick={checkNotes}>
        CHECK
      </button>
      <label className="mb-1"> {msg}</label>
      <label className="mb-2"> CHANGE TO RETURN</label>
      <div className="notes-container">
        <tbody className="table-bg-color  table-body">
          <span className="spaning-text">Number of Notes</span>
          {numberOfNotes.map((note) => {
            return (
              <table className="table_showing-output" key={note.id}>
                <tr>
                  <td>{note.count}</td>
                </tr>
              </table>
            );
          })}
        </tbody>
        <tbody className="table-bg-color table-body">
          <span className="spaning-text">Notes Available</span>
          {numberOfNotes.map((note) => {
            return (
              <table className="table_showing-output" key={note.id}>
                <tr>
                  <td>{note.val}</td>
                </tr>
              </table>
            );
          })}
        </tbody>
      </div>
    </div>
  );
};
