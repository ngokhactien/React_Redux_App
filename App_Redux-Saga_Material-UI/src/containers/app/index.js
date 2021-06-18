import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles.js';
import TaskBoard from '../taskboard/index';
import theme from '../../commons/Theme/index.js';

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard/>      
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
