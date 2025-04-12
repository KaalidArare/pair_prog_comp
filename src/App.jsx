import React from "react";
import Hobbies from "../components/Hobbies.jsx";

function App() {
  // creating a list of three hobbies
    const hobbies = [
        {id: 1, name: "swimming", time: "2"},
        {id: 2, name: "soccer", time: "3"},
        {id: 3, name: "boxing", time: "1"}
    ];
    return (
      <>
        <div>
            <h1>Hobbies</h1>
            {/* passing the hobby list to hobbies*/}
            <Hobbies hobbies={hobbies}/>
        </div>
      </>
    )
  }
  
  export default App