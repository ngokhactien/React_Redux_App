import Product from './Product';

function Products(props) {
    var {products} = props;
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                { showProducts(products)}         
            </div>
        </section>
    );
}

var showProducts = (products) =>{
    if( products.length > 0 ){
        var result = products.map((product , index)=>{
            return <Product key={ index }  product={ product }  />;
        })

    };
    return result;
}


export default Products;
