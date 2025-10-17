import { useEffect, useState } from "react";
import { toast } from "react-toastify"; // add toast for error handling
import Navbar from "./components/Navbar";
import {apiUrl,filterData} from "./data";
import Cards from "./components/Cards"

import Filter from "./components/Filter";


function App() {

  const[courses,setCourses]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response =await fetch(apiUrl);
        const data=await response.json();

        // Save courses array from API response
        setCourses(data.data);
      }
      catch(e){
          // Use toast.error to display an error notification
          toast.error("Something went wrong.")
      }
    }
    fetchData()
  },[])

  return (
    <div className="">

      
      {/* Render the navbar */}
      <Navbar></Navbar>
      {/* Pass filterData as a prop to Filter and ensure it renders buttons */}
      <Filter filterData={filterData}>

      </Filter>
      {/* Cards currently relies on components that may be stubs; keep or remove as needed */}
      <Cards courses={courses}></Cards>
    </div>
  );
}
// Removed invalid import here. All imports must be at the top of the file.

export default App;
