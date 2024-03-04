import React from 'react';

const InputForm = ({ task, isEditMode, handleTaskChange, handleSave, handleUpdate }) => {
  return (
    <div className='container'>
      <input value={task} onChange={(event) => handleTaskChange(event)} />
      <button
        disabled={task.length < 3}
        className='create-button'
        onClick={isEditMode ? handleUpdate : handleSave}
      >
        {isEditMode ? 'UPDATE' : 'CREATE'}
      </button>
    </div>
  );
};

export default InputForm;
