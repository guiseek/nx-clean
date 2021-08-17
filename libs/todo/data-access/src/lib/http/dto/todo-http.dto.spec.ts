import { TodoHttpDto } from './todo-http.dto';

describe('TodoHttpDto', () => {
  let params = { id: 1, title: 'title', completed: true }

  it('should create an instance', () => {
    expect(new TodoHttpDto(params)).toBeTruthy();
  });
});
