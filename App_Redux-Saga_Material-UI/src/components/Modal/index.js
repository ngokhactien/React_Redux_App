import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { connect } from 'react-redux' ;
import { compose , bindActionCreators } from 'redux' ;
import Modal from '@material-ui/core/Modal';
import styles from './styles';
import * as modalActions from '../../actions/modal' ;

function commonModal(props) {
  const { classes , open ,title, component , modalActionCreators  } = props;
  const { hideModal } = modalActionCreators ;
  return (
    <Modal open={open} onClose={hideModal}>
      <div className={classes.modal} >
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          <HighlightOffIcon className={classes.icon} onClick={hideModal} />
        </div>
        <div className={classes.content}>{component}</div>
      </div>
    </Modal>
  );
}

commonModal.propTypes = {
  open : PropTypes.bool ,
  classes : PropTypes.object,
  component : PropTypes.object,
  title :  PropTypes.string,
  modalActionCreators : PropTypes.shape({
    hideModal : PropTypes.func ,
  })
};

const mapStateToProps = state => ({
  open : state.modal.showModal ,
  component : state.modal.component,
  title : state.modal.title
});

const mapDispatchToProps = dispatch => ({
  modalActionCreators : bindActionCreators(modalActions , dispatch) //modalActions cái này là của./../../actions/modal  action và chuyền vào dispatch
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
) ;

export default compose(
  withStyles(styles),
  withConnect
)(commonModal);

