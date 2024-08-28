import { useState } from "react"





export const Counter = () => {
    const [counter, setCounter] = useState(0);
    // Counter => Nama Statenya
    // setCounter -> trigerring re-render
    // useState(0) => Inital value

    // return (
    //     <div>
    //         <div>Counter : {counter}</div>
    //         <button onClick={() => setCounter(counter + 1)}>Increment</button>
    //         <button onClick={() => setCounter(counter - 1)}>Dicrement</button>

    //     </div>
    // )

    // return (
    //     <div>
    //         <div>Counter : {counter}</div>
    //         <button onClick={() => setCounter((currentValue) => currentValue + 1)}>Increment</button>
    //         <button onClick={() => setCounter((currentValue) => currentValue - 1)}>Dicrement</button>

    //     </div>
    // )


    function incrementCounter() {
        setCounter(counter => counter + 1)
    }

    function decrementCounter() {
        if(counter <= 0) return;
        setCounter(counter => counter - 1)
    }

    return (
        <div>
            <div>Counter : {counter}</div>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Dicrement</button>

        </div>
    )
    
}
