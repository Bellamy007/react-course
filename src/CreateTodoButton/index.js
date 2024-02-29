import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  const { setMessage } = React.useContext(TodoContext)
  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          setOpenModal(state => !state)
          setMessage('')
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
