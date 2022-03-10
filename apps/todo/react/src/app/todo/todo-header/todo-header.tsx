import { Grid, Button, Typography } from '@mui/material';
import { NavigateBefore } from '@material-ui/icons';

import styles from './todo-header.module.scss';

/* eslint-disable-next-line */
export interface TodoHeaderProps {}

export function TodoHeader(props: TodoHeaderProps) {
  return (
    <header className={styles['container']}>
      <Grid
        p="20px"
        container
        justifyContent="space-between"
        sx={{ backgroundColor: 'primary.dark' }}
        alignItems="center"
      >
        <Button variant="text" href="/" color="secondary">
          <NavigateBefore />
          <span>Voltar</span>
        </Button>
        <Grid item>
          <Typography variant="h5" color="white">
            React - <span className="opacity">Clean Archtecture .design</span>
          </Typography>
        </Grid>
      </Grid>
    </header>
  );
}

export default TodoHeader;
