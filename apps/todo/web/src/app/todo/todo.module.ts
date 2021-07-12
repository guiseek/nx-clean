import { TodoRoutingModule } from './todo-routing.module';
import { TodoDefaultPresenter, TodoPresenter } from '@todo/todo-presentation';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoInMemoryRepository } from '@todo/todo-data-access';
import { TodosComponent } from './todos/todos.component';
import { TodoRepository } from '@todo/todo-domain';
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
  imports: [CommonModule, FormsModule, TodoRoutingModule],
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
          { id: '1', title: 'test', completed: false },
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
