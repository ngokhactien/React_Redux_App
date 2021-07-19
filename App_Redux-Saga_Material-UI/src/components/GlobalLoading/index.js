import { withStyles } from '@material-ui/core/styles';
import styles from './styles' ;
import loading from './../../assets/images/loading.gif' ;
import PropTypes from 'prop-types';
import { bindActionCreators , compose } from 'redux' ;
import { connect } from 'react-redux' ;
import * as uiActions from './../../actions/ui' ;

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

// const mapDispatchToProps = dispatch =>{
//   return {
//     uiActions : bindActionCreators(uiActions , dispatch)
//   }
// }

const withConect = connect(mapStateToProps , null) ;

export default compose(
  withStyles(styles),
  withConect
)(GlobalLoading);
