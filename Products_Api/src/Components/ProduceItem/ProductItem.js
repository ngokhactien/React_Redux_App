import { Link } from "react-router-dom";

export default function ProductItem(props) {
    const {product , index ,onDeleteItem} = props;
    const statusName =product.status ? 'Còn Hàng' : 'Hết Hàng' ;
    const statusClass =product.status ? 'warning' : 'default' ;
    const onDelete = (id) =>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm('Bạn có chắc xóa không ?')){
            onDeleteItem(id);
        }
    }

    return (
        <tr>
            <td>{index + 1 }</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}$</td>
            <td>
                <span class={`label label-${statusClass}`}>
                    { statusName}
                </span>
            </td>
            <td>
                
                <Link 
                    to={`/product/${product.id}/edit`}
                    type="button" 
                    class="btn btn-success mr-10"
                >
                    Sửa
                </Link>
                
                <button 
                    type="button" 
                    class="btn btn-danger "
                    onClick= {()=> { onDelete(product.id) }}
                >
                    Xóa
                </button>
                
            </td>
        </tr>
    );
}

