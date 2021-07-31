import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TaskItem from './../TaskItem';
import Proptypes  from 'prop-types';
import styles from './styles';

function TaskList(props) {
    const { classes , tasks ,status , onClickEdit } = props ;
    return (
        <Grid item md={4} xs={12} key ={status.value} >
            <Box mt={2} mb={2}>
                <div className={classes.status} >{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask} >
                    {
                        tasks.map(task => {
                                return <TaskItem
                                          task={task}
                                          status={status}
                                          key={task.id}
                                          onClickEdit ={() => onClickEdit(task)}
                                        />
                        })
                    }
            </div>
    </Grid>
    );
}

TaskList.prototype = {
  classes  : Proptypes.object,
  tasks  : Proptypes.object,
  status : Proptypes.object,
  onClickEdit : Proptypes.func

};

export default withStyles(styles)(TaskList);
