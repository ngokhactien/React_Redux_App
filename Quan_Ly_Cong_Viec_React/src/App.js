import React , { Component} from 'react';

import './App.css';
import Teskform from './component/Teskform';
import Control from './component/Control';
import TaskList from './component/TaskList';
import { findIndex , filter } from 'lodash';

// eslint-disable-next-line no-unused-vars
// import demo from './trainning/demo';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks : [] ,
            isDisplayForm : false ,
            taskEditing : null ,
            filterName : '',
            filterStatus : -1 ,
            keyword : '' ,
            sortBy: 'name',
            sortValue : 1
        }
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks =  JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            });
        }
    }
    s4(){
        return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
    }
    genreteId(){
        return this.s4() + this.s4() + '-' + this.s4() + this.s4() +'-' +this.s4();
    }

    ontoggleForm = () => {
        if(this.state.isDisplayForm && this.state.taskEditing !== null){
            this.setState({ 
                isDisplayForm : true,
                taskEditing : null
            });
        }else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm ,
                taskEditing : null
            });
        }
    }
    oncloseForm =() =>{
        this.setState({
            isDisplayForm :  false
        });
    }
    onShowform = () => {
        this.setState({
            isDisplayForm :  true
        });
    }
    onsubmit = (data) =>{
        var { tasks } = this.state ;
        if(data.id === ''){
            data.id = this.genreteId();
            tasks.push(data);
        }else{
            var index = this.findIdex(data.id);
            tasks[index] = data ;
        }
        this.setState({
            state : tasks ,
            taskEditing : null
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    onUpdataStatus = (id) => {
        var { tasks } = this.state ;
        // var index = this.findIdex(id) ;

        var index = findIndex(tasks ,(task) =>{
            return task.id === id ;
        });
        if(index !== -1){
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks :tasks
            });
            localStorage.setItem('tasks' , JSON.stringify(tasks));
        }
    }
    findIdex = (id ) => {
        var { tasks } = this.state ;
        var result = -1;
        tasks.forEach((task , index)=>{
            if(task.id === id ){
                result = index;
            }
        });
        return result ;
    }
    onDelete = (id) =>{
        var { tasks } = this.state ;
        var index = this.findIdex(id);
        if(index !== -1){
            tasks.splice(index ,1 );
            this.setState({
                tasks :tasks
            });
            localStorage.setItem('tasks' , JSON.stringify(tasks));
        }
        this.oncloseForm();
    }
    onUpdate = (id) => {
        var { tasks } = this.state ;
        var index = this.findIdex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });
        this.onShowform();
        console.log(taskEditing)
    }

    onfilter = ( filterName , filterStatus) =>{
        filterStatus = parseInt(filterStatus);
        this.setState({
                filterName : filterName.toLowerCase() ,
                filterStatus : filterStatus  
        });
    }
    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        })
    }
    onSort = (sortBy ,sortValue) =>{
        this.setState({
            sortBy: sortBy,
            sortValue : sortValue
        })
    }
    render(){
        var { 
                tasks ,
                isDisplayForm ,
                taskEditing  , 
                filterName ,
                filterStatus ,
                keyword ,
                sortBy ,
                sortValue
            } = this.state;
        
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ;
        })
        if(filter){
            if(filterName){
                // tasks = tasks.filter((task)=>{
                //     return task.name.toLowerCase().indexOf(filterName ) !== -1 ;
                // });
                tasks = filter(tasks,(task)=>{
                    return task.name.toLowerCase().indexOf (filterName) !== -1 ;
                });
            }

            tasks = tasks.filter((task)=>{
                if(filterStatus ===  -1 ) {
                    return task;
                }else {
                    return task.status === ( filterStatus === 1 ? true : false) ;
                }
            })
        }
        
        if(sortBy === 'name'){
            tasks.sort((a,b)=>{
                if(a.name > b.name) return sortValue ;
                else if(a.name < b.name) return - sortValue ;
                else return 0 ;
            });
        }else {
            tasks.sort((a,b)=>{
                if(a.status > b.status) return -sortValue ;
                else if(a.status < b.status) return sortValue ;
                else return 0 ;
            });
        }
        var element =  isDisplayForm ? 
                <Teskform 
                    onsubmit={this.onsubmit} 
                    oncloseForm = { this.oncloseForm}
                    task ={ taskEditing }
                /> 
                : ' ';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ?'col-xs-4 col-sm-4 col-md-4 col-lg-4' :''}>
                        {/* teskform */}
                        {/* <Teskform/> */}
                        { element}
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick = { this.ontoggleForm }
                        > 
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        {/* tìm kiếm với sắp xếp  */}
                        <Control 
                            onSearch = {this.onSearch}
                            onSort ={this.onSort}
                            sortBy = {sortBy}
                            sortValue = {sortValue}
                        />
                        {/* danh sach hien thi */}
                        <TaskList 
                            tasks= { tasks } 
                            onUpdataStatus = {this.onUpdataStatus}
                            onDelete =  {this.onDelete}
                            onUpdate = {this.onUpdate}
                            onfilter = {this.onfilter } 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
