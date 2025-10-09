import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';



const response = [
  {
    itemName: "Nirma",
    day: "20",
    month: "June",
    year: "1998"
  },
  {
    itemName: "Rahul",
    day: "15",
    month: "March",
    year: "2000"
  },
  {
    itemName: "Ananya",
    day: "5",
    month: "December",
    year: "1995"
  }
];

function App() {
  return (
    <div>
      {response.map((item, index) => (
        <div key={index}>
          <Item name={item.itemName} />
          <ItemDate day={item.day} month={item.month} year={item.year} />
        </div>
      ))}
    </div>
  );
}

export default App;
