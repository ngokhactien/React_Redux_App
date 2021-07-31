import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Proptypes from 'prop-types';
import styles from './styles';

function TaskItem(props) {
  const { classes , task ,status , onClickEdit  } = props ;
  const { id ,title } = task ;

  return (
    <Card key={id} className={classes.card}>
          <CardContent>
              <Grid container justify="space-between">
                  <Grid item md={8} >
                  <Typography component="h2">
                      {title}
                  </Typography>
                  </Grid>
                  <Grid item md={4} >
                      {
                          status.label
                      }
                  </Grid>
              </Grid>
              <p>{task.description}</p>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Fab
              color="primary"
              aria-label="Edit"
              className={classes.fab}
              size="small"
              onClick = {onClickEdit}
            >
              <Icon fontSize='small'>
                edit_icon
              </Icon>
            </Fab>
            <Fab color="primary" aria-label="Delete" className={classes.fab} size="small">
            <Icon fontSize='small'>
              delete_icon
            </Icon>
          </Fab>
          </CardActions>
  </Card>
  );
};

TaskItem.prototype = {
  classes : Proptypes.object,
  task : Proptypes.object,
  status : Proptypes.object ,
  onClickEdit :Proptypes.func ,
};

export default withStyles(styles)(TaskItem);
