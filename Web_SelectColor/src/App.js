import React , {Component} from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import Reset from './Components/Reset';
import Result from './Components/Result';
import SizeSetting from './Components/SizeSetting';

class App extends Component {
    constructor(props){
      super(props);
      this.state ={
          color : 'red' ,
          fontSize :  8
      };
      this.onSetColor = this.onSetColor.bind(this);
      this.onclickFontSize = this.onclickFontSize.bind(this);
      this.onSetDefualt = this.onSetDefualt.bind(this);
    }
    onSetColor(params){
      this.setState ({
        color : params
      });
    }
    onclickFontSize (value){
      this.setState( {
          fontSize : ( this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize 
      });
    }
    onSetDefualt(value){
      if(value){
        this.setState ({
          color : 'red' ,
          fontSize :  8
        });
      }
    }
    render(){
    
      return (
        <div className="container mt-50">
          <div className="row">
              <ColorPicker 
                  color = {this.state.color}
                  onclickActiveOncolor = { this.onSetColor}
              />
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting fontSize = { this.state.fontSize}  onclickFontSize= { this.onclickFontSize }/>
                <Reset onSetDefualt = {this.onSetDefualt}/>
              </div>
              <Result color = { this.state.color} fontSize = { this.state.fontSize}/>
          </div>                                
        </div>  
      
    
      ) ; 
};  
  
}

export default App;
