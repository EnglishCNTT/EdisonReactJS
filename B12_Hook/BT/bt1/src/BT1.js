import React from "react";
import { useState } from "react";

function BT1() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);
    const [muti, setMuti] = useState(0);

    const handleSum = () => {
        setSum(num1 + num2);
    };

    const handleMuti = () => {
        setMuti(num1 * num2);
    }

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))}>

            </input>

            <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))}>

            </input>

            <button onClick={handleSum}>Add</button>

            <button onClick={handleMuti}>Muti</button>
            <div>
                <p>Sum: {sum}</p>
                <p>Multiply: {muti}</p>
            </div>
        </div>
    );
}

export default BT1;