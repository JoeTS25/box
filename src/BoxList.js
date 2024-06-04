import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const addBox = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    };
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxFeatures = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            height={box.height}
            width = {box.width}
            backgroundColor={box.backgroundColor}
            handleRemove={remove}
        />
    ));

    return (
        <div>
            <NewBoxForm createBox={addBox} />
            {boxFeatures}
        </div>
    );
}

export default BoxList;