import React , {Component} from 'react';

class Reset extends Component {
    resetdefualt = () =>  {
        this.props.onSetDefualt(true);
    }
    render(){
        return (
            <button type="button" className="btn btn-primary" onClick = {this.resetdefualt}>reset</button>
        ); 
    };  
}

export default Reset;
