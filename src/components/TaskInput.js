import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import axios from 'axios'



const TaskInput = (props) => {
    const [Input, setInput] = useState(props.value)
    const [Check, setCheck] = useState(props.completed)
    const location = useLocation().pathname
    const baseURL = `https://task-api-manager-bojan.herokuapp.com/api/v1/tasks${location}`
    console.log(baseURL)

    const enter = (value) => {
        setInput(value)
        console.log(value)
    }
    const sendTask = (input, met, checkbox) => {
        console.log(checkbox)
        var pass = {};
        if (!props.hide) {
            pass = {
                name: input,
                completed: checkbox
            }
        }else{
            pass = {
                name: input,
            }
        }

        console.log(met)
        axios({ method: met, url: baseURL, data: pass })
            .then((res) => {
                console.log(res)
                window.location.reload(false);
            });
        setInput('')
    }
    let checkCompleted
    if (!props.hide) {
        checkCompleted = <input type="checkbox" checked={Check}   onChange={() => {
            var comp = !Check
            setCheck(comp)
        }} />
    } else {
        checkCompleted = null
    }

    return (
        <div>
            <h1>{props.idTask}</h1>
            <TextField  id="outlined-basic" label="Outlined" variant="outlined" type='text' placeholder='Write your task...' value={Input} onChange={(e) => { enter(e.target.value) }} />
            <Button variant="contained" onClick={() => { sendTask(Input, props.method, Check) }}>Submit</Button>
            {checkCompleted}
        </div>
    )
}

export default TaskInput