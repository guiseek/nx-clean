import { render } from '@testing-library/react';

import TodoItem from './todo-item';

const todoMock = {
  id: '1',
  name: 'Todo 1',
  completed: false,
};

describe('TodoItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TodoItem
        todo={todoMock}
        handleRemoveItem={() => null}
        handleToggleItem={() => null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
