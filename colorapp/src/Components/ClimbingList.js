import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import ClimbingPlusColorWindow from "./ClimbingWindowPlusColorWindow";
const ClimbingList = ({ climbingWalls, setClimbingWalls }) => {
    const GetAddColorToWindowIFunction = (i) => {
        return function AddColorToChosenBox(color) {
            return AddColor(i, color)
        }
    }
    const AddColor = (i, color) => {
        const newClimbingWalls = [...climbingWalls]
        newClimbingWalls[i].add(color)
        setClimbingWalls(newClimbingWalls)
    }

    const GetDeleteColorInWindowIFunction = (i) => {
        return function DeleteColorInChosenWindow(color) {
            return RemoveColor(i, color)
        }
    }
    const RemoveColor = (i, color) => {
        const newClimbingWalls = [...climbingWalls]
        newClimbingWalls[i].delete(color)
        setClimbingWalls(newClimbingWalls)
    }

    const climbingList = climbingWalls.map((chosenColors, index) => {
        const from = Math.max(0, index - 1)
        const to = index + 2
        const addColorFunc = GetAddColorToWindowIFunction(index)
        const deleteColorFunc = GetDeleteColorInWindowIFunction(index)
        return <ClimbingPlusColorWindow
            subArray={climbingWalls.slice(from, to)}
            chosenColors={chosenColors}
            addColor={addColorFunc}
            deleteColor={deleteColorFunc}
            key={index}
        />
    })
    return (
        <ListGroup horizontal>
            {climbingList}
        </ListGroup>
    );
}

export default ClimbingList;