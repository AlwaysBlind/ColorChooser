import { Button, ButtonGroup } from "react-bootstrap";
const usableColors = ['green', 'blue', 'red', 'orange', 'black', 'white', 'purple', 'pink', 'yellow']

const ColorWindow = ({ subArray, addColor }) => {
    const unionOfColors = new Set(subArray.reduce((a, b) => a.concat([...b]), []));
    console.log(unionOfColors)
    const filteredColors = [...usableColors].filter(x => !unionOfColors.has(x))
    const colorMap = () => {
        const mappedCols = [...filteredColors].map((color, index) => <Button key={index} style={{ 'background-color': color }
        } onClick={() => { addColor(color) }}>  </Button >)
        return <ButtonGroup vertical> {mappedCols} </ButtonGroup>
    }
    return (
        colorMap()
    );
}
export default ColorWindow;