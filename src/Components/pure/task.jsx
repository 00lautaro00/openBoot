import React, { useEffect } from "react";
import { taskIcon } from "./taskIcons";

const TaskComponent = ({task, completed, remove}) => {

    useEffect(() => {
        console.log(' created task');
        return () => console.log(`task ${task.name} is going to unmount `)
    },[task]);

    const {taskLevelBadge, taskIconsCompleted} = taskIcon(task, completed);


    return ( 
    <tr className="fw-normal">
        <th>
            <span >{task.name}</span>
        </th>
        <td className="align-middle">
            <span>{task.description}</span>
        </td>
        <td className="align-middle">
            {taskLevelBadge()}
        </td>
        <td className="align-middle"> 
        {taskIconsCompleted()}
        <i onClick={() => remove(task)} className="bi-trash task-action" style={{color: 'tomato', fontSize:'20px' }} ></i>
        </td>
    </tr>
    )
}


export default TaskComponent;