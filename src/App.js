import React from 'react';
import './App.scss';
import Add from './components/Add'
import TaskList from './components/TaskList'
import Extras from './components/Extras'

class App extends React.Component {
  count = 0;
  extras = "";
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
    console.log(id);
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
      done: false,
      extras: ""
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
  };
  localToTask = () => {
    if (window.localStorage.todoappak !== undefined) {
      const tasks = Array.from(JSON.parse(window.localStorage.todoappak));
      this.setState({
        tasks
      })
      let ids = Math.max(...tasks.map(item => item.id));
      this.count = ids + 1;

    }

  }
  upPar = (id) => {
    const upTasks = Array.from(this.state.tasks);
    upTasks.filter(function (task) {
      if (task.id === id) {
        document.querySelector('p.extras-par').innerText = task.extras;
      };
      return true;
    })
  }
  handleExtras = (id) => {
    const extras = document.querySelector('div.extras');
    const blured = document.querySelector('div.blured');
    this.upPar(id);
    extras.style.display = 'block';

    extras.setAttribute("data-which", id);
    blured.style.display = 'block';
  }
  extrasChange = (e) => {
    this.extras = e.target.value;
  }
  handleSetExtas = () => {
    const extras = document.querySelector('div.extras');
    let id = parseInt(extras.getAttribute("data-which"));
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.extras = this.extras;
      }
    })
    this.setState({
      tasks
    })
    this.upPar(id);

    document.querySelector('input.extras-in').value = "";

  }
  render() {

    return (

      <>
        <div className="wrap">
          <h1 className="webTitle">To Do List</h1>
          <div className="list">
            <Add add={this.newTask} />
            <TaskList tasks={this.state.tasks} handleExtras={this.handleExtras} deleteTask={this.deleteTask} change={this.changeDone} getLocal={this.taskLocal} />
            <Extras tasks={this.state.tasks} changeExtras={this.changeExtras} extrasChange={this.extrasChange} handleSetExtas={this.handleSetExtas} />
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

