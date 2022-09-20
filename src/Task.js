import "./styles/task.css"
import  {ImCancelCircle}  from 'react-icons/im'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Task = ({id, title, description, completed, deleteTask,completedTask }) =>{
    return(
        <div className={completed ? "task completed" : "task"}>
            <h2>{title}</h2>
            <div onClick={() =>{completedTask(id)}}>
            <AiOutlineCheckCircle  className="icon-check"/>
            </div>
            <div onClick={() =>{deleteTask(id)}}>
            <ImCancelCircle  className="icon-delete"/>
            </div>
        </div>
    )
}

export default Task