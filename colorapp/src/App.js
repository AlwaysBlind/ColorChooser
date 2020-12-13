import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ClimbingWallList from './Components/ClimbingWallList';

function App() {
  const [climbingWallColors, setClimbingWallColors] = useState([new Set()]);

  const AddWall = () => {
    const newWalls = [...climbingWallColors, new Set()]
    setClimbingWallColors(newWalls)
  }
  const DeleteWall = () => {
    const newWalls = [...climbingWallColors]
    newWalls.pop()
    setClimbingWallColors(newWalls)
  }

  return (

    <div className="App">
      <div>
        <Button onClick={AddWall} disabled={climbingWallColors.length > 4}> + </Button>
        <Button onClick={DeleteWall} disabled={climbingWallColors.length <= 0}> - </Button>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ClimbingWallList climbingWallColors={climbingWallColors} setClimbingWallColors={setClimbingWallColors} />
      </div>
    </div>
  );
}

export default App;