import React , { Component } from "react";
import { Link } from 'react-router-dom';
import {actAddProductsRequest ,actEditProductsRequest ,actuUpdateProductsRequest} from './../../actions/index' ;
import { connect } from "react-redux";

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtPrice : '',
            chkbStatus : ''
        }
    }
    
    
    componentDidMount(){
        const {match} = this.props ;
        if(match){
            var id = match.params.id ;
            this.props.onEditProduct(id);
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEidting) {
            var {itemEidting} = nextProps ;
            this.setState({
                id : itemEidting.id,
                txtName : itemEidting.name,
                txtPrice : itemEidting.price,
                chkbStatus : itemEidting.status
            })
        }
    }

    onChange = (event) =>{
        var target = event.target ;
        var name = target.name ;
        var value =  target.type === 'checkbox' ? target.checked : target.value ;
        this.setState({
            [name] : value
        });
    };
    onsave = (event)=>{
        const {history} = this.props
        const {id , txtName , txtPrice , chkbStatus} = this.state ;
        event.preventDefault();
        var product = {
            id : id ,
            name : txtName ,
            price : txtPrice ,
            status : chkbStatus
        }
        if(id){
            //http://localhost:3000/products/id   //http method PUT
            this.props.onUpdateProduct(product)
        }else{
            if(txtName !== ''){    
                this.props.onAddProduct(product);
                //cách 1
                //history.push("/product-list");
                //cách 2 
                history.goBack("/product-list");
            }else{
                alert('Không được để trống Tên Sản Phẩm ')
            };
        };
        history.push("/product-list");
    };
    render(){
        const { txtName , txtPrice , chkbStatus } = this.state ;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit ={this.onsave}>
                <div className="form-group">
                    <label >Tên Sản Phẩm :</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="txtName"
                        value={txtName}
                        onChange={this.onChange}
                        />
                </div>

                <div className="form-group">
                    <label >Giá :</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="txtPrice"
                        value={txtPrice}
                        onChange={this.onChange}
                        />
                </div>

                <div className="form-group">
                    <label >Trạng Thái :</label>
                </div>
                
                <div className="checkbox">
                    <label>
                        <input 
                            type="checkbox" 
                            name="chkbStatus"
                            value={chkbStatus}
                            onChange={this.onChange}
                            checked ={chkbStatus}
                        />
                        Còn Hàng
                    </label>
                </div>
                <Link to='/product-list' className="btn btn-danger mr-10">
                    Trở lại
                </Link>
                <button type="submit" className="btn btn-primary">Lưu Lại</button>
            </form>
            
        </div> 
        
        );
    }
};

const mapStateToProps = state =>{
    return {
        itemEidting : state.itemEidting
    }
}

const mapDispatchToProps = ( dispatch , props ) =>{
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductsRequest(product));
        },
        onEditProduct : (id) => {
            dispatch(actEditProductsRequest(id));
        },
        onUpdateProduct : (product) => {
            dispatch(actuUpdateProductsRequest(product));
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps) (ProductActionPage);