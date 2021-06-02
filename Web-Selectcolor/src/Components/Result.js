import React , {Component} from 'react';

class Result extends Component {

    setColor (){
        return {
            color : this.props.color ,
            borderColor :  this.props.color ,
            fontSize :this.props.fontSize
        };
    }
    render(){
        

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : {this.props.color} - Fontsize : {this.props.fontSize}px</p>
                <input   id="content" type="text" style= {this.setColor() } placeholder  = "nhấn để tìm kiếm " />
                
            </div>  
        ); 
    };  
}

export default Result;
