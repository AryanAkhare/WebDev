import './App.css';
import NewProduct from './components/NewProduct';
import Product from './components/Product';

const response = [
  { itemName: "Nirma", day: "20", month: "June", year: "1998" },
  { itemName: "Rahul", day: "15", month: "March", year: "2000" },
  { itemName: "Ananya", day: "5", month: "December", year: "1995" }
];

function App() {

  function printProduct(data){

  }
  return (
    <div>
      <NewProduct print={printProduct}/>
      <Product products={response} />
    </div>
  );
}

export default App;
