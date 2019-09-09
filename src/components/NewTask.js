import React, { useState, useEffect } from 'react';
const NewTask = () => {
    const [newTask, setNewTask] = useState({

        id: 0,
        description: 'example task'

    });

    const [desc, setDesc] = useState('');
    const [makeId, setMakeId] = useState(1);

    const handleCreate = () => {
        setMakeId(makeId + 1);

        setNewTask({
            id: makeId,
            description: desc
        });
        document.querySelector('input.newTask').value = '';
    }
    return (
        <div className="wrapNewTask">
            <input className='newTask' type="text" placeholder='new task' onChange={(e) => setDesc(e.target.value)} />
            <p className="add" onClick={() => handleCreate()}><i className="fas fa-plus-square"></i></p>
        </div>
    );
}

export default NewTask;