import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoHttpProvider } from '@nx-clean/todo-data-access';
import { TodoRoutingModule } from './todo-routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodoRepository } from '@nx-clean/todo-domain';
import { TodoComponent } from './todo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  TodoDefaultPresenter,
  TodoPresenter,
} from '@nx-clean/todo-presentation';

@NgModule({
  declarations: [
    TodoComponent,
    TodosComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
  ],
  imports: [CommonModule, FormsModule, TodoRoutingModule, HttpClientModule],
  exports: [
    TodoComponent,
    TodosComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
  ],
  providers: [
    TodoHttpProvider.forRoot(HttpClient),
    // TodoInMemoryProvider.forRoot([
    //   { id: '1', title: 'todo angular', completed: false },
    // ]),
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
