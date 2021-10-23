import { Link } from "react-router-dom"
import axios from 'axios'
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const baseURL = 'https://task-api-manager-bojan.herokuapp.com/api/v1/tasks/'
const Task = (props) => {
    const deleteTask = (id) => {
        axios.delete(baseURL + id).then(
            window.location.reload(false)
        )
    }
    return (
        <div className="singleTask">
            <h3>{props.name}</h3>
            <div className='taskControl'>
                <Link to={props.idTask}  ><ModeEditIcon fontSize="large" /></Link>
                <Button onClick={() => { deleteTask(props.idTask) }}><DeleteIcon fontSize="large" /></Button>
            </div>
        </div>
    )
}
export default Task