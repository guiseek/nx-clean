export class TodoMockDto {
  id: string;
  title: string; // <-- different as in todo domain entity
  completed: boolean;

  constructor(params: TodoMockDto) {
    this.id = params.id;
    this.title = params.title;
    this.completed = params.completed;
    // Object.assign(this, params);
  }
}
