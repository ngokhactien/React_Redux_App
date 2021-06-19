import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App(props) {
    const { onClose ,open , classes} = props ;
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Thêm mới công việc "}</DialogTitle>
            <DialogContent>
                <TextField
                    id="standard-name"
                    label="Name"
                    className = {classes.textField}
                    margin='normal'
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax={4}
                    className = {classes.textField}
                    margin='normal'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    CANCEL
                </Button>
                <Button onClick={onClose} color="primary" autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default withStyles(styles)(App);
