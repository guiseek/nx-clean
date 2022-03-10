import { ThemeProvider } from '@mui/material/styles';

import { theme } from './app.theme';
import styles from './app.module.scss';

import Todo from './todo/todo';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles['app']}>
        <Todo />
      </div>
    </ThemeProvider>
  );
}

export default App;
