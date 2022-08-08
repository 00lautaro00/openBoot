import React, { useState } from "react";

const loggedStyle = {
    color: 'blue'
}
const unLoggedStyle = {
    color: 'red',
    fontWeigth: 'bold'
}

const GreetingStyled = ( { name })  => {

    const [logged, setLogged ] = useState(false);
    const greetingUser = () => (<p>Hello, { name }</p>);
    const pleaseLogin = () => (<p>please login</p>)


    return(
        <>
        <div style={logged ? loggedStyle : unLoggedStyle}>
            {logged ?  greetingUser() : pleaseLogin() }
            
            <button onClick={(e) => setLogged(!logged)}>
                {logged ? 'logout' : 'login'}
            </button>
        </div>
        </>
    )
}

export default GreetingStyled;