import { render } from '@testing-library/react';

import Todos from './todos';

describe('Todos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Todos todos={[]} handleRemoveItem={() => null} handleToggleItem={() => null} />);
    expect(baseElement).toBeTruthy();
  });
});
