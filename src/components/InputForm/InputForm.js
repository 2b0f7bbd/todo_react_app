import React, { useState } from 'react';
import './InputForm.css';

const InputForm = props => {
  const [todo, setTodo] = useState('');

  return (
    <form onSubmit={event => props.submit(event, todo)}>
      <input
        placeholder='Please enter your todo'
        onChange={event => setTodo(event.target.value)}
      />
    </form>
  );
};

export default InputForm;
