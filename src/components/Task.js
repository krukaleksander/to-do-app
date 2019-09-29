import React from 'react';
const Task = (props) => {
    const { desc, id, done, important } = props.task;
    const { handleExtras, deleteTask, change } = props;
    const importantLook = {
        textTransform: 'uppercase',
        color: 'red',
    }
    return (
        <div className="single-task">
            <span className="one-task" style={important && !done ? importantLook : null}>{desc}  </span>
            {!done && <button className="task-done" onClick={() => change(id)}><i className="fas fa-thumbs-up"></i></button>}<button className='extra-info' onClick={() => handleExtras(id)}><i className="fas fa-book"></i></button><button className="delete-task" onClick={() => deleteTask(id)}><i className="fas fa-times-circle"></i></button>
        </div>

    );
}

export default Task;