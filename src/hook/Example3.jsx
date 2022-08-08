import React, { useContext, useState } from "react"

const miContext = React.createContext(null)

const ComponentOne = () => {

    const state = useContext(miContext);

    return (
         <>
         <div>
            <h1>The Token is : {state.token}</h1>
            <ComponentTwo />
         </div>
         </>
    )
}
const ComponentTwo = () => {

    const state = useContext(miContext);

    return (
         <>
         <h2>the session is: {state.session}</h2>
         </>
    )
}

export const ComponentThree = () => {

    const initialState = {
        token: '1234',
        session: 1
    }
    const [sessionData, setSessionData] = useState(initialState);

    const currentSession = ( ) => {
        setSessionData({
            token: '1234567',
            session: sessionData.session + 1
        })
    }

    return (
         <>
         <miContext.Provider value={sessionData} >
            <ComponentOne />
            <button onClick={currentSession}> Reload </button>
         </miContext.Provider>
         
         </>
    )
}



