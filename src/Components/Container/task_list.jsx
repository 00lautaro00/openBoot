import { useEffect, useState } from 'react';
import { levels } from '../../models/level.class';
import {Task} from '../../models/task.class'
import { TaskForm } from '../pure/forms/taskForm';
import { functionForms } from '../pure/functionForms';
import TaskComponent from '../pure/task';


const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', true, levels.common);
    const defaultTask1 = new Task('Example2', 'Default description2', false, levels.blocking);
    const defaultTask2 = new Task('Example3', 'Default description3', true, levels.important);

    const [tasks, setTask] = useState([defaultTask,defaultTask1,defaultTask2]);
    const [loading, setLoading] = useState(false);
    const {deleteTask,addTask,completeTask} = functionForms(tasks, setTask)

    console.log(loading);
    useEffect(() =>{
        console.log('Task state has been modified');
        setLoading(false)
        return () => console.log('taskList is going to unmount')
    },[]);

    

    return(
        <>
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h2>Your Task:</h2>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px', textAlign:'center'}}>
                        <table>
                            <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map((task,index) => <TaskComponent key={index} task={task} completed={completeTask} remove={deleteTask}/>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <TaskForm add={addTask} />
            </div>
        </div>
        </>
    )
 }

 export default TaskList;