import React from 'react';
import './App.scss';
import NewTask from './components/NewTask'

function App() {

  return (
    <>
      <div className="wrap">
        <h1 className="webTitle">To Do List</h1>
        <div className="list">
          <NewTask />
        </div>
      </div>
    </>

  );
}

export default App;
