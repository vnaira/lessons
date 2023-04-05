import logo from './logo.svg';
import './App.css';
import User from './User'

function Greeting(props){
  return (<div className="main">
    <h3>Hello, I'm student</h3>
  </div>);
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <User name='John' />
      <User name='Davit' age={25}/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Greeting />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Greeting/>

        </a>
      </header>
    </div>
  );
}

export default App;
