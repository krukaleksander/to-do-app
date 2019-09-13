import React from 'react';
const Task = (props) => {
    const { desc, id } = props.task
    const { deleteTask, change } = props
    return (
        <div className="single-task">
            <span className="one-task">{desc}</span>
            <button onClick={() => change(id)}>Zrobione!</button><button onClick={() => deleteTask(id)}>X</button>
        </div>

    );
}

export default Task;