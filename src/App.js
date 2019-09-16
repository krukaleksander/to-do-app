import React from 'react';
import './App.scss';
import Add from './components/Add'
import TaskList from './components/TaskList'

class App extends React.Component {
  count = 0;
  state = {
    tasks: [

    ],

  }
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }
  changeDone = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = true;
      }
    })
    this.setState({
      tasks
    })
  }
  newTask = (val, checked) => {
    const task = {
      id: this.count,
      desc: val,
      important: checked,
      done: false
    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    this.count++
    return true

  }
  render() {
    return (
      <>
        <div className="wrap">
          <h1 className="webTitle">To Do List</h1>
          <div className="list">
            <Add add={this.newTask} />
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} change={this.changeDone} />
          </div>
        </div>
      </>

    );
  }
}

export default App;

