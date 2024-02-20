import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";
export const Counter = ()=>{
    const counterState = useContext(CounterContext);
    return (
        <div>
            <button onClick={(e) => counterState.setCount(counterState.count+1)}>Increment</button>
            <button onClick={(e) => counterState.setCount(counterState.count-1)}>Decrement</button>
        </div>
    )
}