import logo from "./logo.svg";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";
import Randome from "./components/random";


//jsx


function App() {
  const expenses =[ { title: "car insurance", amount: 10380 },{ title: "bike insurance", amount:69765 },{ title: "cock insurance", amount: 11869 }]
  return (
    <div className="App">
      <h1>eka modaledadama</h1>
    
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
      <button onclick={titlechange()}>click</button>
      <Randome></Randome>
    </div>
  );
}

export default App;
