import { ReactComponent as BackIcon } from './backIcon.svg';

/* eslint-disable-next-line */
export interface TodoHeaderProps {}

export function TodoHeader(props: TodoHeaderProps) {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <a href="/">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BackIcon />
          </label>
          Back
        </a>
      </div>
      <div className="navbar-center">
        React - <span className="opacity">Clean Archtecture .design</span>
      </div>
    </div>
  );
}

export default TodoHeader;
