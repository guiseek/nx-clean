export class TodoEntity {
  id: string;
  name: string;
  completed?: boolean;

  private constructor(params: TodoEntity) {
    Object.assign(this, params);
  }

  static create(params: TodoEntity) {
    return new this(params);
  }
}
