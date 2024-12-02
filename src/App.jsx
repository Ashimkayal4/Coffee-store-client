import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedCoffees);
  return (
    <div className="mt-4">
      <h1>Total coffee : {coffees.length} </h1>
      <div className="grid grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee} 
            setCoffees={setCoffees}  
            coffees={coffees}
          >   
          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
