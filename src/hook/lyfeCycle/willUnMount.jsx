import { Component, useEffect } from "react";


export class WillUnMount extends Component{
    

    componentWillUnmount(){
        console.log('comportiamiento nates que se renderice')
    }

    render(){
        return(
            <>
            <div>
            <h1>
                willUnMount
            </h1>
            </div>
            </>
        )
    }
}

export const WillUnMountHook = ( ) => {
    useEffect(() => {
        return () => {
        console.log('Comportamientoantesde que se renderice ')

        }
    },[])
    return(
        <>
        <div>
            <h1>
                willUnMount
            </h1>
        </div>
        </>
    )
}