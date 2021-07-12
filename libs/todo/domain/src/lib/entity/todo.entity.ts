export class TodoEntity {
  id: string;
  name: string;
  completed: boolean;

  private constructor(params: TodoEntity) {
    this.id = params?.id;
    this.name = params?.name;
    this.completed = params?.completed;
  }

  static create(params: TodoEntity) {
    return new this(params);
  }
}
