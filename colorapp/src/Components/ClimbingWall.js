import ClimbingWindow from "./ClimbingWindow";
import ColorWindow from "./ColorWindow";


function ClimbingWall({ subArray, chosenColors, addColor, deleteColor }) {
    return (
        <div className='mr-3'>
            <span className="block-example border border-dark" style={{ height: "10rem", display: "inline-block", minWidth: "5rem" }}>
                <ClimbingWindow colors={chosenColors} deleteColor={deleteColor}></ClimbingWindow>
            </span>

            <div className="mt-3">
                <ColorWindow subArray={subArray} addColor={addColor}></ColorWindow>
            </div>
        </div>
    );
}


export default ClimbingWall;