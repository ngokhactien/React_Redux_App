import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../contants';
import TaskList from '../../components/TaskList';

const listTask = [
	{
		id : 1 ,
		title : 'Read Book',
		description : 'Read material ui book',
		status : 0
	},
	{
		id : 2 ,
		title : 'Play football',
		description : 'with my friend',
		status : 2
	},
	{
		id : 3 ,
		title : 'Play game',
		description : '',
		status : 1
	}
]

function TaskBoard(props) {
	const { classes } = props ;
	const renderBoard = ()=>{
			let xhtml = null;
					xhtml = (
						<Grid container spacing={2}>
							{
								STATUSES.map(status =>{
									const taskFiltered = listTask.filter(task => task.status === status.value);
									return <TaskList key={status.value} tasks ={taskFiltered} status={ status}/>
							})
						}
					</Grid>
			)  
		return xhtml;
	}

	return (
			<div className={classes.TaskBoard}>
					<Button variant="contained" color="primary" className={classes.button}>
							<AddIcon /> Thêm mới công việc
					</Button>
					{renderBoard()}
			</div>
	);
}

export default withStyles(styles)(TaskBoard);
