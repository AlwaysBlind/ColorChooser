import { Button, ButtonGroup } from "react-bootstrap";
const usableColors = ['green', 'blue', 'red', 'orange', 'black', 'white', 'purple', 'pink', 'yellow']
const colorDict = { 'white': 0, "yellow": 2, "orange": 4, "red": 5, "pink": 6, "purple": 8, "blue": 10, "green": 12, "black": 14 }
const numberToColorDict = {}
Object.entries(colorDict).forEach(([color, number], _) => {
    numberToColorDict[number] = color
});

const illegalNeighbors = {}
Object.entries(numberToColorDict).forEach(([number, color], _) => {
    illegalNeighbors[color] = new Set()
    if (numberToColorDict[number - 1]) {
        illegalNeighbors[color].add(numberToColorDict[number - 1])
    }
    if (numberToColorDict[+number + +1]) {
        illegalNeighbors[color].add(numberToColorDict[+number + +1])
    }
});


const ColorWindow = ({ subArray, addColor }) => {
    const subArrayColors = new Set(subArray.reduce((a, b) => a.concat([...b]), []));
    const illegalNeighborsSubArray1 = [...subArrayColors].map(col => illegalNeighbors[col])
    const illegalNeighborsSubArray = new Set([...illegalNeighborsSubArray1].reduce((a, b) => a.concat([...b]), []));
    const illegalColors = new Set([...subArrayColors, ...illegalNeighborsSubArray])
    const filteredColors = [...usableColors].filter(x => !illegalColors.has(x))
    const colorMap = () => {
        const mappedCols = [...filteredColors].map((color, index) => <Button key={index} style={{ 'backgroundColor': color }
        } onClick={() => { addColor(color) }}>  </Button >)
        return <ButtonGroup vertical> {mappedCols} </ButtonGroup>
    }
    return (
        colorMap()
    );
}
export default ColorWindow;