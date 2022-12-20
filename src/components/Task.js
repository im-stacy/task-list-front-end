import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ title, id, isComplete, onUpdateStatus, onDeleteTasks }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const updateStatusOnClickHandler = () => {
    onUpdateStatus(id);
  };

  const deleteTasksOnClickHandler = () => {
    onDeleteTasks(id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={updateStatusOnClickHandler}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={deleteTasksOnClickHandler}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  onDeleteTasks: PropTypes.func.isRequired,
};

export default Task;
