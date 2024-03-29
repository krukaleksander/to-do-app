import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const notDone = props.tasks.filter(task => !task.done);
    const done = props.tasks.filter(task => task.done);
    const notDoneTasks = notDone.map(task => <Task key={task.id} task={task} handleExtras={props.handleExtras} deleteTask={props.deleteTask} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} handleExtras={props.handleExtras} deleteTask={props.deleteTask} change={props.change} />)

    return (
        <div className="task-list">
            <div className="not-done">
                <h2>Zadania do zrobienia</h2>
                {notDoneTasks.length > 0 ? notDoneTasks : <p className="free-time"><i className="fas fa-campground"></i> Masz wolne... =)</p>}
            </div>
            <hr />
            <div className="done">
                {done.length > 7 && <p className="length-info">Aplikacja wyświetla 7 pierwszych zadań</p>}
                <h2>Zadania zrobione <span>{doneTasks.length}</span></h2>
                {doneTasks.slice(0, 7)}
            </div>



        </div >
    );
}

export default TaskList;