import React from 'react';
const NewTask = () => {


    const handleCreate = () => {

    }
    return (
        <div className="wrapNewTask">
            <input className='newTask' type="text" placeholder='new task' />
            <p className="add" onClick={() => handleCreate()}><i className="fas fa-plus-square"></i></p>
        </div>
    );
}

export default NewTask;