import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'
import { useEffect ,useState } from 'react'
import axios from 'axios'

const baseURL = 'https://task-api-manager-bojan.herokuapp.com/api/v1/tasks'

const TaskList = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setData(res.data.tasks)
          });
        
    }, [])
    return (
        <div>
            <TaskInput method="POST" hide={true} id={''} />
            {Data ? <Tasks data={Data} /> : 'No tasks yet'}
            
        </div>
    )
}

export default TaskList