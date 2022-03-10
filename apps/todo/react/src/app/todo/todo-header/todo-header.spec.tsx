import { render } from '@testing-library/react';

import TodoHeader from './todo-header';

describe('TodoHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoHeader />);
    expect(baseElement).toBeTruthy();
  });
});
