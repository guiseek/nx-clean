import { TodoFooterElement } from './todo-footer.element';

describe('TodoFooterElement', () => {
  let todoFooter: TodoFooterElement;

  beforeEach(() => {
    todoFooter = new TodoFooterElement();
  });

  it('should create successfully', () => {
    expect(todoFooter).toBeTruthy();
  });

  it('should have a greeting', () => {
    todoFooter.connectedCallback();

    expect(todoFooter.querySelector('h1').innerHTML).toEqual('Welcome to todo-web!');
  });
});
