import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContext';

function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value
    });
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="What are you planning to do?"
        onChange={e => setValue(e.target.value)}
      />
      <button>Create</button>
    </form>
  );
}

export default TodoForm;
