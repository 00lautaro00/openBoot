import { Component, useEffect } from "react";


export class DidMount extends Component{
    

    componentDidMount(){
        console.log('comportiamiento nates que se renderice')
    }

    render(){
        return(
            <>
            <div>
            <h1>
                DidMount
            </h1>
            </div>
            </>
        )
    }
}

export const DidMountHook = ( ) => {
    useEffect(() => {
        console.log('Comportamientoantesde que se renderice ')
    }, [/* input */])
    return(
        <>
        <div>
            <h1>
                DidMount
            </h1>
        </div>
        </>
    )
}