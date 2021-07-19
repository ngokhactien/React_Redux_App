import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Modal } from '@material-ui/core';

function App(props) {
  const { onClose ,open , classes , modalStyle} = props ;
  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modal}>
        <from>
          <Grid container spacing={8}>
            <Grid md={8}>
              <TextField
              id="standard-name"
              label="Name"
              className = {classes.textField}
              margin='normal'
              />
            </Grid>
            <Grid md={8}>
              <TextField
                  id="standard-multiline-flexible"
                  label="Multiline"
                  multiline
                  rowsMax={4}
                  className = {classes.textField}
                  margin='normal'
              />
            </Grid>
            <Grid md={12}>
              <Button color='primary'> lưu lại</Button>
              <Button onClick={onClose}> Hủy Bỏ</Button>
            </Grid>
          </Grid>
        </from>
      </div>
    </Modal>
  );
}

export default withStyles(styles)(App);
