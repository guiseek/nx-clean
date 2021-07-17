import { TodoHeaderElement } from './todo-header.element';

describe('TodoHeaderElement', () => {
  let todoHeader: TodoHeaderElement;

  beforeEach(() => {
    todoHeader = new TodoHeaderElement();
  });

  it('should create successfully', () => {
    expect(todoHeader).toBeTruthy();
  });

  it('should have a greeting', () => {
    todoHeader.connectedCallback();

    expect(todoHeader.querySelector('h1').innerHTML).toEqual('Welcome to todo-web!');
  });
});
