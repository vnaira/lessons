import './App.css';
import Counter from "./Counter";
import Product from "./homework-6/Product";

function Greeting(props){

  return (
      <div className="main">
    <h3>Hello, I'm student</h3>
  </div>
  );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <p><Product name="banana " price="2$ "/></p>
          <p><Product name="banana " price="3$ "/></p>
          <Counter defaultValue={20}/>
          <Greeting />
          <Greeting/>

      </header>
    </div>
  );
}

export default App;
