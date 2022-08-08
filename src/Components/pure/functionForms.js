
export const functionForms = (tasks, setTask ) => {
    const completeTask = ( task ) => {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed
        setTask(tempTask)
    }
    const deleteTask = (task) =>{
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        setTask(tempTask)
    }
    const addTask = (task) => {
        console.log(task)
        //const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTask(tempTask)
    }

    return {
        completeTask,
        deleteTask,
        addTask
    }

}