import React, { useRef } from "react"
import { levels } from "../../../models/level.class";
import { Task } from "../../../models/task.class";

export const TaskForm = ({add}) => {
    
    const nameRef = useRef('');
    const descrRef = useRef('');
    const levelRef = useRef(levels.common);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descrRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }

    return(
    <>
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4' >
            <div className="form-outline flex-fill">
                <input ref={nameRef} id='inputName' type='text' className="form-control form-control-lg" required autoFocus placeholder="Task Name"/>
                <input ref={descrRef} id='inputDescr' type='text' className="form-control form-control-lg" placeholder="Task Description"/>
                <label htmlFor="selectLevel" className="sr-only">Priority</label>
                <select ref={levelRef} defaultValue={levels.common} id="selectLevel">
                    <option value={levels.common}>Common</option>
                    <option value={levels.important}>Important</option>
                    <option value={levels.blocking}>Blocking</option>
                </select>
                <button type="submit" className="btn btn-success btn-lg ms-2">Add</button>
            </div>

        </form>
    </>
        )
}
