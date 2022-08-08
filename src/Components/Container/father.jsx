import React, { useState } from "react"
import { Son } from "../pure/son"

const Father = () => {
    const [name, setName] = useState('leandro');
    console.log(name)
    const showMessage = (text) => alert(`${text}`)
    
    const updateName = (newName) =>  setName(newName)


    return (<>
    <div style={{backgroundColor: 'tomato', padding:'10px', display:'flex', justifyContent:''}}>
        <Son show={showMessage} update={updateName} />
        <h1>Hello {name}</h1>
    </div>
    </>)
}

export default Father