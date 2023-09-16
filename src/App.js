import Box from './Box'
import boxes from './boxes'
import './App.css';
import React from 'react';
function App() {

    
//    / / Defining a functional component named "App".
// Using the "useState" hook to initialize a state variable named "squares"
  // with the initial value provided by the "boxes" data.

  const [squares, setSquares] = React.useState(boxes)
  // Mapping over the "squares" array and creating a new array of "Box" components.


  const squareElements = squares.map(square => (
      <Box key={square.id} on={square.on} 
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
}
export default App;
