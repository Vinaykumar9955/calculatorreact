
import React from "react";
import {add,sub,mult,div} from "./Calc";

function App () {
    return (
        <>
        <ul>
            <li> The sum two number {add(40,4)}</li>
            <li> The sub two number {sub(40,4)}</li>
            <li> The mul two number {mult(40,4)}</li>
            <li> The div two number {div(40,4)}</li>
        </ul>
    </>
    );
}

export default App;