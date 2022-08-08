import './App.css';
import React from 'react';
import TaskList from './Components/Container/task_list';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/tasks.scss'
function App() {

  
  return (
    <div>
      <TaskList />
      <hr />
    </div>
  );
}

export default App;
