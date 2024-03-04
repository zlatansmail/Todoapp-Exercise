import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';
import InputForm from './InputForm';

const App = () => {
  const [task, setTask] = useState('');
  const [toDos, setToDos] = useState([]);
  const [indexToEditItem, setIndexToEditItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const TODO_KEY = 'todos';

  const handleSave = () => {
    const newToDos = [...toDos, { name: task, isCompleted: false }];
    setToDos(newToDos);
    setTask('');

    localStorage.setItem(TODO_KEY, JSON.stringify(newToDos));
  };

  const handleTaskChange = (event) => {
    const { value } = event.target;
    setTask(value);
  };

  const handleDelete = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy.splice(index, 1);
    setToDos(toDosCopy);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };

  const handleEdit = (taskToEdit, index) => {
    setTask(taskToEdit.name);
    setIsEditMode(true);
    setIndexToEditItem(index);
  };

  const handleUpdate = () => {
    const toDosCopy = [...toDos];
    toDosCopy[indexToEditItem].name = task;
    setToDos(toDosCopy);
    setTask('');
    setIsEditMode(false);
    setIndexToEditItem(null);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };

  const handleComplete = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy[index].isCompleted = true;
    setToDos(toDosCopy);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };

  useEffect(() => {
    const items = localStorage.getItem(TODO_KEY);
    if (items) {
      const parsedItems = JSON.parse(items);
      if (parsedItems?.length) {
        setToDos(parsedItems);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className='App-header'>
        <h1>TODO APP</h1>
        <InputForm
          task={task}
          isEditMode={isEditMode}
          handleTaskChange={handleTaskChange}
          handleSave={handleSave}
          handleUpdate={handleUpdate}
        />
        <TaskList
          toDos={toDos}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </header>
    </div>
  );
};

export default App;
