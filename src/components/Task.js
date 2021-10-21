import { Link } from "react-router-dom"
import axios from 'axios'
const baseURL = 'https://task-api-manager-bojan.herokuapp.com/api/v1/tasks/'
const Task = (props) => {
    const deleteTask = (id) => {
        axios.delete(baseURL + id).then(
console.log('deleted')
          )
    }
    return(
        <h1>
            {props.name}
            <Link to={props.idTask} >EDIT</Link>
            <button onClick={()=> {deleteTask(props.idTask)}}>DELETE</button>
        </h1>
    )
}
export default Task 