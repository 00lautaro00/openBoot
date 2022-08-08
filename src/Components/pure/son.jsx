import React,{useRef} from "react"

export const Son = ({show, update}) => {
    const nameRef = useRef('')
    const messageRef = useRef('')
    const onPressButton = () => console.log('pressbutton')
    const pressButtonParams = () => {
        const text = messageRef.current.value;
        alert(`text in input ${text}`)
    }

    const submitName = (e) => {
        e.preventDefault();
        update(nameRef.current.value)
    }

    return(
    <>
        <div style={{backgroundColor:'cyan'}}>
            <p onMouseOver={() => {console.log('over')}}>child component</p>
            <button onClick={onPressButton}>one</button>
            <button onClick={() => pressButtonParams('name')}>two</button>
            <button onClick={() => show(messageRef)}>three</button>
            <input type="text" placeholder="yourName" onFocus={() => console.log('onFocus')} ref = {messageRef} defaultValue={'default'} />
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitName}>
                    <input type="text" placeholder="newName" ref={nameRef}/>
                    <button type="submit">Update Name</button>
                </form>
            </div>
        </div>
    </>
    )
}