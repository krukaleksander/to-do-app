import React from 'react';
import './App.scss';
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'

class App extends React.Component {
  count = 0;
  state = {
    tasks: [
      {
        id: 0,
        desc: 'Wyrzucić śmieci',
        important: true,
        done: false
      },
      {
        id: 1,
        desc: 'Pomalować płot',
        important: false,
        done: false
      },
      {
        id: 2,
        desc: 'Zgrabić liście',
        important: false,
        done: false
      },
      {
        id: 3,
        desc: 'Kupić kondony',
        important: true,
        done: false
      }
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

  render() {
    return (
      <>
        <div className="wrap">
          <h1 className="webTitle">To Do List</h1>
          <div className="list">
            <NewTask />
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} change={this.changeDone} />
          </div>
        </div>
      </>

    );
  }
}

export default App;

