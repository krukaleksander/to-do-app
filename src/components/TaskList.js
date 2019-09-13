import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} change={props.change} />)

    return (
        <div className="task-list">
            <div className="not-done">
                <h2>Zadania do zrobienia</h2>
                {tasks}
            </div>
            <hr />
            <div className="done">
                <h2>Zadania zrobione</h2>
            </div>



        </div >
    );
}

export default TaskList;