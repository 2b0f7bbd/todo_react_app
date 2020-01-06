import React from 'react';
import './List.css';
const List = props => {
  if (!props.currentTodoList) {
    return null;
  } else {
    return props.currentTodoList.map(item => {
      return (
        <li key={item.id}>
          <div>
            <span className='text'>{item.text}</span>
            <span className='time'>{item.time}</span>
          </div>
          <i
            className='far fa-trash-alt delete'
            onClick={() => props.clicked(item.id)}
          />
        </li>
      );
    });
  }
};
export default List;
