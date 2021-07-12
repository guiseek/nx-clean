import { TodoEntity } from './todo.entity';

describe('Todo Entity', () => {
  it('should be properly initialized', () => {
    const model = TodoEntity.create({
      id: '1',
      name: 'foo',
      completed: true,
    });

    expect(model.id).toEqual('1');
    expect(model.name).toEqual('foo');
    expect(model.completed).toEqual(true);
  });
});
