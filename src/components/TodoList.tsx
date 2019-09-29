import React from 'react';
import TodoItem from './TodoItem';
import { useTodosState } from '../contexts/TodosContext';

function TodoList() {
  const todos = useTodosState();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
