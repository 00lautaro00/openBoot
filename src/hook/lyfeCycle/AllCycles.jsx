import React, { useEffect } from "react"

export const AllCycles = ( ) => {

    useEffect(() => {
        console.log('Componente creado');
        const intervalID = setInterval(() =>{
            document.title = `${new Date()}`
            console.log('actualizacion Comnente ');
        }, 1000);
        return () => {
            console.log('end');
            clearInterval(intervalID);
            document.title = 'time stop'
        }
    },[]);

    return(
        <>
        <div>

        </div>
        </>
    )

}