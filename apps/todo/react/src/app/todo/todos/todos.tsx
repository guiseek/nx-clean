import { TodoVM } from '@nx-clean/todo-presentation';

import TodoItem from '../todo-item/todo-item';

export interface TodosProps {
  todos: TodoVM[];
  handleToggleItem(input: HTMLInputElement, id: string): void;
  handleRemoveItem(id: TodoVM): void;
}

export function Todos({
  todos,
  handleToggleItem,
  handleRemoveItem,
}: TodosProps) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className="list-none" key={todo.id}>
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleItem={handleToggleItem}
              handleRemoveItem={handleRemoveItem}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Todos;
