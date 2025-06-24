import React from 'react';
import { useTasks } from '../context/TaskContext';

function FilterButtons() {
  const { dispatch, state } = useTasks();

  const filters = ['ALL', 'ACTIVE', 'COMPLETED'];

  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
          style={{ fontWeight: state.filter === filter ? 'bold' : 'normal' }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;