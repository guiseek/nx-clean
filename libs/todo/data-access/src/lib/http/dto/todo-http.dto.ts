export class TodoHttpDto {
  id: number;
  title: string; // <-- different as in todo domain entity
  completed: boolean;

  constructor(params: TodoHttpDto) {
    this.id = params.id;
    this.title = params.title;
    this.completed = params.completed;
  }
}
