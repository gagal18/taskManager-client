import { useState } from 'react'
import { useLocation } from 'react-router-dom';

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
            <input type='text' placeholder='Write your task...' value={Input} onChange={(e) => { enter(e.target.value) }} />
            <button onClick={() => { sendTask(Input, props.method, Check) }}>Submit</button>
            {checkCompleted}
        </div>
    )
}

export default TaskInput