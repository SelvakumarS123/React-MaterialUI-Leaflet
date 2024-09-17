import React from "react";

function SecondComponent (){
    function AppleDisplay(n) {
        if (n === 0 || n === 1) {
            return `john has ${n} apple`;
        } else if (n > 1) {
            return `john has ${n} apples`;
        }
        else{
            return `john has ${Math.abs(n)} apples`;
        }
    }    
    return (
        <>
        <h1>Second Component</h1>
        <h2>john has {2**4} apples </h2>
        <h3>{AppleDisplay(-6)}</h3>
        {/* JSX is very intuitive so we can use {} and write expressions as in js */}
        </>
    )
}

export default SecondComponent;

