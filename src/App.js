import './App.css';
import Product from "./homework-6/Product";
import Input from "./homework-7/Input";
import Conditional from "./homework-8/Conditional";
import ToDo from "./todo/ToDo";


const products = [
    {name:'banana', price: '200$',icon: '🍌'},
    {name:'orange', price: '20$', icon: '🍊'},
    {name:'lemon', price: '120$', icon: '🍋'}
]

function App() {
    const li = products.map((elem, index) =>{
        return <li key={index}>
            <Product name={elem.name} price={elem.price} icon={elem.icon} />
        </li>;
    })

    return (
        <div className="App">
            {/*<Conditional/>*/}
            {/*<Input/>*/}
            <header className="">

                <ToDo/>
                {/*<ol>*/}
                {/*    {li}*/}
                {/*</ol>*/}

            </header>
        </div>
    );
}

export default App;
