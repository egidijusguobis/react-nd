import { useState } from "react";


function Circles() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const addNumber = () => {

        const newCounter = counter1 + 1;

        setCounter1(newCounter);

    }
    const addNumber2 = () => {

        const newCounter2 = counter1 + counter2;

        setCounter2(newCounter2)
    }


    const reset = () => {
        setCounter1(0);
        setCounter2(0);

    }

    return (
        <>
            <div>
                <div className="circle">
                    <p>{counter1}</p>
                </div>
                <button onClick={addNumber}>Add Number</button>
                <div className="circle">
                    <p>{counter2}</p>
                </div>
                <button onClick={addNumber2}>Add Second Number</button>
            </div>
            <button onClick={reset}>Reset Everything</button>

        </>
    )
}

export default Circles;