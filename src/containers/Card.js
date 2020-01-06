import React, { useState, useEffect } from 'react';
import InputForm from '../components/InputForm/InputForm';
import List from '../components/List/List';
import './Card.css';

function Card() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (localStorage) {
      for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.getItem(localStorage.key(index)).includes('id')) {
          const todo = JSON.parse(
            localStorage.getItem(localStorage.key(index))
          );
          setTodoList(prevState => [...prevState, todo]);
        }
      }
    }
  }, []);

  const submitHandler = (event, textTodo) => {
    event.preventDefault();

    const currentTime = new Date().toLocaleTimeString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    const todo = {
      id: Math.trunc(Math.random() * 100).toString(),
      time: currentTime,
      text: textTodo
    };

    setTodoList(prevState => [...prevState, todo]);

    localStorage.setItem(todo.id, JSON.stringify(todo));

    event.target.reset();
  };

  const deleteTodoHandler = id => {
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);

    localStorage.removeItem(id);
  };

  return (
    <div className='Card'>
      <h1>Todo list</h1>
      <InputForm submit={submitHandler} />
      <ul>
        <List currentTodoList={todoList} clicked={deleteTodoHandler} />
      </ul>
    </div>
  );
}

export default Card;
