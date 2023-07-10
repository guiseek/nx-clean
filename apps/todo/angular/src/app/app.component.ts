import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  standalone: true,
  imports: [TodoComponent],
  selector: 'todo-root',
  template: `<todo-angular></todo-angular>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-web';
}
