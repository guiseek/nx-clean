import { TodoRoutingModule } from './todo-routing.module';
import {
  TodoDefaultPresenter,
  TodoPresenter,
} from '@nx-clean/todo-presentation';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';
import { TodosComponent } from './todos/todos.component';
import { TodoRepository } from '@nx-clean/todo-domain';
import { SharedModule } from '../shared/shared.module';
import { TodoComponent } from './todo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TodoComponent,
    TodosComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, TodoRoutingModule],
  exports: [
    TodoComponent,
    TodosComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
  ],
  providers: [
    {
      provide: TodoRepository,
      useFactory: () => {
        return new TodoInMemoryRepository([
          { id: '1', title: 'Front-end 1', completed: true },
          { id: '2', title: 'Front-end 2', completed: false },
          { id: '3', title: 'Front-end 3', completed: true },
          { id: '4', title: 'Front-end 4', completed: false },
        ]);
      },
    },
    {
      provide: TodoPresenter,
      useFactory: (repo: TodoRepository) => {
        return new TodoDefaultPresenter(repo);
      },
      deps: [TodoRepository],
    },
  ],
})
export class TodoModule {}
