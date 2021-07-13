import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles.js';
import TaskBoard from '../taskboard/index';
import theme from '../../commons/Theme/index.js';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer/>
        <TaskBoard/>
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
