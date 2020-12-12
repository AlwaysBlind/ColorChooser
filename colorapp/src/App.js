import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ClimbingList from './Components/ClimbingList';
import ClimbingPlusColorWindow from './Components/ClimbingWindowPlusColorWindow';
// Todo: Lay a plan of what should be needed

function App() {
  const [climbingWalls, setClimbingWalls] = useState([new Set()]);

  const AddWall = () => {
    const newWalls = [...climbingWalls, new Set()]
    setClimbingWalls(newWalls)
  }
  const DeleteWall = () => {
    const newWalls = [...climbingWalls]
    newWalls.pop()
    setClimbingWalls(newWalls)
  }

  return (

    <div className="App">
      <div>
        <Button onClick={AddWall} disabled={climbingWalls.length > 4}> + </Button>
        <Button onClick={DeleteWall} disabled={climbingWalls.length <= 0}> - </Button>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ClimbingList climbingWalls={climbingWalls} setClimbingWalls={setClimbingWalls} />
      </div>
    </div>
  );
}

export default App;
