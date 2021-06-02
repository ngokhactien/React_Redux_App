import * as types from './../constants/actionTypes' ;

var s4 = () =>{
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
}
var radomID = ()=>{
    return s4() + s4() + '-' + s4() + s4() +'-' +s4();
}

var findIndex = (tasks,id ) => {
    var result = -1;
    tasks.forEach((task , index)=>{
        if(task.id === id ){
            result = index;
        }
    });
    return result ;
}

const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];

const myReducer = (state = initialState , action) =>{
    var id = '';
    var index = -1 ;
    switch(action.type)
    {
        case types.LIST_All :
            return state ;
        case types.SAVE_TASK :
            var task = {
                id : action.task.id,
                name : action.task.name ,
                status : (action.task.status === 'true' || action.task.status === true) ? true : false 
            };
            if(!task.id){
                task.id = radomID();
                state.push(task);
            }else{
                index = findIndex(state ,task.id);
                state[index] = task
            }
            console.log(task)
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state] ;
        case types.UPDATE_STATUS_TASK :
            id = action.id ;
            index = findIndex(state ,id);
            state[index] ={
                ...state[index],
                status : !state[index].status
            };
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state] ;
        case types.DELETE_TASK :
            id = action.id ; 
            index = findIndex(state , id);
            state.splice(index ,1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state] ;
        default : 
            return state ;
    }
};
export default myReducer ;