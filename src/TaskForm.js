import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./styles/taskForm.css"

const TaskForm = ({sendTasks}) =>{
    // Creating state for task
    const [input, setInput] = useState("")
    // Creating a handler to capture the value
    const handleChange = (e) =>{
        console.log('Target', e.target);
        console.log('Value', e.target.value);
        setInput(e.target.value);
    }

    // Handler for submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Mensaje enviado', input);

        const newTask = {
            id: uuidv4(),
            title : input,
            completed: false,
        };
        sendTasks(newTask);
        e.target.reset();
      }
    return (
            <form onSubmit={handleSubmit}>
                <input className="input-task" type="text" name="title" placeholder="Things to be done" onChange={handleChange}></input>
                <input className="button-add" type="submit" value="+"></input>
            </form>
            
        
    )
}

export default TaskForm