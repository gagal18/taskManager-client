import Task from './Task'

const Tasks = (props) => {
    console.log(props.data)
    const taskData = props.data
    return (
        <div>
           { taskData.map(el => {
              return <Task key={el._id} idTask={el._id} name={el.name} completed={el.completed} />
           })}
        </div>
    )
}

export default Tasks