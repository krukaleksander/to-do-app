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
  };
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

  };
  taskLocal() {
    let stateVal = JSON.stringify(this.state.tasks);
    window.localStorage.setItem('todoappak', stateVal);
    console.log(stateVal);
  };
  localToTask = () => {
    const tasks = Array.from(JSON.parse(window.localStorage.todoappak));
    this.setState({
      tasks
    })
    console.log(this.state.tasks);
  }

  render() {

    return (

      <>
        <div className="wrap">
          <h1 className="webTitle">To Do List</h1>
          <div className="list">
            <Add add={this.newTask} />
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} change={this.changeDone} getLocal={this.taskLocal} />
            <button onClick={this.localToTask}>Załaduj</button>
          </div>
        </div>
      </>

    );
  }
  componentDidMount() {
    this.localToTask()
  }
  componentDidUpdate() {
    this.taskLocal()
  }
}

export default App;

