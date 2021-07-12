export class TodoMockDto {
  id: string;
  title: string; // <-- different as in todo domain entity
  completed: boolean;

  constructor(params: TodoMockDto) {
    Object.assign(this, params);
  }
}
