import React from 'react';

const Task = ({ task, index, handleComplete, handleEdit, handleDelete }) => {
  return (
    <div className='todo-wrapper'>
      <p className={`${task.isCompleted ? 'completed' : ''}`}>{task.name}</p>
      <div className='action-wrapper'>
        <button
          className={`${task.isCompleted ? '' : 'complete.button'}`}
          onClick={() => handleComplete(index)}
          disabled={task.isCompleted}
        >
          COMPLETE
        </button>
        <button className='edit-button' onClick={() => handleEdit(task, index)} disabled={task.isCompleted}>
          EDIT
        </button>
        <button className='delete-button' onClick={() => handleDelete(index)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Task;
