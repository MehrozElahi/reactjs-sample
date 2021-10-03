import React, { useState } from "react";


const Test = () => {

    const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });


    return (
        <div>
            <button onClick={() =>
                setCount(currentState => ({
                    count2: currentState.count2 + 2, count: currentState.count + 1
                }))
            }>
                +
            </button>
            <div>count 1: {count}</div>
            <div>count 1: {count2}</div>
        </div>
    )
}

export default Test;