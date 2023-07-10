import styles from './app.module.scss';

import Todo from './todo/todo';

export function App() {
  return (
    <div className={styles['app']}>
      <Todo />
    </div>
  );
}

export default App;
