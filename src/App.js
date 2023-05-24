import './App.css';
import ToDo from "./todo/ToDo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from "./homework-9/Parent";




function App() {


    return (
        <div className="App">

            <header className="">

                <Parent/>

                <ToDo/>

            </header>
        </div>
    );
}

export default App;
