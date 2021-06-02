const initialState ={
    by : 'status',
    value : 1
}
//export default myReducer ;
var myReducer = (state = initialState , action) =>{
    if(action.type === 'SORT'){
        var { by , value } = action.sort ;
        return { by , value };  // này đổ ra ngoài index.js và đổ vào sort , nên có action.sort
    }
    return state;
}

export default myReducer ;