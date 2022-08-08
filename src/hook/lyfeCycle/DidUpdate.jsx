import { Component, useEffect } from "react";


export class Did extends Component{
    

    componentDidUpdate(){
        console.log('comportiamiento cuando recibe nuevosprops')
    }

    render(){
        return(
            <>
            <div>
            <h1>
                DidUpdate
            </h1>
            </div>
            </>
        )
    }
}

export const DidUpdateHook = ( ) => {
    useEffect(() => {
        console.log('Comportamiento cuando reciben uevos props ')
    },[])
    return(
        <>
        <div>
            <h1>
                DidUpdate
            </h1>
        </div>
        </>
    )
}