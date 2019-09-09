import React, { useState, useEffect } from 'react';
const NewTask = () => {
    const [newTask, setNewTask] = useState({

        id: 0,
        description: 'example task'

    });

    let [desc, setDesc] = useState('');
    const [makeId, setMakeId] = useState(0);

    useEffect(() => {
        setNewTask({
            id: makeId,
            description: desc
        })
    }, [makeId, desc]);
    const handleCreate = () => {
        let inputVal = document.querySelector('input.newTask').value;
        setMakeId(makeId + 1);
        setDesc(desc = inputVal)
        inputVal = '';
    }
    return (
        <div className="wrapNewTask">
            <input className='newTask' type="text" placeholder='new task' />
            <p className="add" onClick={() => handleCreate()}><i className="fas fa-plus-square"></i></p>
        </div>
    );
}

export default NewTask;