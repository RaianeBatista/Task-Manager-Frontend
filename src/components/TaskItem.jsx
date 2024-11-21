import './TaskItem.scss';

import { MdDelete } from 'react-icons/md';

const TaskItem = ({ task }) => {
  return (
    <div className='task-item-container'>
      <div className='task-description'>
        <label
          className={
            task.isCompleted
              ? 'checkbox-container-completed'
              : 'checkbox-container'
          }
        >
          {task.description}
          <input type='checkbox' defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
          ></span>
        </label>
      </div>

      <div className='delete'>
        <MdDelete size={18} color='#F97474' />
      </div>
    </div>
  );
};

export default TaskItem;
