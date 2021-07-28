import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import loading from './../../assets/images/loading.gif';
import styles from './styles';

function GlobalLoading(props) {
  const { classes , showLoading } = props;
  let xhtml = null ;
  if(showLoading === true) {
    xhtml = (
      <div className={classes.globalLoading}>
        <img src={loading} alt="loading" className={classes.icon}/>
      </div>
    )
  }
  return xhtml;
}

GlobalLoading.propTypes = {
  classes : PropTypes.object
};

const mapStateToProps = state =>{
  return {
    showLoading : state.ui.showLoading
  }
};

const withConect = connect(mapStateToProps , null) ;

export default compose(
  withStyles(styles),
  withConect
)(GlobalLoading);
