import { Card, Button, ButtonGroup } from "react-bootstrap";

const ClimbingWindow = ({ colors, deleteColor }) => {
    const colorMap = () => {
        const mappedCols = [...colors].map((color, index) => {
            return <Button onClick={() => { deleteColor(color) }} key={index} style={{ backgroundColor: color }}> </Button>
        })
        return <ButtonGroup style={{ height: "10rem" }}> {mappedCols} </ButtonGroup>
    }

    return (
        colorMap()
    );
}

export default ClimbingWindow;