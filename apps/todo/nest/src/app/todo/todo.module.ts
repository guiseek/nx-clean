import { TodoInMemoryProvider } from '@nx-clean/todo-data-access';
import { TodoController } from './todo.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TodoController],
  providers: [
    TodoInMemoryProvider.forRoot([
      { id: '1', title: 'todo nest', completed: false },
    ])
  ]
})
export class TodoModule {}
