import { ListGroup } from "react-bootstrap";
import ClimbingWall from "./ClimbingWall";
const ClimbingWallList = ({ climbingWallColors, setClimbingWallColors }) => {
    const GetAddColorToWindowIFunction = (i) => {
        return function AddColorToChosenBox(color) {
            return AddColor(i, color)
        }
    }
    const AddColor = (i, color) => {
        const newClimbingWalls = [...climbingWallColors]
        newClimbingWalls[i].add(color)
        setClimbingWallColors(newClimbingWalls)
    }

    const GetDeleteColorInWindowIFunction = (i) => {
        return function DeleteColorInChosenWindow(color) {
            return RemoveColor(i, color)
        }
    }
    const RemoveColor = (i, color) => {
        const newClimbingWalls = [...climbingWallColors]
        newClimbingWalls[i].delete(color)
        setClimbingWallColors(newClimbingWalls)
    }

    const climbingWalls = climbingWallColors.map((chosenColors, index) => {
        const from = Math.max(0, index - 1)
        const to = index + 2
        const addColorFunc = GetAddColorToWindowIFunction(index)
        const deleteColorFunc = GetDeleteColorInWindowIFunction(index)
        return <ClimbingWall
            subArray={climbingWallColors.slice(from, to)}
            chosenColors={chosenColors}
            addColor={addColorFunc}
            deleteColor={deleteColorFunc}
            key={index}
        />
    })
    return (
        <ListGroup horizontal>
            {climbingWalls}
        </ListGroup>
    );
}

export default ClimbingWallList;