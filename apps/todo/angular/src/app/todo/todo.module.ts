import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';
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
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    TodoComponent,
    TodosComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
  ],
})
export class TodoModule {}
