import { levels } from "../../models/level.class";

export const taskIcon = (task, completed) => {

    const taskLevelBadge = ( ) =>{
        switch(task.level){
            case levels.common :
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-primary">{task.level}</span>
                    </h6>
                );
                case levels.important :
                    return(
                        <h6 className="mb-0">
                            <span className="badge bg-danger">{task.level}</span>
                        </h6>
                    );
                    case levels.blocking :
                        return(
                            <h6 className="mb-0">
                                <span className="badge bg-warning">{task.level}</span>
                            </h6>
                        );
            default:
            break;
        }
    }

    const taskIconsCompleted = ( ) =>{
        if(task.completed)
            return(<i onClick={() => completed(task)} className="bi-toggle-on task-action" style={{color: 'green', fontSize:'20px' }}  ></i>)
        else 
            return(<i onClick={() => completed(task)} className="bi-toggle-off task-action" style={{color: 'red', fontSize:'20px'}}></i>)
    }
return {
    taskIconsCompleted,
    taskLevelBadge
}

}