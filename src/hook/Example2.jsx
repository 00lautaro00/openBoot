import React, { useEffect, useRef, useState } from "react"

const Example2 = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(100);

    const miRef = useRef();

    const high = () => setCount( count +1);
    const down = () => setValue( value - 1);

    // useEffect(() => {
    //     console.log('Cambio en el estado del component');
    //     console.log('mostrando referenciua a elemento DOM');
    //     console.log(miRef)
    // }, [])
    useEffect(() => {
        console.log('Cambio en el estado del component');
        console.log('mostrando referenciua a elemento DOM');
        console.log(miRef)
    }, [count])


    return (
         <>
         <div>
            <h1>Example of useState</h1>
            <h2>contador 1: {count}</h2>
            <h2>contador 2: {value}</h2>
            <h4 ref={miRef}> Example of element ref</h4>
            <div>
                <button onClick={high}> +1</button>
                <button onClick={down}> +1</button>
            </div>

         </div>
         </>
    )
}

export default Example2