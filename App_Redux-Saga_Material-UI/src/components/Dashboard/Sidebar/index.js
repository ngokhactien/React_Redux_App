import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { ADMIN_ROUTES } from './../../../contants';
import styles from './styles';

function Sidebar(props) {

  const { classes , showSidebar , onToggleSidebar } = props;

  const toggleDrawer = value =>{
    if(onToggleSidebar){
      onToggleSidebar(value)
    }
  }

  const rederList = () => (
      <div className={classes.list}>
        <List component="div">
        {
          ADMIN_ROUTES.map(item =>
            (
              <NavLink
                key={item.path}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                <ListItem
                  className={classes.menuItem}
                  button
                >
                  {item.name}
                </ListItem>
              </NavLink>
            )
          )
        }
        </List>
      </div>
  );

  return (
    <Drawer
    open={showSidebar}
    onClose={() => toggleDrawer(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="persistent"
    >
      {rederList()}
    </Drawer>
  );
}

Sidebar.propTypes = {
  classes : PropTypes.object,
  showSidebar :PropTypes.bool,
  onToggleSidebar : PropTypes.func ,
};

export default compose(
  withStyles(styles)
) (Sidebar);
