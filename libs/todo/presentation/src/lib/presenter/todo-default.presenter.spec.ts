import { TodoInMemoryRepository, TodoMockDto } from '@nx-clean/todo-data-access';
import { TodoDefaultPresenter } from './todo-default.presenter';
import { TodoPresenter } from './todo.presenter';
import { skip } from 'rxjs/operators';

describe('Todo Presenter', () => {
  let todoPresenter: TodoPresenter;

  const item1 = { id: '1', title: 'todo 1', completed: true };
  const item2 = { id: '2', title: 'todo 2', completed: false };
  const db: TodoMockDto[] = [item1, item2];

  beforeEach(() => {
    todoPresenter = new TodoDefaultPresenter(new TodoInMemoryRepository(db));
  });

  describe('Initial State', () => {
    describe('Todos', () => {
      it('should return empty array of todos', done => {
        todoPresenter.todos$.subscribe(todos => {
          expect(todos).toEqual([]);
          done();
        });
      });
    });

    describe('Active Todos Count', () => {
      it('should return zero', done => {
        todoPresenter.activeTodosCount$.subscribe(count => {
          expect(count).toEqual(0);
          done();
        });
      });
    });

    describe('Filter', () => {
      it('should return "all"', done => {
        todoPresenter.filter$.subscribe(filter => {
          expect(filter).toEqual('all');
          done();
        });
      });
    });
  });

  describe('Get All Todos', () => {
    describe('Todos', () => {
      it('should return proper todos from repository', done => {
        todoPresenter.todos$.pipe(skip(1)).subscribe(todos => {
          expect(todos).toHaveLength(2);

          expect(todos[0].id).toEqual(item1.id);
          expect(todos[0].name).toEqual(item1.title);
          expect(todos[0].completed).toEqual(item1.completed);
          expect(todos[0].editing).toBeFalsy();

          expect(todos[1].id).toEqual(item2.id);
          expect(todos[1].name).toEqual(item2.title);
          expect(todos[1].completed).toEqual(item2.completed);
          expect(todos[1].editing).toBeFalsy();

          done();
        });

        todoPresenter.getAllTodos();
      });
    });

    describe('Active Todos Count', () => {
      it('should return proper counts of todos', done => {
        todoPresenter.activeTodosCount$.pipe(skip(1)).subscribe(count => {
          expect(count).toEqual(1);
          done();
        });

        todoPresenter.getAllTodos();
      });
    });

    describe('Filter', () => {
      it('should return "all"', done => {
        todoPresenter.filter$.pipe(skip(1)).subscribe(filter => {
          expect(filter).toEqual('all');
          done();
        });

        todoPresenter.getAllTodos();
      });
    });
  });

  describe('Get Completed Todos', () => {
    describe('Todos', () => {
      it('should return proper todos from repository', done => {
        todoPresenter.todos$.pipe(skip(1)).subscribe(todos => {
          expect(todos).toHaveLength(1);

          expect(todos[0].id).toEqual(item1.id);
          expect(todos[0].name).toEqual(item1.title);
          expect(todos[0].completed).toEqual(item1.completed);
          expect(todos[0].editing).toBeFalsy();

          done();
        });

        todoPresenter.getCompletedTodos();
      });
    });

    describe('Active Todos Count', () => {
      it('should return proper counts of todos', done => {
        todoPresenter.activeTodosCount$.pipe(skip(1)).subscribe(count => {
          expect(count).toEqual(1);
          done();
        });

        todoPresenter.getCompletedTodos();
      });
    });

    describe('Filter', () => {
      it('should return "completed"', done => {
        todoPresenter.filter$.pipe(skip(1)).subscribe(filter => {
          expect(filter).toEqual('completed');
          done();
        });

        todoPresenter.getCompletedTodos();
      });
    });
  });
});
