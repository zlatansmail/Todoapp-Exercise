import React from 'react';
import Task from './Task';

const TaskList = ({ toDos, handleComplete, handleEdit, handleDelete }) => {
  return (
    <div>
      {toDos.map((toDo, index) => (
        <Task
          key={index}
          task={toDo}
          index={index}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
