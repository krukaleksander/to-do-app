import React, { Component } from 'react';

class NewTask extends Component {
    state = {}
    render() {
        return (
            <div className="wrapNewTask">
                <input className='newTask' type="text" placeholder='new task' onChange={() => console.log('zmiana')} />
                <p className="add" onClick={() => console.log('klikam')}><i className="fas fa-plus-square"></i></p>
            </div>
        );
    }
}


export default NewTask;