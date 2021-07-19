import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function SearchBox(props) {
  const { classes ,handleChange } = props ;

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={ classes.textField}
        autoComplete="off"
        label="Nhập từ khóa tìm kiếm"
        variant="outlined"
        onChange={handleChange}
        margin='normal'
      />
      {/* <Button className={ classes.buttonDeleteField} variant="contained" color="secondary" onClick={deleteFilter} >
        <DeleteForeverIcon/>
      </Button> */}
    </form>
  );
}

SearchBox.propTypes = {
  classes : PropTypes.object
};

export default withStyles(styles)(SearchBox);
