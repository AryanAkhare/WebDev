import { useState } from 'react'
import './App.css'
import Tours from './components/Tours.jsx'
import data from './data'
import Footer from './components/Footer.jsx'
function App() {
  const [tours, setTours] = useState(data) // <- must be 'data'
  function removeTour(id){
        const newTours=tours.filter(tour => tour.id!=id)
        setTours(newTours)
    }
  //if all not inerested
  if(tours.length==0){
    return(
      <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">

      <Tours tours={tours} removeTour={removeTour}/>  {/* pass tours as prop */}

      <Footer></Footer>
    </div>
  )
}

export default App
