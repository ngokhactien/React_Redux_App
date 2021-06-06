import React , {Component} from "react";

class Bai1 extends Component {
    render(){
        return (
            <div>
                <p>{this.props.name} </p>
                <p>{this.props.price} </p>
                <h1>{this.props.children}</h1>
            </div>
        ) ;
    };
}

export default Bai1 ;