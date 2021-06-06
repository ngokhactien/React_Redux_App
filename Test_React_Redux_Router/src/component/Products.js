import { NavLink, Route } from "react-router-dom";
import Product from './Product';

export default function Products(props) {
    const products = [
        {
            id : 1,
            slug :'iphone' ,
            name : 'Iphone 12 Pro',
            price : 35000000
        },
        {
            id : 2,
            slug :'samsum' ,
            name : 'Samsum Galaxy S7',
            price : 10000000
        },
        {
            id : 3,
            slug :'oppo' ,
            name : 'Oppo ',
            price : 20000000
        }
    ];

    const { match } = props ;
    const url = match.url ;

    const result = products.map( (product , index) => {
        var {location} = props ;
        console.log(location);
        return (
            <NavLink  key={index} to ={`${url}/${product.slug}`}>
                <li className="list-group-item">
                    {product.id} - {product.name} - {product.price}
                </li>
            </NavLink>
        );
    })

    return (
        <div className='container'>
            <h1> Danh sách sản phẩm</h1>
            <div className="row">
                <ul className="list-group">
                    {result}
                </ul>
            </div>
            
            <div className="row">
                <Route path='/product/:name' component={Product}  /> {/* path='/product/:name' dòng này chuyền dữ liệu qua product */} 
            </div>
            
        </div>
    );
}

