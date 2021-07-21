import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles.js';
import TaskBoard from '../taskboard/index';
import theme from '../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading/index.js';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}> {/* dùng để màu sắc và css chung cho cả dự án */}
        <ToastContainer/>
        <TaskBoard/>
        <GlobalLoading/>
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
