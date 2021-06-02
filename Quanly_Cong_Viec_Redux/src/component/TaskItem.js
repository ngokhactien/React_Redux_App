import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index' ;
class TaskItem extends Component {

    onUpdataStatus = () => {
        this.props.onUpdataStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    showStatusElement(){
        return (    
            <span 
                className={ this.props.task.status === true ? 'label label-success' :'label label-danger' }
                onClick = { this.onUpdataStatus}
            >
                { this.props.task.status === true ? 'kích hoạt' : 'ẩn'}
            </span>
        );
    }

    render(){

        var  { task ,index } =  this.props;
        
        return (
            <tr>
                <td> {index +1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    { this.showStatusElement()}
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick = { this.onEditTask }
                    >
                        <span className="fa fa-pencil mr-5"></span> Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick ={ this.onDeleteItem}
                    >
                        <span className="fa fa-trash mr-5"></span> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch , props) =>{
    return {
        onUpdataStatus : (id) =>{
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask : (id) =>{
            dispatch(actions.deleteTask(id));
        },
        onCloseForm :() =>{
            dispatch(actions.closeForm())
        },
        onOpenForm :() =>{
            dispatch(actions.openForm())
        },
        onEditTask : (task) => {
            dispatch(actions.editTask(task))
        }

    }
}

export default connect(null,mapDispatchToProps ) (TaskItem);
