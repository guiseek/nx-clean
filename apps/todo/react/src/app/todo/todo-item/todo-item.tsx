import DeleteIcon from './deleteIcon';

import { TodoVM } from '@nx-clean/todo-presentation';

export interface TodoItemProps {
  todo: TodoVM;
  handleToggleItem(input: HTMLInputElement, id: string): void;
  handleRemoveItem(id: TodoVM): void;
}

export function TodoItem({
  todo,
  handleToggleItem,
  handleRemoveItem,
}: TodoItemProps) {
  return (
    <div key={todo.id} className="form-control w-full max-w-xs justify-normal!">
      <label className="label cursor-pointer">
        <input
          aria-label={todo.name}
          type="checkbox"
          className="checkbox checkbox-primary"
          style={{ maxWidth: '25px' }}
          checked={todo.completed}
          onChange={(event) => handleToggleItem(event.target, todo.id)}
        />
        <span className="label-text"> {todo.name} </span>
        <button className="btn" onClick={() => handleRemoveItem(todo)}>
          <DeleteIcon />
        </button>
      </label>
    </div>
  );
}

export default TodoItem;
