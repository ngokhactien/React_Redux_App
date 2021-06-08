import { useEffect, useState } from "react";
import apiCaller from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

export default function ProductActionPage(props) {
    
    const [valueInput , setValueInput] = useState({
        id : '',
        txtName : '',
        txtPrice : '',
        chkbStatus : ''
    });
    
    const { id , txtName , txtPrice , chkbStatus } = valueInput ;
    
    useEffect(()=>{
        const {match} = props ;
        console.log(props.match)
        if(match){
            var id = match.params.id ;
            apiCaller(`products/${id}` , 'GET' , null )
            .then(res => {
                console.log(res)
                var data = res.data ;
                setValueInput({
                    id : data.id,
                    txtName : data.name,
                    txtPrice : data.price,
                    chkbStatus : data.status
                });
            })
        }
    });

    const onChange = (event) =>{
        var target = event.target ;
        var name = target.name ;
        var value =  target.type === 'checkbox' ? target.checked : target.value ;
        setValueInput(
            { ...valueInput, [name]: value }
        );
    }
    const  onsave = (event)=>{
        const {history} = props
        event.preventDefault();
        if(id){
            //http://localhost:3000/products/id   //http method PUT
            apiCaller(`products/${id}`, 'PUT' , {
                    name : txtName,
                    price : txtPrice === '' ? '0' : txtPrice,
                    status :chkbStatus
            }).then(res =>{
                history.push("/product-list");
            })
        }else{
            if(txtName !== ''){    
                apiCaller('products', 'POST' ,{
                    name : txtName,
                    price : txtPrice === '' ? '0' : txtPrice,
                    status :chkbStatus
                })
                // .then(res =>{
                //     console.log(res);
                // });
                //cách 1
                //history.push("/product-list");
                //cách 2 
                history.goBack("/product-list");
            }else{
                alert('Không được để trống Tên Sản Phẩm ')
            };
        };
    };

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit ={onsave}>
                <div className="form-group">
                    <label >Tên Sản Phẩm :</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="txtName"
                        value={txtName}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label >Giá :</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="txtPrice"
                        value={txtPrice}
                        onChange={onChange}
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
                            onChange={onChange}
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
};

