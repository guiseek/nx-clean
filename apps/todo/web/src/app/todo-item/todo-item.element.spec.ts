import { TodoItemElement } from './todo-item.element';

describe('TodoItemElement', () => {
  let todoItem: TodoItemElement;

  beforeEach(() => {
    todoItem = new TodoItemElement();
  });

  it('should create successfully', () => {
    expect(todoItem).toBeTruthy();
  });

  it('should have a greeting', () => {
    todoItem.connectedCallback();

    expect(todoItem.querySelector('h1').innerHTML).toEqual('Welcome to todo-web!');
  });
});
