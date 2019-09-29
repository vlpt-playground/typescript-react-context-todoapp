import React from 'react';
import './TodoItem.css';
import { useTodosDispatch, Todo } from '../contexts/TodosContext';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
