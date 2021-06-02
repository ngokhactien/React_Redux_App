import React , { Component} from 'react';
import Teskform from './component/Teskform';
import TaskControl from './component/TaskControl';
import TaskList from './component/TaskList';
import { connect  } from 'react-redux';
import './App.css';
import * as action from './actions/index'

class App extends Component {

    // toggle redux
    ontoggleForm = () => {
        var {itemEditing } = this.props
        if(itemEditing && itemEditing.id !== ''){
            this.props.onOpenForm();
        }else{
            this.props.ontoggleForm();
        }
        this.props.onClearTask({
            id : '' ,
            name : '',
            status : false
        });
    }

    componentWillMount(){
        setTimeout(function(){
            alert("Chào mừng bạn đến với trang web của Tiến <3");
        }, 2000);
    }

    render(){
        var {isDisplayForm} = this.props;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ?'col-xs-4 col-sm-4 col-md-4 col-lg-4' :''}>
                        <Teskform/>
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick = { this.ontoggleForm }
                        > 
                            <span className="fa fa-plus mr-5"> </span> Thêm Công Việc
                        </button>
                        {/* tìm kiếm với sắp xếp  */}
                        <TaskControl/>
                        <TaskList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state =>{
    return {
        isDisplayForm : state.isDisplayForm ,
        itemEditing : state.itemEditing 
    }
}

const mapDispatchToProps = (dispatch , props) =>{
    return {
        ontoggleForm : () =>{
            dispatch(action.toggleform())
        },
        onClearTask : (task) =>{
            dispatch(action.editTask(task));
        },
        onOpenForm :() =>{
            dispatch(action.openForm())
        }
    } 
}

export default connect(mapStatetoProps , mapDispatchToProps) (App);
