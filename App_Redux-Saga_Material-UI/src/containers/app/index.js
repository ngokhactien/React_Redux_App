import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import theme from './../../commons/Theme';
import Modal from './../../components/Modal';
import configureStore from './../../redux/configureStore';
import TaskBoard from './../taskboard';
import styles from './styles.js';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>   {/* kết nốt store của redux*/}
      <ThemeProvider theme={theme}> {/* dùng để màu sắc và css chung cho cả dự án */}
        <ToastContainer/>  {/* hiện thị thông báo*/}
        <Modal/>
        <TaskBoard/>
        <GlobalLoading/>     {/* hiện thị loading */}
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
