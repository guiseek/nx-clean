import { TodoInMemoryRepository } from './todo.inmemory.repository';
import { TodoRepository } from '@nx-clean/todo-domain';
import { forkJoin } from 'rxjs';

describe('Todo In Memory Repository', () => {
  let repo: TodoRepository;

  beforeEach(() => {
    repo = new TodoInMemoryRepository([
      {
        id: '1',
        title: 'one',
        completed: false,
      },
      {
        id: '2',
        title: 'two',
        completed: false,
      },
      {
        id: '3',
        title: 'three',
        completed: true,
      },
    ]);
  });

  it('get all', (done) => {
    repo.getAllTodos().subscribe((todos) => {
      expect(todos.length).toEqual(3);
      done();
    });
  });

  it('get completed', (done) => {
    repo.getCompletedTodos().subscribe((todos) => {
      expect(todos.length).toEqual(1);
      done();
    });
  });

  it('get active', (done) => {
    repo.getActiveTodos().subscribe((todos) => {
      expect(todos.length).toEqual(2);
      done();
    });
  });

  it('add todo', (done) => {
    const name = 'bar';
    const add$ = repo.addTodo(name);
    const all$ = repo.getAllTodos();

    forkJoin(add$, all$).subscribe(([todo, todos]) => {
      expect(todo.name).toEqual('bar');
      expect(todos.length).toEqual(4);
      done();
    });
  });
});
