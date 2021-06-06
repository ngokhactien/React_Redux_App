export default function ProductItem(props) {
    const {product , index} = props;
    const statusName =product.status ? 'Còn Hàng' : 'Hết Hàng' ;
    const statusClass =product.status ? 'warning' : 'default' ;

    return (
        <tr>
            <td>{index + 1 }</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span class={`label label-${statusClass}`}>
                    { statusName}
                </span>
            </td>
            <td>
                
                <button type="button" class="btn btn-success mr-10">Sửa</button>
                
                <button type="button" class="btn btn-danger ">Xóa</button>
                
            </td>
        </tr>
    );
}

