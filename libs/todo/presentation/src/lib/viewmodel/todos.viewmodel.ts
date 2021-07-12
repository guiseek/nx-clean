export class TodoStateVM {
  filter: 'active' | 'completed' | 'all' = 'all';
  todos: TodoVM[] = [];
  activeTodosCount = 0;
}

export interface TodoVM {
  id: string;
  name: string;
  completed: boolean;

  /**
   * different as in
   * todo domain entity
   */
  editing?: boolean;
}
