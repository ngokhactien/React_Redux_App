import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as sidebarActions from './../../actions/sidebar';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './styles';
function Dashboard(props) {
  const { classes , children , name , showSidebar }=props;

  const handleToggleSidebar = () => {

  };

  return (
      <div className={classes.dashboard} >
        <Header name={name}/>
        <div className={classes.wrapper}>
          <Sidebar showSidebar={showSidebar}  onToggleSidebar ={handleToggleSidebar}/>
          <div className={classes.wrapperContent}>
            { children }
          </div>
        </div>
      </div>
      // Header , Sidebar vì 2 trang đều dùng header và sidebar  và children là các component được đưa vào
    );
}

Dashboard.propTypes = {
  children : PropTypes.object ,
  classes :PropTypes.object ,
  name :PropTypes.string,
  showSidebar :PropTypes.bool,
  sidebarActionCreators : PropTypes.shape({
    showSidebar : PropTypes.func ,
    hideSidebar : PropTypes.func ,
  })
};

const mapStateToProps = state =>{
  return {
    showSidebar : state.sidebar.showSidebar
  }
}

const mapDispathToProps = dispath =>{
  return {
    sidebarActionCreators : bindActionCreators(sidebarActions ,dispath )
  }
}
const withConent = connect(mapStateToProps, mapDispathToProps);

export default compose(
  withConent ,
  withStyles(styles)
) (Dashboard);
