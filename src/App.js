import React from 'react';
import './App.scss';
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'

class App extends React.Component {
  state = {
    count: 0,
    task: {
    },
    taskArr: []
  }
  handleCounter() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <>
        <div className="wrap">
          <h1 className="webTitle">To Do List</h1>
          <div className="list">
            <NewTask handleCounter={this.handleCounter} />
            <TaskList />
          </div>
        </div>
      </>

    );
  }
}

export default App;

