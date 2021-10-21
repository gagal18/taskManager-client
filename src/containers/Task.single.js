import TaskInput from "../components/TaskInput";
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'


const TaskSingle = () => {
    const location = useLocation().pathname
    const baseURL = `https://task-api-manager-bojan.herokuapp.com/api/v1/tasks${location}`
    var completed, name, id;
    const [Data, setData] = useState()
    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setData(res.data.task)
        });

    }, [])

    var task
    if(Data) {
        completed = Data.completed
        name = Data.name
        id = Data._id
        task = < TaskInput method = "PATCH" hide = { false } completed={completed} value = { name } idTask = { id } />
    }else{
        task = null
    }
    
    

    return (
        <div>
            {task}
        </div>
    )
}

export default TaskSingle