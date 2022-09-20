import { useState } from "react"
import TaskForm from "./TaskForm";
import Task from "./Task"
import "./styles/taskList.css"

const TaskList = () =>{
    const [tasks, setTasks] = useState([]);

    const addTask = (task) =>{
        if(task.title.trim()){
            task.title = task.title.trim();
            const uptdatedTasks = [task, ...tasks];
            setTasks(uptdatedTasks);
        }
    }

    const deleteTask = (id) =>{
        console.log('delete');
        const uptdatedTasks = tasks.filter(task => task.id !== id)
        setTasks(uptdatedTasks)
    }

    const completedTask = (id) =>{
        const uptdatedTasks = tasks.map((task) =>{
            console.log('completed', task);
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task  
        })
        setTasks(uptdatedTasks)
    }
    return (
        <div>
            <TaskForm sendTasks={addTask}/>
            <div className="taskContainer">

                {tasks.map((task) =>{
                    return(
                        <Task 
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            completedTask={completedTask}
                        />

                    )
                })}
        
            </div>
        </div>
    )
}

export default TaskList